import { useState } from "react";
import Cau2a from "./Cau2a";

function Cau2(){

    const [open, setOpen] = useState(false);

    return(
        <div>
            <ul style={{display: "flex", listStyleType:"none", padding: 0, marginLeft:0, borderBottom:"1px solid gray"}}>
                <li style={{padding: "10px"}}>
                    <button onClick={()=>setOpen(false)} style={{border: "none", backgroundColor: "white"}}>Question 1</button>
                </li>
                <li style={{padding: "10px"}}>
                    <button onClick={()=>setOpen(false)} style={{border: "none", backgroundColor: "white"}}>Question 2</button>
                </li>
                <li style={{padding: "10px"}}>
                    <button onClick={()=>setOpen(true)} style={{border: "true", backgroundColor: "white"}}>Question 3</button>
                </li>
                <li style={{padding: "10px"}}><button onClick={()=>setOpen(false)} style={{border: "none", backgroundColor: "white"}}>Bookmark</button></li>
                <li style={{padding: "10px"}}><button onClick={()=>setOpen(false)} style={{border: "none", backgroundColor: "white"}}>Q&A</button></li>
                <li style={{padding: "10px"}}><button onClick={()=>setOpen(false)} style={{border: "none", backgroundColor: "white"}}>Grade</button></li>
            </ul>
            <Cau2a
                open={open}
            />
        </div>
    )
}

export default Cau2;