function divide(nu1, nu2) {
  num1 = Math.abs(nu1);
  num2 = Math.abs(nu2);
  let i = 0;
  while (num2 < num1) {
    i++;
    num2 += num2;
  }
  return (nu1 > 0 && nu2 > 0) || (nu1 < 0 && nu2 < 0) ? i : -i;
}

console.log(divide(7, 3));
