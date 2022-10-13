// Write your test here
"use strict";

const {compareTree} = require('./challenge02');


describe('make test for function ', () => {
    it('test 1 ', () => {
        class Node {
            constructor(value, left = null, right = null) {
                this.value = value;
                this.left = left;
                this.right = right;
            }
        }
        class BinaryTree {
            constructor(root = null) {
                this.root = root;
            }
        }
        let one = new Node(1);
        let two = new Node(2);
        let three = new Node(3);
        let four = new Node(4);
        let five = new Node(5);
        let six = new Node(6);
        let seven = new Node(7);
        let eight = new Node(8);
        let nine = new Node(9);
        one.left = two;
        one.right = three;
        two.left = six;
        six.right = seven;
        seven.left = eight;
        seven.right = nine;
        three.left = four;
        three.right = five
        let tree1 = null;
        let one2 = new Node(1);
        let two2 = new Node(2);
        let three2 = new Node(3);
        let four2 = new Node(4);
        let five2 = new Node(5);
        let six2 = new Node(6);
        let seven2 = new Node(7);
        let eight2 = new Node(8);
        let nine2 = new Node(9);
        one2.left = two2;
        one2.right = three2;
        two2.left = six2;
        six2.right = seven2;
        seven2.left = eight2;
        seven2.right = nine2;
        three2.left = four2;
        three2.right = five2
        tree1 = new BinaryTree(one);
        let tree2 = new BinaryTree(one2);
       let resutl=compareTree(tree1.root, tree2.root);
        expect(resutl).toEqual(true);
        
    });
    it('test 2 ', () => {
        class Node {
            constructor(value, left = null, right = null) {
                this.value = value;
                this.left = left;
                this.right = right;
            }
        }
        class BinaryTree {
            constructor(root = null) {
                this.root = root;
            }
        }
        let one = new Node(1);
        let two = new Node(2);
        let three = new Node(3);
        let four = new Node(4);
        let five = new Node(5);
        let six = new Node(6);
        let seven = new Node(7);
        let eight = new Node(8);
        let nine = new Node(9);
        one.left = two;
        one.right = three;
        two.left = six;
        six.right = seven;
        seven.left = eight;
        seven.right = nine;
        three.left = four;
        three.right = five
        let tree1 = null;
        let one2 = new Node(100);
        let two2 = new Node(2);
        let three2 = new Node(3);
        let four2 = new Node(4);
        let five2 = new Node(5);
        let six2 = new Node(6);
        let seven2 = new Node(7);
        let eight2 = new Node(8);
        let nine2 = new Node(9);
        one2.left = two2;
        one2.right = three2;
        two2.left = six2;
        six2.right = seven2;
        seven2.left = eight2;
        seven2.right = nine2;
        three2.left = four2;
        three2.right = five2
        tree1 = new BinaryTree(one);
        let tree2 = new BinaryTree(one2);
       let resutl=compareTree(tree1.root, tree2.root);
        expect(resutl).toEqual(false);
        
    });

})
