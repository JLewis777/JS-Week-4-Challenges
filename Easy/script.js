"use strict";

// Average number

// Write a function that takes multiple arguments that are numbers
// Find a way to put the arguments into an array
// Find a way to calculate sum of array elements
// Then divide the sum by the length of the array
// Output the answer to the console or alert it

// var array = [1, 2, 4, 3, 8, 9];

// var sum = array.reduce(function (a, b) {
//   return a + b;
// }, 0);

// console.log(sum);

// console.log(sum);

// The spread operator allows for multiple paramaters
function averageNum(...nums) {
  var average = nums.reduce((a, b) => a + b) / nums.length;
  console.log(average);
}

averageNum(1, 2, 3, 4, 5);
// Example runs
averageNum(1, 4, 7);
averageNum(10, 5);
averageNum(1.5, 3, 2.5, 1);
