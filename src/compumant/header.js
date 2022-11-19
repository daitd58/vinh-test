import React from 'react'
import styled from "styled-components"

const Div = styled.div`
    width: 100%;
    height: 60px;
    border-bottom: 1px solid black;
`
const Ul = styled.ul`
    display: flex;
    gap: 60px;
    list-style: none;
    padding-top: 16px;
    padding-bottom: 22px;
    margin-left: 30px;
    
`
const Li = styled.li`
    cursor: pointer;
`

export default function header() {
  return (
    <Div>
        <Ul>
            <Li>Overview</Li>
            <Li>Annoucement</Li>
            <Li>Course content</Li>
            <Li>Bookmark</Li>
            <Li>Q&A</Li>
            <Li>Grade</Li>
        </Ul>
    </Div>
  )
}
