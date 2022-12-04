function findMedianSortedArrays(arr1, arr2) {
  const arr = [];
  let ii = 0;
  let g = 0;
  for (let index = ii; index < arr1.length; index++) {
    const el = arr1[index];
    console.log(ii, 7777777, el);

    for (let j = g; j < arr2.length; j++) {
      const ej = arr2[j];
      console.log(g, 8888888, ej);
      if (el > ej) {
        g = j + 1;
        console.log(g, 9999999);
        arr.push(ej);
        if (j === arr2.length - 1) {
          const other = arr1.splice(index, arr1.length - 1);
          return arr.concat(other);
        }
      } else {
        console.log(el, 11111111);
        g = j;
        arr.push(el);
        ii = index + 1;
        if (index === arr1.length - 1) {
          const other = arr2.splice(g, arr2.length - 1);
          return arr.concat(other);
        }
        break;
      }
    }
  }
  console.log(arr, 1111);
}
console.log(
  findMedianSortedArrays([1, 3, 5, 6, 7, 9, 11, 13], [4, 6, 8, 16]),
  33333333,
);
