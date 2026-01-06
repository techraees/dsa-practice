// Get Minimum and Maximum of an array
function minMaxFromArray(arr) {
  let min = arr[0];
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return { min, max };
}

// Reverse an array
function reverseArray(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }

  return arr;
}

// Kadane's Algorithm Definition:
// Kadane's Algorithm is a dynamic programming algorithm used to find the maximum sum of a contiguous subarray
// (subarray with consecutive elements) within a one-dimensional array of numbers.
function kadaneAlgorithm(arr) {
  let maxSum = 0;
  let currentSum = 0;
  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}

console.log(kadaneAlgorithm([1, 2, 3, 4, 5]));

// Contains Duplicate
function checkDuplicationInArr(arr) {}

// Chocolate Distribution Problem
function chocolateDistributionProblem(arr) {}
