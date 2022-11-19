const childArr = (arr, maxLenght) => { 
  arr = arr.sort(() => 0.5 -Math.random());
  let result = [];
  for (let i = 0; i < arr.length; i += maxLenght) {
    result.push(arr.slice(i, i + maxLenght));
  }
  return result;
};

console.log(childArr([1, 2, 3, 4, 5, 6, 7], 3));