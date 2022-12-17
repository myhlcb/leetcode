let list = [];

function catalanSort(arr, arr1, arr2, i) {
  const l = arr.length / 2;
  if (arr1.length === l) {
    console.log(arr1, 3333);
    list.push(arr1);
    console.log(list, 3333);
  } else {
    for (let j = 0; j < 2; j++) {
      if (j === 0) {
        arr1.push(arr[i]);
      }
      if (j === 1) {
        arr2.push(arr[i]);
      }
      if (arr1.length >= arr2.length) {
        console.log(arr1, 1111, arr2, i);
        catalanSort(arr, arr1, arr2, i + 1);
      }
      if (j === 0) {
        arr1.pop();
      }

      if (j === 1) {
        arr2.pop();
      }
    }
  }
}

catalanSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], [], [], 0);

console.log(JSON.stringify(list));
