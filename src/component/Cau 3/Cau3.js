// // 1. Tách mảng ban đầu thành nhiều mảng con với đầu vào là mảng ban đầu và số lượng phần tử của mảng. Mảng con dùng random vị trí ko phải là vị trị giống ban đầu.

// // array: [1, 2, …., 10

function aArray(myArray, maxLength) {
  var results = [];

  while (myArray.length) {
    results.push(myArray.splice(0, maxLength));
  }

  return results;
}

var result = aArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);

console.log(result);

// // ‘123’ + ‘123’ = ‘246’ cộng toán học 2 số dạng string

let a1 = "123";
let b2 = "123";
var num = Number(a1);
var num2 = Number(b2);
var c = String(num + num2);

console.log(c);

// // Viết hàm flat array với 2 tham số đầu vào là array ban đầu và độ sâu để flat (depth)
// // const arr2 = [1, 2, [3, 4, [5, 6]]];
// // flatDepth(arr2, 1);
// // // [1, 2, 3, 4, [5, 6]]

// // const arr3 = [1, 2, [3, 4, [5, 6]]];
// // flatDepth(arr3, 2);
// // // [1, 2, 3, 4, 5, 6]
