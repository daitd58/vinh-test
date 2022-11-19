import { useState } from "react";

function Cau2a(props){
    const an= new Date();

    return(
       <div>
            <div style={{display: props.open? "block": "none"}}>
                <p style={{backgrroundColor: "gray"}}>Time reamining: </p>
                <b>2, Which calue wil be prited in console 0.25prs</b>
            </div>
       </div>
    )
}

export default Cau2a;