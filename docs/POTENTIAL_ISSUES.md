# Potential Issues in actslib

This document lists potential issues found by reviewing the source under `src/lib/`.
Each item is categorized, references the exact file and line, and includes a concrete failure scenario.

> Severity legend: 🔴 High (wrong result / crash on normal use) · 🟠 Medium (broken edge case or dead/stub code masquerading as functional) · 🟡 Low (minor correctness / API smell).
> Status legend: ✅ FIXED (fix applied + tests added) · ⚠️ RESOLVED-AS-NOTED · (no marker) open.

## Test infrastructure (resolved 2026-08)

The original runner (Karma + ChromeHeadless + `karma-typescript`) was **non-functional**: `karma-typescript`'s legacy bundler isolated script scopes so the `karma-jasmine` adapter threw `ReferenceError: Set is not defined`, and its required `karma-typescript-es6-transform` dependency was abandoned. The suite was migrated to **Node `jasmine@7` + `tsx`** loader (`npm test`, config `jasmine.json`). This surfaced and fixed a latent copy-paste bug: `FakedGuid.spec.ts` had a top-level `describe('Test BinarySearchTree', …)` that collided with the real `BinarySearchTree` spec (jasmine 7 rejects duplicate suite names). `npm run build` (tsc) is now clean. See `CLAUDE.md`.

---

## 1. Algorithms (`src/lib/model/Algorithm.ts`)

### 1.1 ✅ FIXED — `MergeSort` produces descending order instead of ascending — ✅ FIXED — `SelectionSort` returns wrong value — ✅ FIXED — `CountingSort` empty-input crash
**File:** `src/lib/model/Algorithm.ts`

- **`MergeSortImpl2` (lines 378–423):** The merge step picks the *larger* element first (`if (arLeft[lnow] > arRight[rnow])` → take left), which yields a **descending** array. Every other sort in the file (and the tests in `Algorithm.spec.ts`, which assert `14, 19, 29, 33, 57, 71`) produces **ascending** order. So `MergeSort` was inconsistent with the rest of the library.
  - *Scenario:* `MergeSort([3,1,2])` → `[3,2,1]` (descending), inconsistent with `QuickSort([3,1,2])` → `[1,2,3]`.
  - Note: `MergeSort` was *not* covered by any test, so this passed CI silently.

- **`SelectionSort` (line 285–310):** The function sorts correctly but `return false` at the end (line 309) even on success. All sibling sorts return `true` on success. Callers checking the boolean return get a misleading "failure".
  - *Scenario:* `SelectionSort([3,1,2])` sorts the array to `[1,2,3]` but returns `false`.

- **`CountingSort` (line 319):** No guard for an empty input array. `datalist[0]` throws on an empty array (`TypeError: Cannot read properties of undefined`).

**Fix:**
- `MergeSortImpl2`: comparison flipped to pick the *smaller* element first (`<=` instead of `>`), so the merge yields ascending order like the rest of the library. (Test `#22` caught this; `#25`/`#26` cover already-sorted and descending inputs.)
- `SelectionSort`: added `: boolean` return type, empty-input guard (returns `false`), and changed the trailing `return false` → `return true` on success. (Tests `#14`–`#16` assert the `true` return; `#17` covers empty input.)
- `CountingSort`: added an early `if (datalist.length <= 0) return;` guard before indexing `datalist[0]`. (Tests `#18`–`#21` cover normal/negative/empty/single-element.)

**Collateral fixes surfaced by the new `HeapSort` coverage (1.2):** the previously-untested `HeapSort` had two latent bugs that only the new object-key tests exposed:
- `Heapsort_BuildMaxHeap` passed `datalist.length` as the heap `size`, but the heapify guard treats `size` as the *max valid index* (`child <= size`) — so it read index `length` (one past the end, `undefined`). For numbers/strings `undefined > x` is `false`, masking the bug; for objects the `compareFn` threw `TypeError: Cannot read properties of undefined (reading 'seq')`. Fixed to pass `datalist.length - 1`.
- `HeapSort`'s extraction loop called `Heapsort_MaxHeapify(datalist, 0, heapsize)` **without forwarding `compareFn`**, so the re-heapify always used the primitive `>` path — which never swaps objects (`{} > {}` is `false`), leaving the heap un-re-heapified and producing wrong order (e.g. `[4,3,2,1,5]` instead of `[1,2,3,4,5]`). Fixed to pass `compareFn`. (Tests `#27`–`#29` cover number/string/object; the object case is what caught both bugs.)

