var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  //console.log(this._storage, item);
  this._storage[item] = item;
  //console.log(this._storage);
};

//method, takes any string and returns a boolean reflecting whether it can be found in the set

setPrototype.contains = function(item) {
  if (this._storage[item] === item) {
    return true;
  }
  return false;
};

// A .remove() method, takes any string and removes it from the set, if present
// Input: the item we want to remove
// output - none

//strategy: remove item

//pseudocode:
//delete the item[key]

setPrototype.remove = function(item) {
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 * add - constant, O(1)
 * contains - constant, O(1)
 * remove - constant, O(1)
 */
