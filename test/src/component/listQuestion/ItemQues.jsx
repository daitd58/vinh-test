import React from "react";

function ItemQues(props) {
    const {children,active} = props
    return (
        <li className={active&&"active"}>
            {children}
        </li>
    )
}

export default ItemQues;