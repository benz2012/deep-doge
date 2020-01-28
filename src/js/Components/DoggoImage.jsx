import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  margin-top: 5vw;
`

const Image = styled.img`
  width: 90vw;
  height: 90vw;
  border-radius: 6px;

  object-fit: cover;

  visibility: ${props => (Boolean(props.src) !== false ? 'visible' : 'hidden')};
`

const DoggoImage = ({ src }) => (
  <Container>
    <Image src={src} />
  </Container>
)

export default DoggoImage
