import React, { Fragment } from 'react'

import AppBar from './AppBar'
import DoggoDisplay from '../Components/DoggoDisplay'
import FloatingButton from '../Components/FloatingButton'

const HomePage = () => {
  const startingDoggo = {
    image: 'https://random.dog.com/1',
    label: 'Fluffer',
    confidence: 96,
  }

  return (
    <Fragment>
      <AppBar />
      <DoggoDisplay {...startingDoggo} />
      <hr />

      <button>Help us Classify {'>'}</button>
      <hr />

      <h1>What is a Doggo?</h1>
      <p>
        Lorem ipsum... etc.
      </p>

      <FloatingButton>+ Add My Dog</FloatingButton>
    </Fragment>
  )
}

export default HomePage
