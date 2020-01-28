import React, { useState, useEffect } from 'react'

import Page from '../Components/Page'
import Content from '../Components/Content'
import DoggoDisplay from '../Components/DoggoDisplay'
import Button from '../Components/Button'
import ClassifierButtonWrapper from '../Components/ClassifierButtonWrapper'
import ClassifierButton from '../Components/ClassifierButton'
import { H1, Subtitle } from '../Components/Typography'

const ClassifyPage = () => {
  const [randDoggoImg, setRandDoggoImg] = useState('')
  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then((data) => {
        setRandDoggoImg(data.message)
      })
  }, [])

  const [selected, select] = useState('')
  const selectDog = event => select(event.target.innerText)

  return (
    <Page>
      <Content>
        <H1 style={{ marginBottom: '0.3rem' }}>
          What doggo is this?
        </H1>
        <Subtitle style={{ marginBottom: 0 }}>
          12,543 Unclassified Doggos
        </Subtitle>
        <DoggoDisplay image={randDoggoImg} />
      </Content>

      <Content>
        <ClassifierButtonWrapper>
          <ClassifierButton
            onClick={selectDog}
            selected={selected === 'Doggo'}
          >
            Doggo
          </ClassifierButton>
          <ClassifierButton
            onClick={selectDog}
            selected={selected === 'Woofer'}
          >
            Woofer
          </ClassifierButton>
          <ClassifierButton
            onClick={selectDog}
            selected={selected === 'Fluffer'}
          >
            Fluffer
          </ClassifierButton>
          <ClassifierButton
            onClick={selectDog}
            selected={selected === 'Scrapper'}
          >
            Scrapper
          </ClassifierButton>
          <ClassifierButton
            onClick={selectDog}
            selected={selected === 'Yapper'}
          >
            Yapper
          </ClassifierButton>
          <ClassifierButton
            onClick={selectDog}
            selected={selected === 'Puggo'}
          >
            Puggo
          </ClassifierButton>
        </ClassifierButtonWrapper>
      </Content>

      <Content>
        <Button color="rgb(255, 214, 0)" outlined onClick={() => { window.location.reload() }}>Submit</Button>
      </Content>
    </Page>
  )
}

export default ClassifyPage
