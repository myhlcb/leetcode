function isPalindrome(num) {
  let result = true;
  const arr = num.toString().split('');
  let arr1 = [],
    arr2 = [];
  if (!(arr.length % 2)) {
    const mid = arr.length / 2;
    arr1 = arr.slice(0, mid);
    arr2 = arr.slice(mid, arr.length).reverse();
  } else {
    const left = arr.length / 2;
    const right = arr.length / 2 +1;
   console.log(left,111,right)
    arr1 = arr.slice(0, left);
    arr2 = arr.slice(right, arr.length).reverse();
  }
  console.log(arr1, arr2, 444444);
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      result = false;
    }
  }
  return result;
}
console.log(isPalindrome(1233321));
