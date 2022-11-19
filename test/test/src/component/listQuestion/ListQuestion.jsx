import ItemQues from "./ItemQues"
import "../../style/style.css"
import { useState } from "react"
export const data = [
    {
        title : "question 1",
        ask : "",
        ques : "lorem 1"        
    },
    {
        title : "question 2",
        ask : "",
        ques : "lorem 2"     
    },
    {
        title : "question 3",
        ask : "",
        ques : "lorem 3"
    },
    {
        title : "question 4",
        ask : "",
        ques : "lorem 4"
    },
    {
        title : "question 5",
        ask : "",
        ques : "lorem 5"
    },
    {
        title : "question 6",
        ask : "",
        ques : "lorem 6"
    },
    {
        title : "question 7",
        ask : "",
        ques : "lorem 7"
    },
    {
        title : "question 8",
        ask : "",
        ques : "lorem 8"
    },
    {
        title : "question 9",
        ask : "",
        ques : "lorem 9"
    },
    {
        title : "question 10",
        ask : "",
        ques : "lorem 10"
    }
 ]
function ListQuestion(props) {
    
    const {index} = props

    return (
        <div className="list-ques">
            <ul>
                {data.map((_,_i)=> <ItemQues active={index==_i} key={_.title} >{_.title}</ItemQues>)}
            </ul>
        </div>
    )
}


export default ListQuestion
