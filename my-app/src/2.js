const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sliceArr = (arr, maxLength) => {
  const res = [];
  const step = arr.length / maxLength + 1;
  for (let i = 1; i < step; i++) {
    const temp = [];
    for (let i = 1; i <= maxLength; i++) {
      const random = Math.floor(Math.random() * arr.length);
      temp.push(arr[random]);
      arr.splice(random, 1);
    }
    res.push(temp);
  }
  return res;
};

console.log(sliceArr(arr, 3));
