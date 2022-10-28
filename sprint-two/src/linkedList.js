var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  // I - value
  // O - not sure if there is one yet~

  //Strategy -
  // iterate through list
  // find when next = null
  // make a new node
  // set tail to point to new node
  // set next to null of the newly added node

  list.addToTail = function(value) {
    // Psuedocode
    // declare a variable last node, assigned to first node in list
    // if the node list is empty
    // while last node is true
      // continue iterating through the while loop
      // assign the last node to the next node (we found last node)
    // made a new node
    // assign tail to point to new node

    // var lastNode = this.head;
    // while (lastNode) {
    //   lastNode = lastNode.next; // setting last node to next node
    // }
    // var newNode = Node(value);
    // lastNode.tail = newNode;
    // console.log('lastNode', lastNode);
    var firstNode = this.head;
    var lastNode = this.tail;
    // console.log('first and last: ', firstNode, lastNode);

    // create a new node
    // if head equals null (meaning theres nothing in the list)
    // this.head is the new node
    // this.tail is the new node
    var newNode = Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode; // this.head
      return list;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    // else if head does NOT equal null (meaning we have something in the list)
    // **we also need to point 'next' to the new node
    // every time we append a new node to the linked list, we assign tail to new Node

    return list;
  };

  // I - no input, but we take the head
  // O - return the value of the former head


  //Strategy -
  // create a variable that stores the current head value
  // redirect the head to the next element
  // return the variable that was storing the current head

  //pseudocode
  // create variable for current and set equal to this .head
  // assign this.head to variable.next
  // return the value of variable

  list.removeHead = function() {
    var removeNode = this.head;
    this.head = removeNode.next;
    return removeNode.value;
  };

  // I - value/target
  // O - boolean (depending on whether value is in linked list)
  // E - should not contain value 'that was removed'

  //Strategy - iterate through linked list, if value is found return true, else false

  list.contains = function(target) {
    // create variable node that is assigned this.head (first element)
    // while (variable)
      // check if target === value of node
        // return true
      // reassign node to next node in the list
    // else return false
    var firstNode = this.head;
    while (firstNode) {
      if (target === firstNode.value) {
        return true;
      }
      firstNode = firstNode.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addToTail - (0)1
 * RemoveHead - (0)1
 * contains - (0)n
 */
