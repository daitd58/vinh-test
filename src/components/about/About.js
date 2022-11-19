import React from 'react'
import styled from 'styled-components'

const Container = styled.div``
const Nav = styled.div`
      border-bottom:  1px solid #ccc;
`
const Ul = styled.ul`
    list-style: none;
    display: flex;
`
const Li = styled.li`
    padding: 20px;
`

const About =() => {
  return (
    <Container>
        <Nav>
            <Ul>
                <a href='/'><Li>Home</Li></a>
                <a href='/abuot'><Li>abuot</Li></a>
                <a href='/product'><Li>product</Li></a>
                <a href='/QA'><Li>QA</Li></a>
             </Ul>
        </Nav>
    </Container>
  )
}

export default About