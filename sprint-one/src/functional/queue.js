var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;
  var lengthChecker = 0;
  var front;
  var back;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[counter] = value;
    counter++;
    lengthChecker++;
  };

  someInstance.dequeue = function() {
    var checker = 100;
    if (lengthChecker > 0) {
      for (const keys in storage) {
        if (keys < checker) {
          checker = keys;
        }
      }
      var temp = storage[checker];
      delete storage[checker];
      lengthChecker--;
      return temp;
    }
  };

  someInstance.size = function() {
    return lengthChecker;
  };

  return someInstance;
};
