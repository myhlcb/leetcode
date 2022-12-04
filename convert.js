function convert(s, n) {
  const arr = new Array(n).join('.').split('.');
  let i = 0;
  let flag = 0;
  for (let index = 0; index < s.length; index++) {
    const el = s[index];
    arr[i] += el;
    console.log(el, 555555, arr[i], i);
    console.log(arr, 11111111);
    if (flag % 2) {
      i--;
    } else {
      i++;
    }
    if (i === 0 || i === n - 1) {
      flag += 1;
    }
  }
  console.log(arr, 222222);
  return arr;
}
convert('leetcode', 3);
