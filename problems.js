// Use to test my functions
function assert (value, desc) {
  var li = document.createElement ("li");
  li.className = value ? "pass" : "fail";
  li.appendChild (document.createTextNode (desc));
  document.getElementById ("results").appendChild (li);
}

// Write a function to swap to values at two different indicies in an array.
var swap = function (arr, indexOne, indexTwo) {
  var temp = arr[indexOne];
  arr[indexOne] = arr[indexTwo];
  arr[indexTwo] = temp;
  return arr;
};

// Write a function to generate a random number in a specified range.
var getRand = function (low, high) {
  var normalize = 1.0 / (high - low + 1)
  var randNum = Math.floor(Math.Rand() * normalize + low);
  return randNum;
};

// Write a function to create a specified number of random numbers from 1 to 100 in an array.
var randArr = function (size) {
  var randArr = [];
  for (var i=0; i<size; i++) {
    randArr.push(getRand(1, 100));
  }
  return randArr; 
}

// Write a function to find the maximum number in an array.
var getMax = function (arr) {
  var max = arr[0];
  for (var i=1; i<arr.length; i++) {
    (max < arr[i]) ? max = arr[i] : max;
  }
  return max;
}

var test = function() {
  var arr = [1, 2, 3, 4, 5];
  assert(false, "Testing Functions");
  assert(getMax(arr) === 5, "getMax() returns 5");
  assert(function() {
    var swapArr = swap(arr, 1, 2);
    return (swapArr[0] === 2 && swapArr[1] === 1);
  }, "swap() index 0 for index 1");
  for (var i=0; i<10; i++) {
    assert(function() {
      var num = getRand(2, 4);
      return (num >= 2 && num <= 4);
      }, "getRand() returns random # between 2 & 4");
  };
  for (var i=0; i<10; i++) {
    assert(function() {
      var num = randArr(1);
      return (num[0] >= 1 && num[1] <= 100);
      }, "randArr() returns random # between 1 & 100");
  };
  
}

