function longestPalindrome(s) {
  let size = 0;
  let string = '';
  for (let i = 0; i < s.length; i++) {
    const el = s[i];
    const arr = new Array();
    arr.push(el);
    for (let j = i + 1; j < s.length; j++) {
      const jl = s[j];
      if (el !== jl) {
        arr.push(jl);
      } else {
        arr.push(jl);
        break;
      }
    }
    string = arr.length > size ? arr.join('') : string;
    size = Math.max(arr.size, size);
    console.log(string, arr, 1111111);
  }
  return string;
}
console.log(longestPalindrome('abcabcbb'));
