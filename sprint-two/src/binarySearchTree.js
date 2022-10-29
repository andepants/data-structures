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

// I - value put on the node
// E - same root same value

// Strategy - check the value of the root node, if smaller check left, if bigger check right;; assign this to current node
// if the value of left/right is NOT null, then use recursion to call left/right node using insert
// if it IS null, then we'll create a new node and add it to the left/right position of current node

// Pseudocode -
// declare var currentNode;
// check if this.value (root) is greater than or equal value,
    // assign currentNode to this.left
// else
    // assign currentNode to this.right

// check if currentNode IS null
    // create a new node and assign the this.value (root) to input value
    // assign to current node


methods.insert = function (value) {
  // console.log('root value: ', this.value, 'value being passed in: ', value);
  // var currentNode;
  // if (this.value >= value) { // 5 > 3
  //   currentNode = this.left; // currentNode = null
  // } else {
  //   currentNode = this.right; // currentNode = null
  // }

  // if (currentNode === null) {
  //   this.right = BinarySearchTree(value);
  //   // this.right.value
  // }
  // console.log(this);
  if (value > this.value) {
    if (this.right === null) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value); // <= this is our recursive call :3
    }
  } else if (value < this.value) {
    if (this.left === null) {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  }
};

// assign value to new node tree                /// 5 -> 3 (left) -> 1 (left)
// if value > this.value
    // (((check the right value)))
    // if it is null
      // this.right = BinarySearchTree(value) <= new instance of binarysearchtree :3
    // if its NOT null
      // call this.left.insert on the value???????
// else if (value < this.value)
    // (((check the left value)))
    // if it is null
      // this.left = BinarySearchTree(value)
    // if its NOT null
      //
// [optional] else for same same cases


// we don't care about same same values for binary trees~~~~

//A .contains() method, which accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.
//evaluavte whatever node you are at

//input: value that we are trying to find
//output: boolean
//constraints: none
//edge cases: none

//strategy: check if value of node equals passed in value recursively

//pseudocode:
//check if this.value strictly equals value
  //return true
//else
  //call contains on this.right and this.left with passed in values

methods.contains = function (value) {
  console.log(this.value, value);
  if (this.value === value) {
    return true;
  } else {
    if (this.right !== null) {
      return this.right.contains(value);
    }
    if (this.left !== null) {
      return this.left.contains(value);
    }
  }
  return false;
};

//A .depthFirstLog() method, which accepts a callback and executes it on every value contained in the tree.

// I - callback function (call on every value)

// Strategy - iterate through the entire tree and callback on each value

// Pseudocode -
// callback on this.value
// check if this.left !== null
// call depthFirstLog on this.left
// check if this.right !== null
// call depthFirstLog on this.right

methods.depthFirstLog = function (callback) {
  callback(this.value);
  if (this.left !== null) {
    this.left.depthFirstLog(callback);
  }
  if (this.right !== null) {
    this.right.depthFirstLog(callback);
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 * insert -
 * contains -
 * depthFirstLog -
 */
