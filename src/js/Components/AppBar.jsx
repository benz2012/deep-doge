import React from 'react'
import styled from 'styled-components'

import { H2 } from './Typography'

const Container = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 64px;

  color: white;
  background-color: rgb(255, 0, 95);

  display: flex;
  align-items: center;
  justify-content: center;
`

const AppBar = ({ children }) => (
  <Container>
    <H2>{children}</H2>
  </Container>
)

export default AppBar
