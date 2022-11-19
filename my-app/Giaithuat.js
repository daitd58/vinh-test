///cau 3

arr = [1, 2, [3, 4, [5, 6]]]
function flatten(arr, depth) {
    let res1 = []
    if (depth === 1) {
        for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            res1 = res1.concat(flattenArr(arr[i]))
        } else {
            res1.push(arr[i]);
        }
    }
    }
    let res = [];

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            res.push(flatten(arr[i], depth - 1));
        } else {
            res.push(arr[i]);
        }
    }
    return res;
}
function flattenArr(arr) {
    let res = [];
    for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            res = res.concat(flattenArr(arr[i]))
        } else {
            res.push(arr[i]);
        }
    }
    return res
}
console.log(flatten(arr,1))



//// cau 2

 let a= "123"
 let b= "234"

function test(a,b) {
    const ax = Number(a)
    const bx = Number(b)
    const results = ax + bx

    return(results)
}