### 1.2 ✅ FIXED — `Algorithm.spec.ts` only tests 3 of 8 sorts
Only `InsertionSort`, `QuickSort`, `BubbleSort` had tests. `BinaryInsertSort`, `SelectionSort`, `CountingSort`, `MergeSort`, `HeapSort`, and `KMP` had **no test coverage**, which is why the `MergeSort` direction bug and the `SelectionSort` return-value bug went unnoticed.

**Fix:** added 25 specs (`#10`–`#34`) covering `BinaryInsertSort` (number/string/object/empty), `SelectionSort` (number/string/object/empty), `CountingSort` (number/negative/empty/single), `MergeSort` (number/string/object/already-sorted/descending), `HeapSort` (number/string/object), and `KMP` (start/middle/not-found/overlapping/pattern-longer-than-source). The new `HeapSort` object spec is what surfaced the two collateral bugs above.

---

## 2. Lists (`src/lib/model/`)

### 2.1 ✅ FIXED — `SequenceList.InsertElement` cannot insert at the tail
**File:** `src/lib/model/SequenceList.ts:99-114`

The guard rejected `index >= this._data.length`, so inserting at the position equal to current length (appending via `InsertElement`) always failed, and the trailing-append branch was unreachable. It also unconditionally rejected `null`/`undefined` elements even for generic `T` that may include them.

**Fix:** guard is now `index < 0 || index > this._data.length` (tail insert allowed); body uses `this._data.splice(index, 0, elem)`. Tests: `#4a` (insert at tail), `#4b` (insert at head + out-of-range rejection).

### 2.2 ✅ FIXED — `SequenceList.DeleteElement` corrupts the array
**File:** `src/lib/model/SequenceList.ts:128-143`

`DeleteElement` used `delete this._data[this._data.length - 1]` + `this._data.length--`, which created a sparse hole and could leave a trailing `undefined` slot.

**Fix:** replaced with `this._data.splice(index, 1)` (compact, no holes). Tests: `#5a` (no trailing hole; tail delete; out-of-range lookup returns null), `#5b` (out-of-range and empty-list deletion returns false).

### 2.3 ✅ FIXED — `SequenceList.InsertElement` rejects `null`/`undefined` elements unconditionally
**File:** `src/lib/model/SequenceList.ts:100-102`

`elem === undefined || elem === null` was treated as failure. For a generic `T` that legitimately includes `null` or `undefined` values, inserts were silently rejected. (Same pattern in the guard logic.)

**Fix:** resolved as collateral during the 2.1 tail-insert rewrite — the current guard is `index < 0 || index > this._data.length` only; there is no `null`/`undefined` element rejection, so a `SequenceList<number | null>` stores `null`/`undefined` fine. Regression test `#4c` (nullable `T`: insert `null`, append `undefined`, interleave a real value) locks this in.

### 2.4 ✅ FIXED — `LinkList.IsExist` throws on an empty list
**File:** `src/lib/model/LinkList.ts:265-279`

`IsExist` accessed `cur!.Data` where `cur` was `this._head` (which is `null` on an empty list), throwing `TypeError`.

**Fix:** rewrote the method as a single `while (cur !== null)` loop with a proper null guard, so an empty (or cleared) list safely returns `false`. Tests added (`#7a` empty list, `#7b` cleared list, `#7c` head/tail/middle/not-found).

### 2.5 ✅ FIXED — `LinkList.DeleteElement` off-by-one guard / index === length allowed
**File:** `src/lib/model/LinkList.ts:204-231`

Guard used `index > this._length` (should be `>=`), so deleting at `index === length` (one past the end) was permitted and then walked off the end, dereferencing `cur.Next!` on a trailing node and setting `cur.Next = cur.Next!.Next` → `null`-dereference / undefined behavior.

