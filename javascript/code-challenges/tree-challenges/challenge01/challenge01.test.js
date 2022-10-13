// Write your test here
"use strict";

const { makeTree } = require('./challenge01');


describe('make test for function ', () => {
    it('input 2 arrays ', () => {
        let preorder = [3, 9, 20, 15, 7], inorder = [9, 3, 15, 20, 7];
        let result = makeTree(preorder, inorder);

        expect(result.val).toEqual(3);
        expect(result.left.val).toEqual(9);
        expect(result.right.val).toEqual(20);
        });
        it('test 2 ', () => {
                            
            let preorder = [1,2,4,8,9,10,11,5,3,6,7], inorder = [8,4,10,9,11,2,5,1,6,3,7];
            let result = makeTree(preorder, inorder);
    
            expect(result.val).toEqual(1);
            expect(result.left.val).toEqual(2);
            expect(result.right.val).toEqual(3);
            });
   
})
