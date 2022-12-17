function intToRoman(num) {
  let total = 0,
    arr = [],
    s = '';
  list.map((i) => {
    if (total <= num) {
      if ((num - total) / i >= 1) {
        arr = arr.concat(new Array(Math.floor((num - total) / i)).fill(i));
        total += Math.floor((num - total) / i) * i;
      }
    }
  });
  arr.forEach((i) => {
    s += roman.get(i);
  });
  return s;
}
const roman = new Map([
  [1, 'I'],
  [4, 'IV'],
  [5, 'V'],
  [9, 'IX'],
  [10, 'X'],
  [40, 'XL'],
  [50, 'L'],
  [90, 'XC'],
  [100, 'C'],
  [400, 'CD'],
  [500, 'D'],
  [900, 'CM'],
  [1000, 'M'],
]);
const list = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
console.log(intToRoman(1994), 1111);
