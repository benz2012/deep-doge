import React from 'react'
import styled from 'styled-components'

import DoggoImage from './DoggoImage'
import { H3, Subtitle } from './Typography'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const DoggoDisplay = ({ image, label, confidence }) => (
  <Container>
    <DoggoImage src={image} />
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
