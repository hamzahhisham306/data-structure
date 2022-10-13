// Write your test here
// Write your test here
"use strict";

const {arrayTOBts  } = require('./challenge03');
 

describe('make test for function ', () => {
    it('input one array ', () => {
        let array1=[-10,-3,0,5,9];
        let result=arrayTOBts(array1);
        expect(result.value).toEqual(0);
        expect(result.left.value).toEqual(-3);
        expect(result.right.value).toEqual(9);
        });
        it('input  array ', () => {
            let array2=[100,70,85,5,30];
            let result=arrayTOBts(array2);
            expect(result.value).toEqual(85);
            expect(result.left.value).toEqual(70);
            expect(result.right.value).toEqual(30);
            });
   
})
