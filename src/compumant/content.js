import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
    display: flex;
    flex-direction: row;
`

const Div1 = styled.div`
    width: 900px;
    height: 160px;
    border: 1px solid black;
    margin-top: 40px;
    margin-left: 10px;

`
const Div2 = styled.div`
    width: 400px;
    height: 130px;
    border: 1px solid black;
    margin-top: 40px;
    margin-left: 40px;
`

export default function content() {
  return (
    <Div>
        <Div1>
            Son
        </Div1>
        <Div2>
            Son
        </Div2>
    </Div>

  )
}
