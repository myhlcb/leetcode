function box(str, m) {
  const list = new Array(m).fill('');
  console.log(list, 1111);
  let j = 0;
  let k = 1;
  for (let i = 0; i < str.length; i++) {
    const el = str[i];
    console.log(el, 111, j, i, k);
    list[j] += el;
    if ((i + 1) % m) {
      if (j < m - 1 && k % 2) {
        j++;
      } else {
        j--;
      }
    } else {
      k += 1;
    }
  }
  console.log(list, 111);
}

box('ABCDEFGHIJK', 3);
