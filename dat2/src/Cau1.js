import { useState } from "react";

function Cau1(){

    const [open, setOpen] = useState(false);

    return(
        <div>
            <ul style={{display: "flex", listStyleType:"none", padding: 0, marginLeft:0, borderBottom:"1px solid gray"}}>
                <li style={{padding: "10px"}}>
                    <button onClick={()=>setOpen(true)} style={{border: "none", backgroundColor: "white"}}>Overview</button>
                </li>
                <li style={{padding: "10px"}}>
                    <button onClick={()=>setOpen(false)} style={{border: "none", backgroundColor: "white"}}>Anmoucement</button>
                </li>
                <li style={{padding: "10px"}}>
                    <button onClick={()=>setOpen(false)} style={{border: "none", backgroundColor: "white"}}>Course content</button>
                </li>
                <li style={{padding: "10px"}}><button onClick={()=>setOpen(false)} style={{border: "none", backgroundColor: "white"}}>Bookmark</button></li>
                <li style={{padding: "10px"}}><button onClick={()=>setOpen(false)} style={{border: "none", backgroundColor: "white"}}>Q&A</button></li>
                <li style={{padding: "10px"}}><button onClick={()=>setOpen(false)} style={{border: "none", backgroundColor: "white"}}>Grade</button></li>
            </ul>
            <div style={{display: open? "block": "none"}}>
                <div style={{width:"100%", display: "flex"}}>
                    <div style={{width:"70%"}}>
                        <div style={{border:"1px solid gray"}}>
                            <h1>Awarded By</h1>
                            <img src="" alt="a1" />
                        </div>
                        <div style={{border:"1px solid gray", marginTop: "10px"}}>
                            <h1>Course Instructor</h1>
                            <img src="" alt="a2" style={{borderRadius:"50%"}}/>
                            <p>Van Nguyen Hong</p>
                            <p>Van.nguyenhong@nccs.asia</p>
                        </div>
                    </div>
                    <div style={{width:"30%"}}>
                        <ul style={{listStyleType:"none"}}>
                            <li>
                                
                                <p>Instutution</p>
                            </li>
                            <li>Subject</li>
                            <li>Level Basic</li>
                            <li>Video Transcript English</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cau1;