var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.counter = 0;
  this.counterLength = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.counter] = value;
  this.counter++;
  this.counterLength++;
}

Queue.prototype.dequeue = function() {
  if (this.counterLength > 0) {
    this.counterLength--;
    var temp = 100;
    for (const keys in this.storage) {
      if (keys < temp) {
        temp = keys;
      }
    }
    var holder = this.storage[temp];
    delete this.storage[temp];
    return holder;
  }
}

Queue.prototype.size = function() {
  return this.counterLength;
}
