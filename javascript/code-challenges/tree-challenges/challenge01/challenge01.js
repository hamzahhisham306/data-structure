function makeTree(preorder, inorder) {
   
    if(!preorder.length||!inorder.length){
      return null;
    }
    let root = new Node(preorder[0]);
    let indexRoot=inorder.indexOf(preorder[0]);
      
     root.left = makeTree(preorder.slice(1, indexRoot+1),inorder.slice(0,indexRoot));
     console.log("ROOtLft",root.left);
     root.right = makeTree(preorder.slice(indexRoot+1), inorder.slice(indexRoot+1));
     return root;
  };
  
  function Node(val, left, right) {
        this.val = (val===undefined ? 0 : val)
         this.left = (left===undefined ? null : left)
         this.right = (right===undefined ? null : right)
     }


module.exports={Node, makeTree};