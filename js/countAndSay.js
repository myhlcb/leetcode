function countAndSay(n) {
  let str = '1';
  for (let i = 2; i <= n; i++) {
    let pop = 0,
      arr = [],
      start = 0;
    console.log(str, 111111111);
    while (pop < str.length) {
      while (pop < str.length && str[pop] === str[start]) {
        pop++;
      }
      arr.push(`${pop}${str[start]}`);
      start = pop;
    }
    str = arr.join('');
  }
  return str;
}
console.log(countAndSay(4));
