// ================== Max and Min of an Array ==================
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
export const maxMinOfArray = (arr) => {
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

// ================== END Max and Min of an Array ==================


// ================== Reverse an Array ==================
/**
 * Reverses the elements of an array with temporay array approach.
 *
 * @param {Array} arr - Input array to be reversed
 * @returns {Array} - The reversed array
 *
 * Time Complexity: O(n)+O(n) = O(2n) = O(n) → single traversal of array
 * Space Complexity: O(n) → extra array of same size as input array
*/
export const reverseArrayWithTempArrayApproach = (arr) => {
  const n = arr.length

  const temp = Array(n)

  for (let i = arr.length; i > 0; i--) {
    temp[n-i] = arr[i-1]
  }

  for(let i =0;i<temp.length; i++){
    arr[i]= temp[i]
  }

}

const reverseArr = [1,2,3,4,5,6,7,8,8,9]
reverseArrayWithTempArrayApproach(reverseArr)
console.log(reverseArr,"Reversing array")
// ================ END Reverse an Array ================