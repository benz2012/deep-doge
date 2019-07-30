import React, { Fragment } from 'react'

const DoggoDisplay = ({ image, label, confidence }) => (
  <div>
    <img src={image} />
    <p>
      This is a&nbsp;
      {label !== '' ? label : '________'}
    </p>
    {confidence !== null && (
      <p>
        {confidence}% Confidence
      </p>
    )}
  </div>
)

DoggoDisplay.defaultProps = {
  image: '',
  label: '',
  confidence: null,
}

export default DoggoDisplay
