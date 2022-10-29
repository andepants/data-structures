var BinarySearchTree = function(value) {
  var root = Object.create(methods);
  root.value = value;
  root.left = null;
  root.right = null;
  return root;
};

var methods = {}

//  A .insert() method, which accepts a value and places it in the tree in the correct position.
//insert and contains follow the same base logic

methods.insert = function (value) {
  // var a = new BinarySearchTree();
  // console.log(a);
  // console.log(this); // BinarySearchTree {}
  if (this.value < )
  console.log('value: ', this.value);
  // add child but with a position~~~~
};

//A .contains() method, which accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.
//evaluavte whatever node you are at
methods.contains = function (value) {

};

//A .depthFirstLog() method, which accepts a callback and executes it on every value contained in the tree.

methods.depthFirstLog = function (callback) {

};



/*
 * Complexity: What is the time complexity of the above functions?
 * insert -
 * contains -
 * depthFirstLog -
 */
