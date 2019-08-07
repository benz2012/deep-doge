import styled from 'styled-components'

import Button from './Button'

const FloatingButton = styled(Button)`
  position: fixed;
  bottom: 16px;

  margin: 0 5vw;
  width: 90vw;

  box-shadow: 0px 3px 6px 1px rgba(0, 0, 0, 0.6);
`

export default FloatingButton
