function combinationSum(list, target) {
  const arr = [];
  function def(target, com, idx) {
    console.log(target, 111, com, 222, idx);
    if (target === 0) {
      arr.push(com);
      return;
    }
    if (idx === list.length) {
      return;
    }
    def(target, com, idx + 1);

    if (target - list[idx] >= 0) {
      def(target - list[idx], [...com, list[idx]], idx);
    }
  }
  def(target, [], 0);
  console.log(arr, 111111);
  return arr;
}
combinationSum([1, 2, 3, 6, 7], 7);
