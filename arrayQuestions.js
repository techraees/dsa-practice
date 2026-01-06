/**
 * Finds the maximum and minimum numbers in an array.
 * Ignores non-numeric elements.
 *
 * @param {Array} arr - Input array containing numbers or other types
 * @returns {Object} - An object with `min` and `max` properties
 *
 * Time Complexity: 2n ~ O(n) → single traversal of array
 * Space Complexity: O(1) → only two extra variables (min and max)
 */
const maxMinOfArray = (arr) => {
  if (!Array.isArray(arr)) throw Error("Please provide the array!");
  if (arr.length == 0) throw Error("You Provide the empty array!");

  let i = 0;
  while (i < arr.length && typeof arr[i] !== "number") i++;

  let min = arr[i];
  let max = arr[i];

  for (let i = 0; i < arr.length; i++) {
    if (arr.length === 0) return { min: null, max: null };

    if (typeof arr[i] !== "number") continue;

    if (min < arr[i]) {
      min = arr[i];
    }
    if (max > arr[i]) {
      max = arr[i];
    }
  }

  return {
    min,
    max,
  };
};

console.log(maxMinOfArray(["asdasd", 34, 12, 2,  2, 3, 4, 2343, 2]));
