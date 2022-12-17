function longestValidParentheses(s) {
  let left = 0,
    right = 0,
    leftD = 0,
    rightD = 0,
    max = 0;
  for (let i = 0; i < s.length; i += 1) {
    if (s[i] !== '(' && left === 0) {
      continue;
    }
    if (s[i] === '(') {
      left += 1;
    }
    if (s[i] === ')') {
      right += 1;
    }
    if (left === right) {
      max = Math.max(left, max);
    }
  }
  for (let i = s.length - 1; i > 0; i--) {
    if (s[i] !== ')' && rightD === 0) {
      continue;
    }
    if (s[i] === '(') {
      leftD += 1;
    }
    if (s[i] === ')') {
      rightD += 1;
    }
    if (leftD === rightD) {
      max = Math.max(leftD, max);
    }
  }
  console.log(max, 111111);
  return max;
}
longestValidParentheses(')()(()))');
