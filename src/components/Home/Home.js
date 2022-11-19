import React from 'react'
import styled from 'styled-components'
import logo from '../../asset/images/items.png'

const Container = styled.div``

const Ul = styled.ul`
    list-style: none;
    display: flex;
`
const Li = styled.li`
    padding: 20px;
`
const Main = styled.li`
    display: flex;
`
const Logo = styled.li`
    border: 1px solid  black;
`
const Title = styled.li`
    
`
const Logoimg = styled.li`
    
`
const Content = styled.li`
    
`

function Home() {
  return (
    <Container>

    <Main>
        <Logo>
            <Title>
                Awarded  By
            </Title>
            <Logoimg>
            <img src={`${logo}`} />
            </Logoimg>
        </Logo>
        <Content>
        <Ul>
                <Li>Home</Li>
                <Li>Home</Li>
                <Li>Home</Li>
                <Li>Home</Li>
            </Ul>
        </Content>
    </Main>
</Container>
  )
}

export default Home