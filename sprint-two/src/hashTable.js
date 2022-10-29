

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit); // we have access to each, get, set => this gives us storage access
};

// get(index) => tells you what's at the index
// set(index, value) => sets a value at a given index
// each(callback)

// Insert key-value pair into our storage by passing it through hash function
HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // console.log('is this undefined', this._storage.get(index))
  var bucket = this._storage.get(index) || []; // gives us an existing array OR creates a new array
  var tuple = [k, v];
  bucket.push(tuple); // setting a tuple inside our bucket
  this._storage.set(index, bucket); // setting our bucket inside our storage
  // console.log('insert function: ', this._storage.get(index));

  // SHANNON:
  // add some more conditional logic~~~~~
  //if there is no bucket,
    //create bucket
  //if there is a bucket, push tuple to bucket
    //push tuple (k, v) pair ---an array
  //console.log(this._storage.get(index), index);

};

// Later on~~~ when it resizes, you need to extract data and redistribute

// Passing in a key, and retrieving the inital value from our key-value pair
HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // I - key that we are looking to get the value from
  // O - value
  // Strategy - use the index to find the value of our key, using get

  // Pseudocode -
  // use get on this._storage to get the 'bucket' at the index = variable keyBucket
  // iterate through keyBucket
    // check position 0 of each tuple to see if it equals 'k'
    // if it matches
      // return position 1 at tuple
  var result;
  var bucketAccess = this._storage.get(index);
  bucketAccess.forEach(function(currentTuple) {
    if (currentTuple[0] === k) {
      console.log(currentTuple[1])
      result = currentTuple[1]; // **REVISIT: originally had 'return currentTuple[1]' which didn't work
    }
  })
  return result;
};

// Delete key-value pair from our storage?

// find the key-value pair within the bucket and remove the key-value pair when you find it

  //input: key that we are removing the key/value pair inside storage
  //output: none

  //strategy: access our bucket with index (get),

  //pseudocode
  //create variable, bucketAccess, gets the storage at index
  //iterate through tuples at index[0]
    //if element matches k
      //remove the tuple (using splice)

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucketAccess = this._storage.get(index);
  bucketAccess.forEach(function(currentTuple) {
    if (currentTuple[0] === k) {
      bucketAccess.splice(bucketAccess.indexOf(currentTuple), 1);
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


