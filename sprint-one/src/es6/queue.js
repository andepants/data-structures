class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.counter = 0;
    this.counterLength = 0;
    this.storage = {};
  }

  enqueue(value) {
    this.storage[this.counter] = value;
    this.counter++;
    this.counterLength++;
  }

  dequeue() {
    if (this.counterLength > 0) {
      this.counterLength--;
      var temp = 1000;
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

  size() {
    return this.counterLength;
  }

}
