import React, { Fragment } from 'react'

import Page from '../Components/Page'
import Content from '../Components/Content'
import AppBar from '../Components/AppBar'
import DoggoDisplay from '../Components/DoggoDisplay'
import Button from '../Components/Button'
import FloatingButton from '../Components/FloatingButton'
import { H1, Line } from '../Components/Typography'

const HomePage = () => {
  const startingDoggo = {
    image: 'https://random.dog.com/1',
    label: 'Fluffer',
    confidence: 96,
  }

  return (
    <Fragment>
      <AppBar>Doggo Classifier</AppBar>

      <Page>
        <Content>
          <DoggoDisplay {...startingDoggo} />
        </Content>

        <Line />

        <Content>
          <Button color="rgb(255, 214, 0)" outlined>Help us Classify {'>'}</Button>
        </Content>

        <Line />

        <Content>
          <H1>What&apos;s a Doggo?</H1>
          <p>
            Lorem ipsum... etc.
            dslkmksdfkl lksdl ksfdl skd klfm lksdm flksmd lksmd lkmdlkm sdlkm lsk
            dslkmksdfkl lksdl ksfdl skd klfm lksdm flksmd lksmd lkmdlkm sdlkm lsk
            dslkmksdfkl lksdl ksfdl skd klfm lksdm flksmd lksmd lkmdlkm sdlkm lsk
            dslkmksdfkl lksdl ksfdl skd klfm lksdm flksmd lksmd lkmdlkm sdlkm lsk
            dslkmksdfkl lksdl ksfdl skd klfm lksdm flksmd lksmd lkmdlkm sdlkm lsk
            dslkmksdfkl lksdl ksfdl skd klfm lksdm flksmd lksmd lkmdlkm sdlkm lsk
            dslkmksdfkl lksdl ksfdl skd klfm lksdm flksmd lksmd lkmdlkm sdlkm lsk
            dslkmksdfkl lksdl ksfdl skd klfm lksdm flksmd lksmd lkmdlkm sdlkm lsk
            dslkmksdfkl lksdl ksfdl skd klfm lksdm flksmd lksmd lkmdlkm sdlkm lsk
            dslkmksdfkl lksdl ksfdl skd klfm lksdm flksmd lksmd lkmdlkm sdlkm lsk
            dslkmksdfkl lksdl ksfdl skd klfm lksdm flksmd lksmd lkmdlkm sdlkm lsk
            dslkmksdfkl lksdl ksfdl skd klfm lksdm flksmd lksmd lkmdlkm sdlkm lsk
            dslkmksdfkl lksdl ksfdl skd klfm lksdm flksmd lksmd lkmdlkm sdlkm lsk
            dslkmksdfkl lksdl ksfdl skd klfm lksdm flksmd lksmd lkmdlkm sdlkm lsk
            dslkmksdfkl lksdl ksfdl skd klfm lksdm flksmd lksmd lkmdlkm sdlkm lsk
            dslkmksdfkl lksdl ksfdl skd klfm lksdm flksmd lksmd lkmdlkm sdlkm lsk
            dslkmksdfkl lksdl ksfdl skd klfm lksdm flksmd lksmd lkmdlkm sdlkm lsk
            dslkmksdfkl lksdl ksfdl skd klfm lksdm flksmd lksmd lkmdlkm sdlkm lsk
            dslkmksdfkl lksdl ksfdl skd klfm lksdm flksmd lksmd lkmdlkm sdlkm lsk
            dslkmksdfkl lksdl ksfdl skd klfm lksdm flksmd lksmd lkmdlkm sdlkm lsk
            dslkmksdfkl lksdl ksfdl skd klfm lksdm flksmd lksmd lkmdlkm sdlkm lsk
            dslkmksdfkl lksdl ksfdl skd klfm lksdm flksmd lksmd lkmdlkm sdlkm lsk
            dslkmksdfkl lksdl ksfdl skd klfm lksdm flksmd lksmd lkmdlkm sdlkm lsk
            dslkmksdfkl lksdl ksfdl skd klfm lksdm flksmd lksmd lkmdlkm sdlkm lsk
            dslkmksdfkl lksdl ksfdl skd klfm lksdm flksmd lksmd lkmdlkm sdlkm lsk
            dslkmksdfkl lksdl ksfdl skd klfm lksdm flksmd lksmd lkmdlkm sdlkm lsk
            dslkmksdfkl lksdl ksfdl skd klfm lksdm flksmd lksmd lkmdlkm sdlkm lsk
            dslkmksdfkl lksdl ksfdl skd klfm lksdm flksmd lksmd lkmdlkm sdlkm lsk
            dslkmksdfkl lksdl ksfdl skd klfm lksdm flksmd lksmd lkmdlkm sdlkm lsk
            dslkmksdfkl lksdl ksfdl skd klfm lksdm flksmd lksmd lkmdlkm sdlkm lsk
            dslkmksdfkl lksdl ksfdl skd klfm lksdm flksmd lksmd lkmdlkm sdlkm lsk
            dslkmksdfkl lksdl ksfdl skd klfm lksdm flksmd lksmd lkmdlkm sdlkm lsk
            dslkmksdfkl lksdl ksfdl skd klfm lksdm flksmd lksmd lkmdlkm sdlkm lsk
            dslkmksdfkl lksdl ksfdl skd klfm lksdm flksmd lksmd lkmdlkm sdlkm lsk
            dslkmksdfkl lksdl ksfdl skd klfm lksdm flksmd lksmd lkmdlkm sdlkm lsk
            dslkmksdfkl lksdl ksfdl skd klfm lksdm flksmd lksmd lkmdlkm sdlkm lsk
            dslkmksdfkl lksdl ksfdl skd klfm lksdm flksmd lksmd lkmdlkm sdlkm lsk
          </p>
        </Content>
      </Page>

      <FloatingButton color="rgb(255, 0, 95)">+ Add My Dog</FloatingButton>
    </Fragment>
  )
}

export default HomePage
