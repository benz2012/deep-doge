import React from 'react'
import styled from 'styled-components'

import Button from './Button'

const ButtonExtension = styled(Button)`
  width: 47%;
  font-size: 1rem;
  margin-bottom: 0;
  padding: 3vw;
`

const ClassifierButton = ({ children, selected, ...rest }) => (
  <ButtonExtension color="rgb(255, 0, 95)" outlined={!selected} {...rest}>
    {children}
  </ButtonExtension>
)

ClassifierButton.defaultProps = {
  children: 'Button Text',
  selected: false,
}

export default ClassifierButton
