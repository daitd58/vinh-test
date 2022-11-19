


function Gt1(){

   //bài 1:

    const array=[1,2,3,4,5,6,7,8,9,10];
    const ar=array[Math.floor(Math.random()*(array.length))];
    const ar1=array[Math.floor(Math.random()*(array.length))];
    const ar2=array[Math.floor(Math.random()*(array.length))];
    const ar4=array[Math.floor(Math.random()*(array.length))];
    const ar5=array[Math.floor(Math.random()*(array.length))];   
    const arra=[ar, ar1, ar2];
    console.log("gt 1: ", arra);
    const arra1=[ar4, ar5,];
    console.log("gt 1: ", arra1);
    const arra3=[ar4];
    console.log("gt 1: ", arra3);

    //bài 2:

    const string1="123";
    const string2="123";
    const num1=parseFloat(string1);
    const num2=parseFloat(string2);
    const num=num1+num2;
    console.log("gt 2:", num);

    //bài 3

    let arr1=[1, 2];
    let arr2=[3, 4];
    let arr3=[5,6];
    arr2.push=arr3;
    arr1.push=arr2;
    let arr=[1, 2, [3, 4, [5, 6]]];
    let arr5=arr.flat(2);
    console.log("gt 3 input:",arr1);
    console.log("gt 3a output:",arr5);

    
    
    // console.log("gt 1: ", ar);

    return(
       <div>
        <p>Kết quả gt</p>
       </div>
    )
}

export default Gt1;