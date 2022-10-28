var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  obj.counter = 0;
  obj.lengthCounter = 0;
  obj.storage = {};
  _.extend(obj, queueMethods);
  return obj;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.counter] = value;
  this.lengthCounter++;
  this.counter++;
}

queueMethods.dequeue = function() {
  if (this.lengthCounter > 0) {
    var temp = 100;
    for (const keys in this.storage){
      if (keys < temp) {
        temp = keys;
      }
    }
    var holder = this.storage[temp];
    delete this.storage[temp];
    this.lengthCounter--;
    return holder;
  }
};

queueMethods.size = function() {
  return this.lengthCounter;
}
