

const arr = [1, 2, 3,4,5,6,7,8,9,10];



function tacharray(arr,count){
  let result =[];
  let totalResult=[]
  for(let i =0; i<arr.length;i++){
     if((i+1)%count ==1 && i>=count){
         totalResult.push(result)
        result = [];
    }
  
    result.push(arr[i]);
    if(i+1==arr.length){
        totalResult.push(result)
    }
  
    

  }
  return totalResult;

}