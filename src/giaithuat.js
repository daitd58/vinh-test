const arr = [1,2,3,4,5,6,7,8,0,11,22,23]
const maxLength = 4
function test(arr){
    let result = [];
    const newArrayLength = arr/maxLength;
    for (let i = 0; i < newArrayLength;i++){
        let arr1= []
        for(let i = 0; i < newArrayLength;i++){
            const num = arr[Math.floor(Math.random() * arr.length)];
            arr.remove(num);
            arr1.push(num)
        }
        result.push([arr1])
    }
    return result;

}
test(arr)
const num1 = '123';
const num2 ='123';
function test2(num1,num2){
    const ax = num1.split()
    const bx = num2.split()
    const numA = ax.reduce((acc,c)=> acc*10 + Number(c) , 0)
    const numB = bx.reduce((acc,c)=> acc*10 + Number(c) , 0)
    const result = String(numA + numB)
    return result
}
test2(num1,num2)
