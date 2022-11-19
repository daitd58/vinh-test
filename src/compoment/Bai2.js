import React from 'react'
import styled from 'styled-components'

const Div1 = styled.div`
    display: flex;
    justify-content: space-around;
`
const Div2 = styled.div`
    width: 1400px;
    height: 100px;
    border: 1px solid black;
`
const Ul = styled.ul`
    list-style: none;
    padding-top: 16px;
    padding-bottom: 22px;
    margin-left: 30px;
    display: grid;
    grid-template-columns: auto auto auto auto auto auto;
    gap: 10px;
    padding: 10px;
`

export default function Bai2() {
  return (
    <div>
        <Div1>
            <button>
                <a>Time remaining: 00:26:35</a>
            </button> 
            <a>Lưu ý: Hãy save từng câu sau khi trả lời</a>
        </Div1>
        <Div2>
            <Ul>
                <li>Question 1</li>
                <li>Question 2</li>
                <li>Question 3</li>
                <li>Question 4</li>
                <li>Question 5</li>
                <li>Question 6</li>
                <li>Question 7</li>
                <li>Question 8</li>
                <li>Question 9</li>
                <li>Question 10</li>
            </Ul>
        </Div2>
        <div>
            <h1>2. Which value will be printed in console:(0.25pts)</h1>
            
        </div>
    </div>
  )
}
