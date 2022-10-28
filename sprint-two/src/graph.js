

// Instantiate a new graph
var Graph = function() {
  this.newGraph = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.newGraph[node] = [];
};


Graph.prototype.contains = function(node) {
  for (let keys in this.newGraph) {
    if (Number(keys) === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (let keys in this.newGraph) {
    if (Number(keys) === node) {
      delete this.newGraph[keys];
    }
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  console.log('hi');
  // add node 1, 2, 3
  // graph.hasEdge(3, 2).to.equal(true)
  // 3: [2]

  // iterate through the graph
  // check if key === fromNode
  // fromNode.push(toNode)
  for (let keys in this.newGraph) {
    if(Number(keys) === fromNode) {
      this.newGraph[keys].push(toNode);
    }
  }
 // console.log('graph: ', this.newGraph, 'fromNode: ', fromNode, 'toNode: ', toNode);
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
//input - node, node
//output - booolean if toNode value is contained in the key/value pair of fromNode

//strategy
//iterate through the nodes and iterating through values to see if toNode(value) exists in fromNode key: [];

//pseudocode
// for in loop iterating through this.newGraph
  //if this.newGraph[key] ((ARRAY)), includes (toNode)
    //return true
//return false
// ** fromNode: one we're adding to(key), toNode: the value we want to push (value)
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.newGraph[fromNode].includes(toNode)) {
    return true;
  }
  return false;
};

// I - fromNode, toNode

// strategy - check if fromNode (key) includes toNode (value) as an 'edge'

//pseudocode -
// check if this.newGraph[fromNode].includes(toNode)
// this.newGraph[fromNode].splice(this.newGraph[fromNode].indexOf(toNode), 1) <-- WOW...CLEAN

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  console.log('hiasdfasd');
  // console.log('graph: ', this.newGraph, 'fromNode: ', fromNode, 'toNode: ', toNode);
  // var index = this.newGraph[fromNode].indexOf(toNode);
  // console.log('this is index: ', index);
  // if (this.newGraph[fromNode].includes(toNode)) {
  //   this.newGraph[fromNode].splice(index, 1);
  // }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


