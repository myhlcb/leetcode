function isValid(s) {
  let result = true;
  if (s.length % 2) {
    return (result = false);
  }
  const s1 = s.substring(0, s.length / 2);
  const s2 = s.substring(s.length / 2, s.length);
  console.log(s1, 11, s2);
  let index = 0;
  const length = s1.length;
  while (index < s1.length) {
    console.log(
      index,
      111,
      s2[index],
      s1[length - 1 - index],
      map.get(s1[length - 1 - index]),
    );
    if (s2[index] !== map.get(s1[length - 1 - index])) {
      return (result = false);
    }
    index++;
  }
  return result;
}
const map = new Map([
  ['(', ')'],
  ['{', '}'],
  ['[', ']'],
]);
console.log(isValid('({[]})'));
