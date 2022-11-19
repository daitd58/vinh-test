const sum = (a, b) => {
  let num1 = 0;
  let num2 = 0;
  for (let i = a.length - 1; i >= 0; i--) {
    if (i === a.length - 1) {
      num1 += Number(a[i]);
    } else {
      num1 += Number(a[i]) * Math.pow(10, a.length - i - 1);
    }
  }
  for (let i = b.length - 1; i >= 0; i--) {
    if (i === b.length - 1) {
      num2 += Number(b[i]);
    } else {
      num2 += Number(b[i]) * Math.pow(10, b.length - i - 1);
    }
  }
  return num1 + num2;
};

console.log(sum("100", "1333"));
