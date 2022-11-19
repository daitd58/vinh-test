import React from 'react'
import { useState } from 'react'
export const QA = () => {
    const [show,setShow] = useState('')
    const handleStep = (e) =>{
        setShow(e.target.innerText)
        
         
    }
  return (<>
    <div className='d-flex'>
        <button className='p30' onClick={(e)=>handleStep(e)}>Question1</button>
        <button className='p30' onClick={(e)=>handleStep(e)} >Question2</button>
        <button className='p30' onClick={(e)=>handleStep(e)} >Question3</button>
        <button className='p30' onClick={(e)=>handleStep(e)} >Question4</button>
        <button className='p30' onClick={(e)=>handleStep(e)} >Question5</button>
        <button className='p30' onClick={(e)=>handleStep(e)} >Question6</button>
        <button className='p30' onClick={(e)=>handleStep(e)} >Question7</button>
        <button className='p30' onClick={(e)=>handleStep(e)} >Question8</button>
        <button className='p30' onClick={(e)=>handleStep(e)} >Question9</button>
        <button className='p30' onClick={(e)=>handleStep(e)} >Question10</button>
    </div>
   {show==='Question1'?<div>câu hỏi 1</div>:null}
   {show==='Question2'?<div>câu hỏi 2</div>:null}
   {show==='Question3'?<div>câu hỏi 3</div>:null}
   {show==='Question4'?<div>câu hỏi 4</div>:null}
   {show==='Question5'?<div>câu hỏi 5</div>:null}
   {show==='Question6'?<div>câu hỏi 6</div>:null}
   {show==='Question7'?<div>câu hỏi 7</div>:null}
   {show==='Question8'?<div>câu hỏi 8</div>:null}
   {show==='Question9'?<div>câu hỏi 9</div>:null}
   {show==='Question10'?<div>câu hỏi 10</div>:null}
   
    </>
  )
}
