const arr = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6];

/**
 * Selection Sort Algorithm
 *
 * Select Iterated Element of first loop and and compare it with other remaining element in second loop and get the smallest one and
 * replace or swap the smallest with the element of interated index
 */
export const selectionSortAscending = (arr) => {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    // Selection of element one by one
    let minValueIndex = i;

    for (let j = i + 1; j < n; j++) {
      // Comparison of selected ele to other elements
      if (arr[j] < arr[minValueIndex]) {
        minValueIndex = j;
      }
    }

    let temp = arr[i];

    arr[i] = arr[minValueIndex];
    arr[minValueIndex] = temp;
  }
};

/**
 * Bubble Sort Algorithm
 *
 * Repeatedly swapping adjacent elements if they are in wrong order.
 * On First iteration largest element comes to end and on second the second largest element comes to the second and so on
 */
export const bubbleSortAlgo = (arr) => {
  const n = arr.length
  for (let i = 0; i < n - 1; i++) {
    let swapped = false;

    for (let j = 0; j < n; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];

        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        swapped = true;
      }
    }

    if (!swapped) break;
  }
};

