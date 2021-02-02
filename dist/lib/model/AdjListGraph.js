/**
 * @license
 * (C) Alva Chien, 2017 - 2018. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: Graph.ts
 * Implements the graph with Adjacement List.
 *
 */
import { SequenceList } from './SequenceList';
import { Dictionary } from './Dictionary';
import { LinkList } from './LinkList';
/**
 * Vertex of adjace list graph
 */
export class GraphAdjaceListVertex {
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get value() {
        return this._value;
    }
    set value(data) {
        this._value = data;
    }
}
/**
 * Edge of adjace list graph
 */
export class GraphAdjaceListEdge {
    get from() {
        return this._from;
    }
    set from(from) {
        this._from = from;
    }
    get to() {
        return this._to;
    }
    set to(to) {
        this._to = to;
    }
    get weight() {
        return this._weigth;
    }
    set weight(wght) {
        this._weigth = wght;
    }
}
/**
 * Graph with adjace list
 * X: generic type of Vertex
 * Y: generic type of Edge
 */
export class GraphAdjaceList {
    constructor() {
        this._vertex = new SequenceList();
        this._adjList = new Dictionary();
    }
    /**
     * Number of vertext
     */
    VertexNumber() {
        return this._vertex.Length();
    }
    /**
     * Number of edge
     */
    EdgeNumber() {
        let en = 0;
        for (let i = 0; i < this._vertex.Length(); i++) {
            en += this._adjList.get(this._vertex.GetElement(i).id.toString()).Length();
        }
        return en;
    }
    /**
     * Vertex
     */
    Vertexs() {
        const rst = [];
        for (let i = 0; i < this._vertex.Length(); i++) {
            const elem = this._vertex.GetElement(i);
            rst.push(elem);
        }
        return rst;
    }
    IsVertexExist(id) {
        for (let i = 0; i < this._vertex.Length(); i++) {
            if (this._vertex.GetElement(i).id === id) {
                return true;
            }
        }
        return false;
    }
    /**
     * Edges
     */
    Edges() {
        const rst = [];
        if (this._adjList.size() > 0) {
            const vers = this._adjList.values();
            for (let i = 0; i < vers.length; i++) {
                const edges = vers[i];
                for (let j = 0; j < edges.Length(); j++) {
                    rst.push(edges.GetElement(j));
                }
            }
        }
        return rst;
    }
    IsEdgeExist(from, to) {
        if (this.IsVertexExist(from) && this.IsVertexExist(to)) {
            const llist = this._adjList.get(from.toString());
            for (let i = 0; i < llist.Length(); i++) {
                if (llist.GetElement(i).to === to) {
                    return true;
                }
            }
        }
        return false;
    }
    /**
     * Add Vertex
     */
    AddVertex(id, data) {
        if (id <= 0 || this.IsVertexExist(id)) {
            return -1;
        }
        const vetx = new GraphAdjaceListVertex();
        vetx.value = data;
        vetx.id = id;
        this._vertex.AppendElement(vetx);
        this._adjList.set(id.toString(), new LinkList());
        return id;
    }
    /**
     * Add Edge
     */
    AddEdge(frm, to, weight) {
        if (frm <= 0 || to <= 0 || !this.IsVertexExist(frm) || !this.IsVertexExist(to)) {
            return false;
        }
        if (this.IsEdgeExist(frm, to)) {
            return false;
        }
        const nedge = new GraphAdjaceListEdge();
        nedge.from = frm;
        nedge.to = to;
        nedge.weight = weight;
        const llist = this._adjList.get(frm.toString());
        if (llist.Length() === 0) {
            llist.InitList(nedge);
        }
        else {
            llist.AppendElement(nedge);
        }
        // nedge = new GraphAdjaceListEdge<Y>();
        // nedge.To = frm;
        // nedge.Weight = weight;
        // this._adjList.get(to.toString()).AppendElement(nedge);
        return true;
    }
    /**
     * DFS: Depth First Search
     */
    DFS() {
        return [];
    }
    /**
     * BFS: Breadth First Search
     */
    BFS() {
        return [];
    }
}
//# sourceMappingURL=AdjListGraph.js.map