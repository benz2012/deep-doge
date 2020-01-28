import React, { Fragment, useEffect } from 'react'

import HomePage from './HomePage'
import ClassifyPage from './ClassifyPage'
import AppBar from '../Components/AppBar'

import bodyStyle from '../Style/Body'

const componentForRoute = (path) => {
  if (path === '/classify') {
    return ClassifyPage
  }
  return HomePage
}

const App = () => {
  useEffect(() => {
    Object.entries(bodyStyle).forEach(([attr, style]) => {
      document.body.style[attr] = style
    })
  }, [])

  const routePath = window.location.pathname
  const Component = componentForRoute(routePath)

  return (
    <Fragment>
      <AppBar>Doggo Classifier</AppBar>
      <Component />
    </Fragment>
  )
}

export default App
