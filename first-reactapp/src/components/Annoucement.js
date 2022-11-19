export default function Annoucement({showA}){
    return (
        <div>
            {showA ? 
            <div>
                <h1>Annoucement</h1>
            </div>
             : undefined
            }
        </div>
    )
}