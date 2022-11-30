// Write your test here
/* istanbul ignore next */
const { graph } = require('./challenge01.js');


class ver {
    constructor(value) {
        this.value = value;
    }
}
describe('test  1', () => {
    it('test  1', () => {
        const graph = new graph();
        const A = new ver('A');
        const B = new ver('B');
        const C = new ver('C');
        const D = new ver('D');
        const E = new ver('E');
        const F = new ver('F');
        const G = new ver('G');
        const H = new ver('H');
        const I = new ver('I');
        const K = new ver('K');
        graph.addver(A);
        graph.addver(B);
        graph.addver(C);
        graph.addver(D);
        graph.addver(E);
        graph.addver(F);
        graph.addver(G);
        graph.addver(H);
        graph.addver(I);
        graph.addver(K);
        graph.addnode(A, B);
        graph.addnode(A, C);
        graph.addnode(A, E);
        graph.addnode(B, D);
        graph.addnode(C, F);
        graph.addnode(E, G);
        graph.addnode(E, D);
        graph.addnode(E, F);
        graph.addnode(G, H);
        graph.addnode(F, H);
        graph.addnode(F, I);
        graph.addnode(H, K);
        graph.addnode(I, K);
        expect(graph.listMap.size).toEqual(10);
        graph.breadthFirst(A);
        const resultBTS = graph.breadthFirst(A);
        const result = [];
        resultBTS.forEach((node) => {
            result.push(node.value);
        });
        expect(result).toEqual(['A', 'B', 'C', 'E', 'D', 'F', 'G', 'H', 'I', 'K']);
    })
});