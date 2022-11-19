export default function Overview({showO}){
    return (
        <div style={{display:'flex', alignItems:' center', justifyContent: 'center'}}>
        
            {showO ? 
            <div style={{width: '50%', height:'70%', backgroundColor: 'lightcoral', }}>
                <h1>Overview</h1>
            </div>
             : undefined
            }
            

        </div>
    )
}