function flatArray(arr,depth){
    let newArray = arr.flat(depth);
    console.log("Mảng mới",newArray.join());
}
const array = [1, 2, [3, 4, [5, 6]]];
flatArray(array,2);