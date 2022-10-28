var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  newTree.children = [];

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

  //input - a value
  //output - the tree
  //constraints - none
  //edge cases - none

  //strategy -
  // store new node in 'child'
  // push that to array
  // takes any value, sets that as the target of a node, and adds that node**VALUE as a child of the tree**NODE

  //pseudocode -
  //create a variable, newNode with our value passed in
  // push the variable into this.children.
  //return the tree

treeMethods.addChild = function(value) {
  //console.log('this is the new node', new Node(value));

  var newChild = new Tree(value); // node doens't have ability to addChild method, but 'Tree' has methods and children array
  this.children.push(newChild);

  // console.log('this is this', this.children);
};

// takes any input and returns a boolean reflecting whether it can be found as the value of the target node or any descendant node

  // I - target value
  // O - boolean if target is found
  // E - needs to detect nested for loops / target in descendants

  // Strategy - iterate through all the children (recursively???)

treeMethods.contains = function(target) { // {methods, children []}
  //console.log(this);
  // isTrue = false
  // (base case) check if target === this.value
    // return true

  // (recursive case) check if this.children.length > 0 // making sure children is not an empty array
    // iterate through children array
    // isTrue recursive call for each child element**TREE
    // return isTrue

    var isTrue = false;
    if (target === this.value) {
      return true;
    }

    if (this.children.length > 0) {
      this.children.forEach(function(child) {
        if (isTrue) {
          return isTrue;
        }
        isTrue = child.contains(target);
      })
    }
    return isTrue;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addChild - O(1)
 * contains - O(n)
 */
