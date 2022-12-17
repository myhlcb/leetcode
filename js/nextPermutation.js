function nextPermutation(arr) {
  console.log(777);
  let num = 0,
    min = Infinity,
    index1 = 0,
    index2 = 0;
  let arr2 = [];
  let isBig = false;
  console.log(1111111);
  for (let i = arr.length - 1; i > 0; i--) {
    min = Math.min(arr[i], min);
    if (min === arr[i]) {
      index1 = i;
    }
    if (arr[i - 1] < min) {
      num = arr[i - 1];
      index2 = i - 1;
      break;
    }
    console.log(arr[i - 1], 777, arr[i]);
    isBig = compare(arr[i - 1], arr[i]);
  }
  console.log(isBig, 1111, num, min);
  // 如果最大则最小
  if (isBig) {
    return (arr2 = arr.reverse());
  } else {
    arr[index1] = num;
    arr[index2] = min;
    return arr;
  }
}
const compare = function (num1, num2) {
  return num1 >= num2;
};
console.log(nextPermutation([3, 2, 1]));
