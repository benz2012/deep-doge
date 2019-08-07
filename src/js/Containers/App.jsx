import React, { Fragment, useEffect } from 'react'

import HomePage from './HomePage'
import ClassifyPage from './ClassifyPage'

import bodyStyle from '../Style/Body'

const App = () => {
  useEffect(() => {
    Object.entries(bodyStyle).forEach(([attr, style]) => {
      document.body.style[attr] = style
    })
  }, [])

  return (
    <Fragment>
      <HomePage />
      {/* <ClassifyPage /> */}
    </Fragment>
  )
}

export default App
