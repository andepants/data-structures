

// Instantiate a new graph
var Graph = function() {
  this.newGraph = {};

};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // console.log(node);
  // console.log(this.newGraph(node));
  //var test = new newGraph;

  // var test = new Node(node);
  this.newGraph[node] = node;
  console.log('test', this.newGraph);

};
// var Node = function(value) {
//   var node = {};

//   node.value = value;
//   node.next = null;

//   return node;
// };

// Return a boolean value indicating if the value passed to contains is represented in the graph.

//input - value
//output - a boolean if the value passed
//constraints - noone
//edge cases - none

//strategy - iterate through newGraph, check if value is equal to value, then return true;


Graph.prototype.contains = function(node) {
      for (const keys in this.newGraph) {

        if (this.newGraph[keys] === node) {
          return true;
        }
      }
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


