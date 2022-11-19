import { Link, Outlet } from "react-router-dom";
import { useState } from 'react'
function StepsComponent() {
    const arr = [1,2,3,4,5,6,7]
    const [select,setSelect]= useState(1)
    const nextClick = ()=>{
        if(select >= 7){
            setSelect(1)
        }else{
            setSelect(select => select +1)
        }
    }
    const previousClick = ()=>{
        if(select <= 1){
            setSelect(7)
        }else{
            setSelect(select => select -1)
        }
    }
    return (<>
    <div className="list">
        {arr.map((item)=> 
            (<div onClick={()=>setSelect(item)} key={item} className={item === select ? 'item-select': 'item'}>question {item}</div>)
            )}
    </div>
            <div>{select}</div>
        <button onClick={()=> previousClick()}>previous</button>
        <button onClick={()=> nextClick()}>next</button>
    </>);
}

export default StepsComponent;