function reverse(num) {
  const arr = num.toString().split('');
  if (!(arr[0] == '-')) {
    return arr.reverse().join('');
  } else {
   const result = arr.slice(1, arr.length).reverse().join('');
    return '-' + result;
  }
}

console.log(reverse(-324567))