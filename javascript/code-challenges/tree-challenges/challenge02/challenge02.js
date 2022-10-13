// Write here the code challenge solution
function compareTree (p, q) {
    if(p == null && q == null){
         return true
     }
     if(p==null || q==null){
         return false
     }
     if(p.value !== q.value){
         return false
     }
     return compareTree(p.left, q.left) && compareTree(p.right,q.right);
 }


module.exports ={compareTree};