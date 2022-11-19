
export const dataOne=[
    {
    title:"Tag 1" ,
    content: "Lorem ipsum dolor sit amet consectetuaiores nisi pariatur facere. Sunt, in."
},
    {
    title:"Tag 2" ,
    content: "Lorem ipsum dolor sit amibusdam iste maiores nisi pariatur facere. Sunt, in."
},
    {
    title:"Tag 3" ,
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nulla dolore eligendi eveniet, blanditiis beatae hic vel vero excepturi aliquid earum aut quibusdam iste maiores nisi pariatur facere. Sunt, in."
},
    {
    title:"Tag 4" ,
    content: "Lorem ipsum dolor sit amet cores nisi pariatur facere. Sunt, in."
},
    {
    title:"Tag 5" ,
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. uibusdam iste maiores nisi pariatur facere. Sunt, in."
},
    {
    title:"Tag 6" ,
    content: "Lorem Voluptatibus nulla dolore eligendi eveniet, blanditiis beatae hic vel vero excepturi aliquid earum aut quibusdam iste maiores nisi pariatur facere. Sunt, in."
},    
    
    
    
]

function Header(props) {
    const {index,handleChange} = props

    return (
        <div className="hex">
            <ul>{
                dataOne.map((_,_i)=><li onClick={()=>handleChange(_i)} className={index==_i && "choose" } key={_.title}>{_.title}</li>)}
            </ul>
        </div>
    )
}


export default Header
