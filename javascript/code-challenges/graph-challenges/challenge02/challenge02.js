// Write here the code challenge solution
'use strict';
/* istanbul ignore next */
class node {
    constructor(ver, weight = 0) {
        this.ver = ver;
        this.weight = weight;
    }
}


class ver {
    constructor(value) {
        this.value = value;
    }
}

class graph {
    constructor() {
        this.listMap = new Map();
    }

    addver(ver) {
        this.listMap.set(ver, []);
    }

    addnode(s, e, weight) {
        if (!this.listMap.has(s) || !this.listMap.has(e)) {
            console.log('ver doesn\'t exist');
            return;
        } else {
            // const ver = 
            const node = new node(e, weight);
            this.listMap.get(s).push(node)
        }
    }

    breadthFirst(s) {
        let queue = [];
        let listVisted = new Set();
        queue.push(s);
        listVisted.add(s);
        while (queue.length) {
            const curr = queue.shift();
            const neighbors = this.listMap.get(curr);

            for (let neighbor of neighbors) {
                const neighborNode = neighbor.ver;
                if (listVisted.has(neighborNode)) {
                    continue;
                }
                listVisted.add(neighborNode);
                queue.push(neighborNode);
            }
            console.log(listVisted.size)
        }
        return listVisted;
    }

}

exports.graph = graph;