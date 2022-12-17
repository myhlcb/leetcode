function findSubstring(s, words) {
  const l = words.length;
  const e = words[0].length;
  const le = l * e;
  const res = [];
  if (s.length < le) {
    return [];
  }
  const map = new Map();
  for (let i = 0; i < words.length; i++) {
    const el = words[i];
    map.set(el, (map.get(el) || 0) + 1);
  }
  console.log(map, 11111);
  for (let j = 0; j < s.length - le + 1; j++) {
    let s1 = s.slice(j, j + le);
    let ss = new Map(map);
    console.log(s1, ss, 22222);
    for (let k = 0; k < s1.length - e + 1; k += e) {
      const element = s1.slice(k, k + e);
      ss.set(element, (ss.get(element) || 0) - 1);
      ss.get(element) === 0 && ss.delete(element);
      if (ss.size === 0) {
        res.push(j);
      }
      //   ss = map;
    }
  }
  console.log(res, 1111111);
  return res;
}
// findSubstring('barfoothefoobarman', ['foo', 'bar']);
findSubstring('barfoofoobarthefoobarman', ['bar', 'foo', 'the']);
