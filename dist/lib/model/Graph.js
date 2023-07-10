/**
 * @license
 * (C) Alva Chien, 2017 - 2018. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: Graph.ts
 *
 * Implements the graph with Adjacement Matrix.
 */
/**
 * Vertext in the graph
 */
export class GraphVertex {
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
 * Edge in the graph
 */
export class GraphEdge {
    get weight() {
        return this._weight;
    }
    set weight(wgt) {
        this._weight = wgt;
    }
    get from() {
        return this._from;
    }
    set from(frm) {
        this._from = frm;
    }
    get to() {
        return this._to;
    }
    set to(to) {
        this._to = to;
    }
}
/**
 * Graph
 * X: Type of vertex
 * Y: Weight of edge
 */
export class Graph {
    constructor() {
        this._vertex = [];
        this._edge = [];
    }
    VertexNumber() {
        return this._vertex.length;
    }
    EdgeNumber() {
        return this._edge.length;
    }
    /**
     * Vertex
     */
    Vertexs() {
        return this._vertex;
    }
    IsVertexExist(id) {
        for (let i = 0; i < this._vertex.length; i++) {
            if (this._vertex[i].id === id) {
                return true;
            }
        }
        return false;
    }
    /**
     * Edges
     */
    Edges() {
        return this._edge;
    }
    /**
     * Add Vertex
     */
    AddVertex(id, data) {
        if (id <= 0 || this.IsVertexExist(id)) {
            return -1;
        }
        const nnode = new GraphVertex();
        nnode.value = data;
        nnode.id = id;
        this._vertex.push(nnode);
        return nnode.id;
    }
    AddEdge(frm, to, weight) {
        if (frm <= 0 || to <= 0 || !this.IsVertexExist(frm) || !this.IsVertexExist(to)) {
            return false;
        }
        if (this.IsEdgeExist(frm, to)) {
            return false;
        }
        const edge = new GraphEdge();
        edge.from = frm;
        edge.to = to;
        edge.weight = weight;
        this._edge.push(edge);
        return true;
    }
    IsEdgeExist(frm, to) {
        for (let i = 0; i < this._edge.length; i++) {
            if (this._edge[i].from === frm && this._edge[i].to === to) {
                return true;
            }
        }
        return false;
    }
    /**
     * DFS
     */
    DFS() {
        if (this._vertex.length <= 0) {
            return [];
        }
        const visited = [];
        const rst = [];
        for (let i = 0; i < this._vertex.length; i++) {
            this.DFSImpl(this._vertex[i], visited, rst);
        }
        return rst;
    }
    DFSImpl(vex, visited, rst) {
        let bvisited = false;
        for (let i = 0; i < visited.length; i++) {
            if (visited[i] === vex.id) {
                bvisited = true;
                break;
            }
        }
        if (!bvisited) {
            rst.push(vex);
        }
        else {
            return;
        }
        for (let i = 0; i < this._edge.length; i++) {
            if (this._edge[i].from === vex.id) {
                // Get the to
                let tonode = null;
                for (let j = 0; j < this._vertex.length; j++) {
                    if (this._vertex[j].id === this._edge[i].to) {
                        tonode = this._vertex[j];
                        break;
                    }
                }
                this.DFSImpl(tonode, visited, rst);
            }
            // Not necessary??
            // else if (this._edge[i].To === vex.ID) {
            //     // Get the to
            //     let fromnode: GraphVertex<X> = null;
            //     for(let j: number = 0; j < this._vertex.length; j++) {
            //         if (this._vertex[j].ID === this._edge[i].From) {
            //             fromnode = this._vertex[j];
            //             break;
            //         }
            //     }
            //     this.DFSImpl(fromnode, visited, rst);
            // }
        }
    }
    /**
     * BFS
     */
    BFS() {
        // if (this._vertex.length <= 0) {
        //   return [];
        // }
        return [];
    }
}
//# sourceMappingURL=Graph.js.map