import React from 'react'
import styled from 'styled-components'
import logo from '../../asset/images/items.png'

function Logo() {

    const Container = styled.div``
const Title = styled.div`
      
`

  return (
    <Container>
        <Title>
            Awarded  By
        </Title>
        <Logo>
        <img src={`${logo}`} />
        </Logo>
    </Container>
  )
}

export default Logo