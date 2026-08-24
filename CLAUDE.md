# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

`actslib` is a TypeScript library of data structures, algorithms, and utilities, published to npm (`npm install actslib`). Targets Node >= 24 and ES2022.

## Common Commands

```bash
npm run build        # Compile with tsc -> dist/ (output is dist/lib/index); also type-checks the whole project
npm test             # Run unit tests via Node jasmine + tsx loader (see jasmine.json)
npm run eslint       # Lint with eslint flat config (typescript-eslint recommended)
npm run publish-npm  # Publish to the npm registry
```

Tests run in **Node** through `jasmine` (config in `jasmine.json`, spec dir `src/test`), with `tsx` providing on-the-fly TypeScript transpilation via `node --import tsx`. `npm test` does NOT type-check (tsx transpiles only) — run `npm run build` separately to catch type errors. jasmine 7 rejects duplicate top-level `describe()` names, so each spec file's top suite name must be unique.

To run a single spec file: `node --import tsx ./node_modules/jasmine/bin/jasmine.js --config=jasmine.json --filter=BinaryTree`.

## Architecture

All source lives under `src/lib/` and is re-exported from `src/lib/index.ts`. Tests mirror the structure under `src/test/` as `.spec.ts` files.

```
src/lib/
  index.ts            # barrel: re-exports model, subject, utility, uimodel
  model/              # core data structures + algorithms
  subject/            # higher-level composite subjects
  utility/            # standalone helper functions
  uimodel/            # UI-facing model
```

- **`model/`** — Each data structure has an `I*` interface (e.g. `IList`, `IStack`, `IQueue`, `ITree`, `IBinaryTree`, `IGraph`) plus concrete implementations (`SequenceList`, `LinkList`, `StaticLinkList`, `SequenceStack`, `LinkStack`, `SequenceQueue`, `BinaryTree`, `BinarySearchTree`, `BinaryThreadTree`, `HuffmanTree`, `AVLTree`, `Graph`, `AdjListGraph`, `Dictionary`, `HashTable`, `Set`). `Algorithm.ts` holds free sorting functions (`InsertionSort`, `BubbleSort`, `QuickSort`, `SelectionSort`, `CountingSort`, `MergeSort`, `HeapSort`) plus `KMP` and `SwapElement`.
- **`subject/`** — Composite/domain topics: `Matrix`, `SparseMatrix`, `Polynomial`, `PriorityQueue`, `MaximumSubArray`, `Formula` (math expression parser), `rpn` (reverse Polish notation), `FinanceMethods`, `ChineseChessGeneralProblem`, `PanCakeSorting`, `BaseConverter`.
- **`utility/`** — Pure helpers: `DateUtility`, `StringUtility`, `NumberUtility`, `EnumUtility`, `UIUtility`, `Element`.

## Key Conventions

- **PascalCase public method names on data structures** — e.g. `Length()`, `IsEmpty()`, `GetElement()`, `InsertElement()`, `AppendElement()`, `DeleteElement()`, `ClearAll()`, `Print()`, `InsertNode()`, `FindNode()`, `DFS()`, `BFS()`. This differs from typical camelCase TS style; new classes in `model/` must follow it. (Free functions in `Algorithm.ts` and `utility/` are also PascalCase.)
- **Interfaces are prefixed `I`** (`IList`, `ITree`, `IGraph`); implementations drop the prefix.
- **Sort functions accept an optional `compareFn?: (a: T, b: T) => number`** and fall back to native `<`/`>` comparison when omitted.
- **`IList<T>` extends `IterableIterator<T>`** — list implementations carry iterator state (`_cursor`) and a `next()` method.
- **License header block** at the top of each source file (Alva Chien, MIT).
- `tsconfig.json` uses `strict`, `noImplicitOverride`, `noPropertyAccessFromIndexSignature`, `noImplicitReturns`, `declaration`, `moduleResolution: bundler`, `target/module: ES2022`.
- Formatting (prettier): single quotes, semicolons, 2-space indent, 100 max line length (`.editorconfig`); `.prettierignore` excludes `dist`.

## Publishing

Bump `version` in `package.json` and run `npm run publish-npm`. The compiled entry point is `dist/lib/index` (set via `main`).
