// Write your test here
// Write your test here
/* istanbul ignore next */

const { graph } = require('./challenge01.js');


class ver {
    constructor(value) {
        this.value = value;
    }
}
describe('test  2', () => {
    it('test  2', () => {
        const g = new graph();
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
        g.addver(A);
        g.addver(B);
        g.addver(C);
        g.addver(D);
        g.addver(E);
        g.addver(F);
        g.addver(G);
        g.addver(H);
        g.addver(I);
        g.addver(K);
        g.addnode(A, B);
        g.addnode(A, C);
        g.addnode(A, E);
        g.addnode(B, D);
        g.addnode(C, F);
        g.addnode(E, G);
        g.addnode(E, D);
        g.addnode(E, F);
        g.addnode(G, H);
        g.addnode(F, H);
        g.addnode(F, I);
        g.addnode(H, K);
        g.addnode(I, K);
        expect(g.listMap.size).toEqual(10);
        g.breadthFirst(A);
        const resultBTS = g.breadthFirst(A);
        const result = [];
        resultBTS.forEach((node) => {
            result.push(node.value);
        });
        expect(result).toEqual(['A', 'B', 'C', 'E', 'D', 'F', 'G', 'H', 'I', 'K']);
    })
});