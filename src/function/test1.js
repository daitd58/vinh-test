//bài 1
const random = ([...arr]) => {
    let m = arr.length;
    
    while (m) {
      const i = Math.floor(Math.random() * m);
      m--
      [arr[m], arr[i]] = [arr[i], arr[m]];
    }
    
    return arr;
  };
  var newArayy =random([1, 2,3,5,6,6,7,8,9,10])
  var result
  while (newArayy.length > 0) {

    result = newArayy.splice(0,3)
  
    console.log(result)
  
  }
 