import styled from 'styled-components'

const Button = styled.button`
  width: 100%;

  font: Courier;

  ${props => props.outlined && `
    background-color: none;
    border: 1px solid ${props.color};
  `}
`

export default Button
