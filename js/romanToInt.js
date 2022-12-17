const roman = new Map([
  ['I', 1],
  ['IV', 4],
  ['V', 5],
  ['IX', 9],
  ['X', 10],
  ['XL', 40],
  ['L', 50],
  ['XC', 90],
  ['C', 100],
  ['CD', 400],
  ['D', 500],
  ['CM', 900],
  ['M', 1000],
]);
const reg = /M|CM|D|CD|C|XC|L|XL|X|IX|V|IV|I/g;
function romanToInt(s) {
    const arr = s.match(reg);
    let result = 0;
    const list =arr.map(i => {
        console.log(i,1111,roman.get(i))
        return roman.get(i)
    });
    list.forEach(el => {
        result +=el
    });
    return result
    
}
console.log(romanToInt('MCMXCIV'))