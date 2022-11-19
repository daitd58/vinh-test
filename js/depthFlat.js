arr = [1, 2, [3, 4, [5, 6]]]
function flatten(arr, depth) {
    if (depth === 1) {
        return flattenArr(arr);
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
    return res;
}
console.log(flatten(arr, 1))