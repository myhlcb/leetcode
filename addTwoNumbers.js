var addTwoNumbers = function (l1, l2) {
  let result1 = 0,
    result2 = 0;
  for (let index = 0; index < l1.length; index++) {
    result1 += l1[index] * 10 ** index;
  }
  for (let index = 0; index < l2.length; index++) {
    result2 += l2[index] * 10 ** index;
  }
  console.log(result1, result2);
  return result1 + result2;
};

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]))