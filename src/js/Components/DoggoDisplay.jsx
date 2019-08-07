import React from 'react'
import styled from 'styled-components'

import { H3, Subtitle } from './Typography'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Feature = styled.div`
  width: 90vw;
  height: 90vw;
  margin-top: 5vw;

  border-radius: 6px;
  background-color: rgb(255, 214, 0);
`

const DoggoDisplay = ({ image, label, confidence }) => (
  <Container>
    {/* <img src={image} /> */}
    <Feature />
    <H3 style={{ marginBottom: '0.3rem' }}>
      This is a&nbsp;
      {label !== '' ? label : '________'}
    </H3>
    {confidence !== null && (
      <Subtitle>
        {confidence}% Confidence
      </Subtitle>
    )}
  </Container>
)

DoggoDisplay.defaultProps = {
  image: '',
  label: '',
  confidence: null,
}

export default DoggoDisplay
