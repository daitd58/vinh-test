function totalString(a,b){
    a = Number(a)
    b= Number(b)
    let numbera =[]
    let numberb =[]
    let lap= 10;    
    console.log(lap)
    while(a>0){
        numbera.unshift(a%lap)
        a= Math.floor(a/lap);
    }
    while(b>0){
        
        numberb.unshift(b%lap)
        b= Math.floor(b/lap);
        
        
    }
    let result=''
    if(numbera.length == numberb.length){
        
        for(let i=0;i<numbera.length;i++){
            result += (numbera[i]+numberb[i])
        }
    }
    
    if(numbera.length != numberb.length){
        if(numbera.length > numberb.length){
            for(let i=0;i<numbera.length;i++){
                if(i+1<=numberb.length){
                    result += (numbera[i]+numberb[i])
                }
            
            if(i+1>numberb.length){
                result += (numbera[i])
            }
        }
        }
        
        
        if(numbera.length < numberb.length){
            for(let i=0;i<numberb.length;i++){
                if(i+1<=numbera.length){
                    result += (numbera[i]+numberb[i])
                }
            
            if(i+1>numbera.length){
                result += (numberb[i])
            }
        }
        }
    }
    return result
    
    
    
}
console.log(totalString('123','1234'))