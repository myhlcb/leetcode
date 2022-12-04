function longestCommonPrefix(arr) {
  let str = '';
  const first = arr[0];
  for (let i = 1; i < arr.length; i++) {
    const next = arr[i];
    str = long(first, next);
  }
  return str;
}
function long(s1, s2) {
  const length = Math.min(s1.length, s2.length);
  let index = 0;
  if (!length) {
    return '';
  }
  while (index<length&&s1[index]===s2[index]) {
        index++
  }
  console.log(index, 111111,s1,s2);
  return s1.slice(0, index);
}
console.log(longestCommonPrefix(["flower","flow","flight"]));
