

// Instantiate a new graph
var Graph = function() {
  this.nodeLocation = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodeLocation[node] = [];
};


Graph.prototype.contains = function(node) {
  for (let keys in this.nodeLocation) {
    if (Number(keys) === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (let keys in this.nodeLocation) {
    if (Number(keys) === node) {
      delete this.nodeLocation[keys];
    }
  }
  for (var innerKeys in this.nodeLocation) {
    if (this.nodeLocation[innerKeys].includes(node)) {
      for (var i = 0; i < this.nodeLocation[innerKeys].length; i++){
        if (this.nodeLocation[innerKeys][i] === node) {
          this.nodeLocation[innerKeys].splice([i], 1);
        }
      }
    }
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // add node 1, 2, 3
  // graph.hasEdge(3, 2).to.equal(true)
  // 3: [2]

  // iterate through the graph
  // check if key === fromNode
  // fromNode.push(toNode)
  for (let keys in this.nodeLocation) {
    if(Number(keys) === fromNode) {
      this.nodeLocation[keys].push(toNode);
    }
    if(Number(keys) === toNode) {
      this.nodeLocation[keys].push(fromNode);
    }
  }
 //console.log('cehck this out!', this.nodeLocation);
 // console.log('graph: ', this.nodeLocation, 'fromNode: ', fromNode, 'toNode: ', toNode);
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
//input - node, node
//output - booolean if toNode value is contained in the key/value pair of fromNode

//strategy
//iterate through the nodes and iterating through values to see if toNode(value) exists in fromNode key: [];

//pseudocode
// for in loop iterating through this.nodeLocation
  //if this.nodeLocation[key] ((ARRAY)), includes (toNode)
    //return true
//return false
// ** fromNode: one we're adding to(key), toNode: the value we want to push (value)
Graph.prototype.hasEdge = function(fromNode, toNode) {
  //for (var keys in this) { // key
    for (var innerKeys in this.nodeLocation) {
      //console.log('this is innerKeys array', this.nodeLocation[innerKeys], 'target Node: ', toNode)
      //console.log('if matches should be true', this.nodeLocation[innerKeys].includes(toNode));
      if (this.nodeLocation[innerKeys].includes(toNode)) {
        return true;
      }
    }
    return false;
    // if (keys[fromNode].includes(toNode)) {
    //   return true;
    // }
  //}
};

// What we have:
// Graph {
//   nodeLocation: {
//      1: [edges],
//      2: [edges]
//   }
// }

// What we want
// Graph {
//   1: [edges],
//   2: [edges]
// }


// I - fromNode, toNode

// strategy - check if fromNode (key) includes toNode (value) as an 'edge'

//pseudocode -
// check if this.nodeLocation[fromNode].includes(toNode)
// this.nodeLocation[fromNode].splice(this.nodeLocation[fromNode].indexOf(toNode), 1) <-- WOW...CLEAN

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var index = this.nodeLocation[fromNode].indexOf(toNode);
  if (this.nodeLocation[fromNode].includes(toNode)) {
    this.nodeLocation[fromNode].splice(index, 1);
  }
  if (this.nodeLocation[toNode].includes(fromNode)) { //added this right here
    this.nodeLocation[toNode].splice(index, 1);
  }
};

//A concise description of the behavior you are expecting
//A concise description of what you observe is happening instead (errors, UI behavior, http request responses, etc.)
//A concise and clear description of attempted solution

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (let keys in this.nodeLocation) {
    cb(Number(keys));
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addNodes -
 * Contains -
 * removeNodes -
 * addEdge -
 * hasEdge -
 * removeEdge -
 * forEachNode -
 */


