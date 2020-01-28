import React, { Fragment, useState, useEffect } from 'react'

import Page from '../Components/Page'
import Content from '../Components/Content'
import DoggoDisplay from '../Components/DoggoDisplay'
import Button from '../Components/Button'
import FloatingButton from '../Components/FloatingButton'
import { H1, Line } from '../Components/Typography'

const HomePage = () => {
  const [randDoggoImg, setRandDoggoImg] = useState('')
  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then((data) => {
        setRandDoggoImg(data.message)
      })
  }, [])

  return (
    <Fragment>
      <Page>
        <Content>
          <DoggoDisplay image={randDoggoImg} label="Fluffer" confidence={96} />
        </Content>

        <Line />

        <Content>
          <Button
            onClick={() => { window.location.assign('/classify') }}
            color="rgb(255, 214, 0)"
            outlined
          >
            Help us Classify {'>'}
          </Button>
        </Content>

        <Line />

        <Content>
          <H1>What&apos;s a Doggo?</H1>
          <p>
            <em>TL;DR a Doggo is a Dog</em>
          </p>
          <p>
            DoggoLingo, also referred to as woof, bork and dog-speak, is an
            internet language that is created from word conversion, meme
            lexicon, and onomatopoeia. DoggoLingo is implied to be a dog&apos;s
            own idiom, and is presented as what humans have long believed goes
            on in the canine brain.&nbsp;
            <a href="https://en.wikipedia.org/wiki/DoggoLingo">Wikipedia</a>
          </p>
        </Content>
      </Page>

      <FloatingButton color="rgb(255, 0, 95)">+ Add My Dog</FloatingButton>
    </Fragment>
  )
}

export default HomePage
