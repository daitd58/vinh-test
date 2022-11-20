const arr2 = [1, 2, [3, 4, [5, 6]]];
function flatDepth(arr,dept){
    let result = []
    for(value of arr){
        if(dept==0 || ! Array.isArray(value)){
            result.push(value)
        }
        if(dept>0 &&  Array.isArray(value)){
          result =   result.concat(flatDepth(value,dept-1))
        }
        
    }
     return result
}
console.log(flatDepth(arr2,2))