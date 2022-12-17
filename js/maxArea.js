function maxArea(arr) {
  let max = 0;
  for (let index = 0; index < arr.length; index++) {
    const el = arr[index];
    for (let j = index + 1; j < arr.length; j++) {
      const ej = arr[j];
      max = Math.max(Math.min(el, ej) * (j - index), max);
    }
  }
  return max;
}
const arr = [1,8,6,2,5,4,8,3,7]
console.log(maxArea(arr))