**Fix:** guard is now `index < 0 || index >= this._length || this._head === null` (rejects `index === length`). The walk-target line uses `cur!.Next = cur!.Next!.Next` with a comment noting the target is guaranteed non-null because `index < length` was checked. Tests `#5a` (delete at `index === length` rejected without throwing; list unchanged), `#5b` (tail-node delete safe; `Print()` afterwards doesn't follow a stale null `Next`), `#5c` (negative/out-of-range rejection), `#5d` (empty list returns false, no throw).

### 2.6 ✅ FIXED — `StaticLinkList` is entirely non-functional (stubs + guaranteed crash)
**File:** `src/lib/model/StaticLinkList.ts`

`GetElement`, `InsertElement`, `AppendElement`, `DeleteElement`, and `Print` bodies were all **commented out** (returning `null`/`true`/`-1`/`false`/`''`). `next()` dereferenced `this._cursor.Cursor` but `_cursor` was never assigned (declared `!`), so the iterator threw `TypeError`. The constructor allocated `new Array<…>(200)` of empty slots, so `Length()` also threw on the first uninitialized slot. A typo `constructore()` (not a constructor) meant the cursor-init never ran. The class was exported but unusable.

**Fix:** rewrote `StaticLinkList` with a proper static-link-list design — a fixed array with index 0 as the free-list header and index 1 as the logical list head, a `malloc`/`free` pair over the free list, real `Length`/`GetElement`/`InsertElement` (head/middle/tail)/`AppendElement`/`DeleteElement`/`Print`, and a working `next()` iterator (with `return`/`throw` implemented). New spec `src/test/model/StaticLinkList.spec.ts` (`#1`–`#11`) covers empty state, append/get, insert at head/middle/tail, out-of-range rejection, delete (head/middle/tail/last), clear-then-reuse, iteration + re-iteration + empty iteration, print with custom splitter, and pool exhaustion (capacity 5 = 2 headers + 3 slots) with reclamation.

---

## 3. Trees (`src/lib/model/`)

### 3.1 ✅ FIXED — `BinaryTree.FindNode` always returns `null`
**File:** `src/lib/model/BinaryTree.ts:140-153`

Inside the loop, when a match was found the code did `return null;` instead of `return nod;`, so a found element was reported as not found. `FindNode` always returned null.

**Fix:** return the matched node (`return nod`); also corrected the return type from `IBinaryTreeNode<T> | null` to `BinaryTreeNode<T> | null` (the interface `IBinaryTreeNode<T>` requires `key`/`data`, which `BinaryTreeNode<T>` does not expose). `InsertNode`'s signature widened to accept `BinaryTreeNode<T> | null`. Tests added in `src/test/model/BinaryTree.spec.ts`.

### 3.2 ✅ FIXED — `BinarySearchTree.search` / `inOrderTraverse` rely on `undefined`-checks via the `!` definite-assignment
**File:** `src/lib/model/BinarySearchTree.ts`

- `search` (line 78) returned `this.searchNode(this._root, key)!` but if the tree is empty `_root` is `undefined`; `searchNode` does handle `undefined` and returns `undefined`, which was then non-null-asserted away by the caller's `!`. The return type lied (declared `BinarySearchTreeNode<T>`, could be `undefined`).
- The traversal/min/max methods guard with `if (node !== undefined)` but node fields were declared `leftNode!` (definite assignment). On a leaf these are `undefined`, so the recursive calls recurse into `undefined` — guarded, but the "leaf" check was `!== undefined` against a field whose type claimed to never be undefined, which was fragile and unverifiable.

**Fix:**
- `search` return type widened to `BinarySearchTreeNode<T> | undefined`; the lying `!` non-null assertion removed (it now returns `searchNode(...)` directly). The `IBinarySearchTree.search` interface in `ITree.ts` widened to `IBinaryTreeNode<T> | undefined` to match.
- `BinarySearchTreeNode.leftNode`/`rightNode` changed from `!` definite-assignment to optional (`?: BinarySearchTreeNode<T>`), so the type system now admits the `undefined` that leaves actually hold. The recursion helper params (`inOrderTraverseNode`, `preOrderTraverseNode`, `postOrderTraverseNode`, `minNode`, `maxNode`, `searchNode`) widened to `| undefined`, making the existing `if (node !== undefined)` guards honest null checks rather than unverifiable assumptions. (`AVLTree`, the subclass, already treated these fields as `=== undefined`/truthy, so it needed no changes.)
- `_root` is left as `!`-declared (non-undefined type) to limit ripple: it *is* `undefined` before the first insert, but every use site already runtime-guards it, and widening it would force `rootNode` getter + interface changes beyond the scope of this issue.

Existing test `#8` updated to non-null-assert `node!.key` after the `toBeTruthy` guard; `AVLTree.spec.ts` likewise. New tests `#1a` (empty-tree `search` returns `undefined`), `#1b` (all three traversals on an empty tree don't throw), `#1c` (empty-tree `min`/`max` return `undefined`).

### 3.3 ✅ FIXED (partial) — `BinarySearchTree.remove` / `BinaryThreadTree` inconsistencies
**File:** `src/lib/model/BinarySearchTree.ts:124-125` and `src/lib/model/BinaryThreadTree.ts`

- `BinarySearchTree.remove(key)` was an **empty stub** — calling it did nothing, even though the protected `removeNode` (which implements the three deletion cases) existed and was never called.
  - **Fix:** `remove` now calls `removeNode`, updates `this._root` (so removing the root works), returns `true`/`false` (found / not found), and refuses on an empty tree. Also fixed the two-children case in `removeNode` to copy the successor's **data** (not just its key) so the removed node's payload is fully replaced. Tests `#9`–`#15` cover leaf / one-child / two-children / root / not-found / empty / successor-data-replacement.
- `BinaryThreadTree` (line 92-146): the traversal methods guard `if (curNode !== null)` but `_left`/`_right` are typed `| undefined` and initialized to `undefined`. Since `undefined !== null`, the guard never short-circuits, and `InorderImpl(curNode.Left!, ...)` recurses on `undefined` → throws. Also `InsertNode`/`FindNode` use `null` checks against fields that hold `undefined`. The whole class mixes `null` and `undefined` semantics inconsistently and is effectively broken.
  - **Fix:** replaced every `!== null` / `=== null` guard with truthiness checks (`if (curNode)`, `!parNode.Left`, `this._root`), widened the recursive helper params to `| undefined`, and widened `IBinaryTree.InsertNode`'s `parNode` param to `IBinaryTreeNode<T> | null` (the JSDoc already said `null` means "add as root", but the type forbade it). New spec `src/test/model/BinaryThreadTree.spec.ts` (`#1`–`#11`) covers empty-tree traversals (must not throw), all three traversals on a built tree, `InsertNode` root/second-root/full-parent, and `FindNode` found/not-found/empty.

### 3.4 ✅ FIXED — `AVLTree` does not self-balance (all rotation logic is commented out)
**File:** `src/lib/model/AVLTree.ts:33-43, 123-223`

`AVLTree.insert` overrode `BinarySearchTree.insert` but performed only a plain BST insert — the entire balance-factor / rotation logic (`getBalanceFactor`, `rotationLL/RR/LR/RL`) was commented out, so an `AVLTree` was just a `BinarySearchTree` with no AVL guarantees. The rotations existed but were never invoked; worst-case height was O(n).

**Fix:** implemented a functional recursive `insertAVL` (descend to the insertion point, rebalance on the way back up) plus a `balance(node)` dispatcher that applies the LL/RR/LR/RL rotations based on the balance factor, and wired `insert` to set `this._root` from the rebalanced result. Also typed `getNodeHeight` to accept `| undefined` children (returns -1 for absent). Tests `#2`–`#9` verify: ascending inserts 1..7 → root 4, height 2 (a plain BST would be height 6); descending inserts 1..7 → root 4, height 2; the Left-Right and Right-Left single-imbalance cases; a 100-node ascending run with height ≤ 10 (logarithmic, ≤ 1.44·log₂(n+2)); search correctness after rebalancing; and duplicate-key is a no-op. An `assertAVLBalanced` helper walks the whole tree asserting `|height(left) − height(right)| ≤ 1` at every node.

### 3.5 🟠 `HuffmanTree` is an empty class
**File:** `src/lib/model/HuffmanTree.ts`

`export class HuffmanTree<T> { }` — no members, no logic. Exported as a feature but does nothing.

---

## 4. Graphs (`src/lib/model/`)

### 4.1 ✅ FIXED — `Graph.BFS` is a stub that always returns `[]`
**File:** `src/lib/model/Graph.ts:214-219`

`BFS()` was declared (required by `IGraph`) but its body was `return [];` — it never performed a breadth-first search (the original implementation was commented out).

**Fix:** implemented a queue-based BFS that follows out-edges (directed, consistent with `DFS`), seeds the queue with each not-yet-visited vertex in insertion order so disconnected components are reached, and de-duplicates via a visited-id list. Added a private `findVertex(id)` helper. Tests `#5`–`#9` cover: visits all reachable vertices, BFS ordering from a single source, empty graph returns `[]`, disconnected components, and no double-visiting of vertices reachable via multiple paths.

### 4.2 ✅ FIXED — `GraphAdjaceList.DFS` and `BFS` are stubs that always return `[]`
**File:** `src/lib/model/AdjListGraph.ts:206-215`

Both `DFS()` and `BFS()` returned `[]` without traversing, so the adjacency-list graph had no working traversal despite implementing `IGraph`.

**Fix:** implemented a recursive `DFS` and a queue-based `BFS`, both directed (follow out-edges, consistent with `Graph`), seeding traversal at each not-yet-visited vertex in insertion order so disconnected components are reached. Out-edges are read from each vertex's adjacency `LinkList` via `_adjList.get(id.toString())` (null-checked). Added a private `findVertex(id)` helper. Tests `#5`–`#10` cover DFS reachability/ordering, BFS reachability/ordering, empty graph, disconnected components, and no double-visiting of vertices reachable via multiple paths.

### 4.3 ✅ FIXED — `GraphAdjaceList.IsEdgeExist` / `EdgeNumber` / `AddEdge` assumed `.get()` never returns undefined
**File:** `src/lib/model/AdjListGraph.ts:143-154` (and `EdgeNumber`, `AddEdge`)

The original doc analysis was over-broad. Re-verification shows: `AddVertex` always does `_adjList.set(id.toString(), new LinkList<…>())`, so for any *existing* vertex `.get(id.toString())` returns an (empty) `LinkList`, never `undefined`. So `IsEdgeExist` would not actually throw on an existing vertex with no edges (the loop simply doesn't run). The genuine latent risk was the **type**: after `Dictionary.get` was corrected to return `X | undefined` (5.3), the three callers (`EdgeNumber`, `IsEdgeExist`, `AddEdge`) dereferenced `.Length()` / `.GetElement()` without a null check, which the stricter types now flag and which would throw if a caller ever queried a non-existent vertex id.

**Fix:** all three callers now null-check the result of `_adjList.get(...)` (`if (adj)` / `if (llist)`) before using it, returning `0` / `false` / `false` for a missing list. Behavior for existing vertices is unchanged. The deeper structural inconsistency noted originally (a vertex's `LinkList` is created via `new LinkList<…>()` without `InitList`, so `_head` stays `null` until the first edge is added — yet `LinkList.AppendElement` throws `"Invalid list"` when `_head === null`) is real but is papered over by `AddEdge` calling `InitList` before `AppendElement`; it remains a latent fragility tracked separately (low severity).

### 4.4 🟠 `Graph.DFS` only follows out-edges (treats graph as directed)
**File:** `src/lib/model/Graph.ts:166-209`

`DFSImpl` only recurses into edges where `from === vex.id`. The commented-out block (lines 196-207) shows the author considered also following reverse edges. As-is, DFS on an undirected graph represented with single-direction edges will miss reachable vertices. Whether this is a bug depends on intended directedness, but it's undocumented and the `IGraph` interface doesn't say directed.

### 4.5 🟡 `Graph`/`GraphAdjaceList` reject vertex id `0` and negative ids
**File:** `src/lib/model/Graph.ts:112`, `AdjListGraph.ts:160`

`AddVertex` returns `-1` when `id <= 0`. So vertex ids must be positive integers. This is an undocumented constraint (0 and negatives are valid ids conceptually) and `AddEdge` likewise rejects `frm <= 0 || to <= 0`.

---

## 5. Sets / Dictionary / HashTable

### 5.1 ✅ FIXED — `Set.subset` compares a function reference to a function reference (always wrong)
**File:** `src/lib/model/Set.ts:113-126`

`if (this.size > otherSet.size)` compared the **method** `size` (a function reference) on both sides rather than calling them. The early-exit guard was dead code.

**Fix:** part of the `Set` redesign (see 5.2) — now `this.size() > otherSet.size()` with a real numeric comparison. Tests: `#6a` covers empty-subset, self-subset, and the larger-than size guard.

### 5.2 ✅ FIXED — `Set.add` / `has` / `remove` only work for string/number keys
**File:** `src/lib/model/Set.ts:22-42`

`Set` was backed by a plain object `{}` using values as object keys, so object keys collided via string coercion and `values()` returned coerced string keys instead of the original objects.

**Fix:** `Set` is now generic `Set<T>` backed by a `Map<T, T>`, so values are stored by identity (objects do not collide), `values()` returns the original values, and `has`/`add`/`remove` behave like the native `Set`. Existing tests that relied on number coercion still pass; the previously commented-out `expect(vals[0]).toBe(1)` assertions are now enabled and pass. New tests: `#7` (object-key identity), `#8` (clear).

### 5.3 ✅ FIXED — `Dictionary.get` return type lies
**File:** `src/lib/model/Dictionary.ts:41-43`

Signature `public get(key: string): X` returned `undefined` when the key was absent, hiding the `undefined` possibility from callers under `strict` mode.

**Fix:** return type corrected to `X | undefined`; added `getOrThrow(key)` for callers that want to assert presence. Callers in `AdjListGraph` that assumed presence (`EdgeNumber`, `IsEdgeExist`, `AddEdge`) now null-check the result.

### 5.4 ✅ FIXED — `HashTable` has no collision handling and an unused hash function
**File:** `src/lib/model/HashTable.ts`

- `put` (line 18-21) wrote `this._table[pos] = value` directly — collisions (different keys hashing to the same bucket) silently **overwrote** prior entries. No chaining/separate storage.
- `generatedjb2HashCode` (line 40-47) was defined but never used (dead code); only `generateLoseHashCode` was used.
- `remove`/`get` accepted `key: any` but `generateLoseHashCode` expected `string`; passing a non-string called `.charCodeAt` on it → wrong/`NaN` hash.

**Fix:** rewrote `HashTable` with **separate chaining** — each bucket is an array of `{key, value}` entries; `put` appends a new entry on collision (or updates in place if the key already exists), and `get`/`remove` disambiguate by exact-key comparison within the bucket. Adopted the djb2 hash (the former dead `generatedjb2HashCode`) as `hashCode`, which has better distribution than the lose-sum hash (anagrams like `"ab"`/`"ba"` no longer collide by identity). All three public methods are now typed `key: string` (no more `any`); `put` returns `void`, `get` returns `unknown | undefined`, `remove` returns `boolean` (found / not found); added a `size()` accessor. `HashTable` is used only by its own spec (no in-library callers), so the signature changes have no ripple.

**⚠️ Breaking API change:** keys are now `string` (was `any`); `get` may return `undefined` (typed as `unknown | undefined`, was untyped); `remove` now returns `boolean` (was void). External callers passing non-string keys or relying on the old untyped `get` will need adjustment. New spec `HashTable.spec.ts` (`#1`–`#10`) replaces the former `// TBD` stubs: round-trip, missing-key, update-in-place, distinct keys, **collision non-overwrite** (50 keys all retrievable), remove + missing-key returns false, **colliding-key removal leaves bucket-mate intact**, re-add after remove, and **anagram disambiguation** (`"ab"`/`"ba"`).

---

## 6. Subjects / Utilities

### 6.1 ✅ FIXED — `rpn1` uses `eval()` on user input
**File:** `src/lib/subject/rpn.ts:108-110`

`rpn1` did `stack.push(eval(x + token + ' ' + y))`, evaluating a dynamically-built string with `eval`. Since `x`, `y` came from parsing the input string, a malicious/malformed expression could execute arbitrary code.

**Fix:** replaced `eval` with an explicit dispatch through the existing `RPNGetOperatorResult(x, y, token)` helper (handles `+ - * /`), so unsupported tokens throw instead of executing. Operand order preserved (`x op y`). Tests added (`#3` multiply/divide, `#4` multi-step incl. documented `34+5*`→35, `#5` empty input, `#6` no-eval security: `1;throw 5` and `12^` throw).

### 6.2 ✅ FIXED — `RPNGetOperatorResult` wrap of `x / y` in try/catch is dead
**File:** `src/lib/subject/rpn.ts:54-61`

JavaScript division by zero returns `Infinity`/`NaN`; it does **not** throw. So the `try { rst = x / y; } catch (ex) { throw ex; }` never catches anything and divides by zero silently yields `Infinity` instead of an error.

**Fix:** removed the dead try/catch; `case '/': rst = x / y; break;` now stands alone with a comment noting JS division never throws. Behavior is unchanged (division by zero still yields `Infinity`/`NaN` rather than throwing), but the misleading dead code is gone. Tests `#7`–`#9` cover all four operators, division-by-zero yielding `Infinity` (not throwing), `0/0` yielding `NaN`, and unsupported operators throwing.

### 6.3 ✅ FIXED — `Formula.evaulate` (sic) mishandles left-associative operator chains
**File:** `src/lib/subject/Formula.ts:440-449` (method name was misspelled "evaulate" at line 410)

When a new operator had **equal** priority to the top of the operator stack, the code processed only the single top operator then pushed the new one (it did not loop while `>=`). For a left-associative chain like `10 - 2 - 3`, after pushing `10`, `-`, `2`, encountering the second `-` compared `operatorPriority('-') >= operatorPriority('-')` → true, popped one op computing `10 - 2 = 8`, pushed `8` and the new `-`, then pushed `3`, finally `8 - 3 = 5` (correct here by luck). But for `10 - 2 + 3` the ordering of evaluation with only a single pop could produce wrong associativity results because it didn't fully drain operators of equal precedence before pushing. (Compare with the correct draining loop in `RPN.buildExpress`.) Also the method name `evaulate` was a typo of `evaluate`.

**Fix:** replaced the single `if (>=)` pop with a draining `while (!operStack.IsEmpty() && operatorPriority(peek) >= operatorPriority(incoming))` loop, mirroring `RPN.buildExpress`. This pops every stacked operator of equal-or-higher precedence before pushing the new one, so left-associative chains evaluate left-to-right. `(` has priority 0, so the loop naturally stops at an open paren (parenthesized sub-expressions still work). Also renamed the method `evaulate` → `evaluate` and updated the spec's call sites.

**⚠️ Breaking API change:** `FormulaParser.evaulate()` is renamed to `evaluate()`. External callers must rename their calls. New tests `#14`–`#18` cover the previously-failing cases: `10-2-3`→5, `10-2+3`→11, **`1-2*3+4`→-1** (the canonical failure — old code returned -9), `8/4/2`→1 (left-assoc division), and `2*3*4-5`→19.

### 6.4 ✅ FIXED — `DateUtility.String2Date` returns the current date on parse failure
**File:** `src/lib/utility/DateUtility.ts:35-49`

If the string can't be parsed into three valid numbers, the method returns `new Date()` — i.e., **today's date** — instead of signaling an error or returning `null`. A caller passing garbage gets a silently-wrong, seemingly-valid date. (Same silent-fallback when `s` is falsy at line 36-38.)

**Fix:** return type widened to `Date | null`; both the falsy-`s` path and the unparseable-numbers path now return `null` instead of `new Date()`. `String2Date` has no in-library callers (only its spec), so no caller updates were needed. Tests `#2a`–`#2c` cover custom separator, `null` on empty/garbage/missing-parts input (and that the empty-string path returns `null`, not today's date), and single-digit month/day parsing.

### 6.5 ✅ FIXED — `StringUtility.hasDuplicatesInStringArray` parameter typed as `string`, not `string[]`
**File:** `src/lib/utility/StringUtility.ts:63-74`

Declared `hasDuplicatesInStringArray(strarray: string)` but the body iterates `for (let i = 0; i < strarray.length; ++i)` and indexes `strarray[i]`, treating it as an array. Given an actual `string[]`, TypeScript would reject the call; given a single `string`, it iterates characters (checking for duplicate *characters*, not array entries) — semantically wrong versus the method name and JSDoc.

**Fix:** signature corrected to `hasDuplicatesInStringArray(strarray: string[]): boolean`; the `any` accumulator and value typed as `Record<string, boolean>` / `string`, and the stale `tslint-disable` removed. The existing `xit` spec (which called the method with single strings and so would no longer type-check) is replaced with an enabled `it` (`#8`) covering no-duplicates, empty, single-element, head/middle/tail duplicates.

### 6.6 🟡 `FakedGuid` uses `Math.random()` (non-cryptographic)
**File:** `src/lib/model/FakedGuid.ts`

Generates a UUID-like string from `Math.random()`. Fine for non-unique ids, but not a real GUID and not collision-resistant or cryptographically random. The class name ("Faked") acknowledges this, but callers may assume more uniqueness than it provides.

---

## 7. Build / API surface

### 7.1 🟡 Iterator methods `return`/`throw` always throw
**File:** `src/lib/model/SequenceList.ts:49-54`, `LinkList.ts:80-85`, `StaticLinkList.ts:60-65`

`return?(...)` and `throw?(...)` throw `new Error('Method not implemented.')`. Because `IList<T> extends IterableIterator<T>`, these are part of the iterator protocol. Code that breaks out of a `for...of` (which calls `return()` for cleanup) will throw, and any `throw()` usage throws unconditionally.

### 7.2 🟡 `LinkStack.Push` returns length before increment
**File:** `src/lib/model/LinkStack.ts:69-82`

`return this._length++;` returns the pre-increment value, so the first `Push` returns `0` (not `1`), inconsistent with `Array.push` semantics (which returns the new length) that `SequenceStack.Push` follows. Minor API inconsistency.

### 7.3 🟡 Several exported classes are empty stubs
- `HuffmanTree` (`model/HuffmanTree.ts`) — empty class.
- `PanCakeAlgorithm` (`subject/PanCakeSorting.ts:54-68`) — only a constructor and an `UpBound` stub; the actual algorithm is the free function `PanCakeSorting`.
- `FormulaParser.parse` (`subject/Formula.ts:243-381`) — body is almost entirely commented out; `init` stores input but `parse` never produces usable tokens.

---

## Summary by severity

| Severity | Count | Notable |
|----------|-------|--------|
| 🔴 High  | 13 (all ✅ fixed) | `BinaryTree.FindNode` always null, `LinkList.IsExist` crash, `Set.subset` broken guard + object-key collision, `rpn1` `eval()`, `SequenceList` tail-insert + delete corruption, `BinarySearchTree.remove` stub, `BinaryThreadTree` null/undefined guards, `StaticLinkList` non-functional, `AVLTree` never balances, `Graph.BFS` stub, `GraphAdjaceList.DFS`/`BFS` stubs, `GraphAdjaceList.IsEdgeExist` null-check. |
| 🟠 Medium | 12 (10 ✅ fixed: `MergeSort` direction / `SelectionSort` return / `CountingSort` empty guard (1.1); `Algorithm.spec.ts` coverage (1.2); `SequenceList` nullable-T (2.3); `LinkList.DeleteElement` off-by-one (2.5); `BinarySearchTree.search`/traversal undefined-hygiene (3.2); `HashTable` collision handling + djb2 (5.4); `Formula.evaulate` associativity + rename to `evaluate` (6.3); `RPNGetOperatorResult` dead try/catch (6.2); `DateUtility.String2Date` silent fallback (6.4); `StringUtility.hasDuplicatesInStringArray` type (6.5). Plus 2 collateral-fixed: `Dictionary.get` type (5.3); `GraphAdjaceList` null-checks (4.3).) | `HuffmanTree` empty class (3.5), `Graph.DFS` directed-only (4.4) |
| 🟡 Low | 5 | iterator `return/throw` throws, `LinkStack.Push` return value, empty stubs (`HuffmanTree`, `PanCakeAlgorithm`, `FormulaParser.parse`), `FakedGuid`, vertex-id `>0` constraint |

> **Resolution status (2026-08):** all 13 🔴 High items fixed; 10 of 12 🟠 Medium fixed (2 remain: `HuffmanTree` stub and `Graph.DFS` directedness — both design-sensitive). Build (`tsc`) is clean; the suite runs via Node `jasmine` + `tsx` (`npm test`) at **250 specs, 0 failures, 7 pending** (up from a non-functional Karma runner and 0 runnable specs).

### Top recommended fixes
1. ~~Fix `BinaryTree.FindNode`~~ ✅ done.
2. ~~Fix `MergeSortImpl2` comparison direction so `MergeSort` is ascending like the rest.~~ ✅ done (ascending now; `SelectionSort` return value and `CountingSort` empty guard also fixed; 25 sort/KMP specs added, which surfaced 2 collateral `HeapSort` bugs now fixed).
3. ~~Implement or remove `Graph.BFS` / `GraphAdjaceList.DFS` / `BFS` stubs~~ ✅ done.
4. ~~Implement or remove `AVLTree` rebalancing~~ ✅ done (rebalancing implemented + tested).
5. ~~Replace `eval()` in `rpn1` with explicit operator dispatch~~ ✅ done.
6. ~~Implement or remove `StaticLinkList` from the public exports~~ ✅ done (implemented + tested).
7. ~~Fix `Set.subset` guard and object-key backing for `Set`~~ ✅ done (Map-backed `Set<T>` + tests).

