import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
`

const Image = styled.img``

const DoggoImage = ({ src }) => (
  <Container>
    <Image src={src} />
  </Container>
)

export default DoggoImage
