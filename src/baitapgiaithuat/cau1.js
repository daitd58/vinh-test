const a = [1, 2, 3,4,5,6,7,8,9,10];



function array(a,count){
  let result =[];
  let total=[]
  for(let i =0; i<a.length;i++){
     if((i+1)%count ==1 && i>=count){
         total.push(result)
        result = [];
    }

    result.push(a[i]);
    if(i+1==a.length){
        total.push(result)
    }



  }
  return total;

}
