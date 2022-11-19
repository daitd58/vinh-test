import '../../style/style.css'

function Pagination(props) {
    const {handlePagination} = props

    return (
        <div className="gro-btn">

        <button onClick={handlePagination} value="prev" className="btn" > Prev </button>
        <button onClick={handlePagination} value="next" className="btn" > Next </button>
        <button onClick={handlePagination} value="final" className="btn final" > Final </button>
        </div>
    )
}


export default Pagination
