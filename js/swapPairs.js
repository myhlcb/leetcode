function swapPairs(arr) {
  const list = [];
  for (let i = 0; i < arr.length; i+=2) {
    const el = arr[i];
    const ne = arr[i + 1];
    console.log(el,111,ne,777)
    list[i] = ne;
    list[i + 1] = el;
  }
  return list;
}

console.log(swapPairs([1, 2, 3, 4]));
