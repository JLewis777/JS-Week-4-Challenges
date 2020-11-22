"use strict";

// Find thet target value/element in a reversed array.
// If found return it's index
// If the target number is not in the array, return -1
// Build a function to loop through the arrays or use the .indexOf() method.

var nums = [4, 5, 6, 7, 0, 1, 2]; // target: 0

var nums2 = [4, 5, 6, 7, 0, 1, 2]; // target: 3

var findTarget = function (arr, num) {
  console.log(arr.indexOf(num)); // This will automatically return -1 if the target is not in the array
};

findTarget(nums, 0);
findTarget(nums2, 3);
