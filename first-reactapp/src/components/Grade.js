export default function Grade({showG}){
    return (
        <div>{showG ?
            <h1>Grade</h1>
            : undefined
        }
        </div>
    )
}