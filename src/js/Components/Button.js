import styled from 'styled-components'

const Button = styled.button`
  border: none;
  color: inherit;

  width: 100%;
  border-radius: 6px;
  margin-top: 5vw;
  margin-bottom: 5vw;
  padding: 4vw;

  font-family: "Courier New", monospace;
  font-size: 1.2rem;
  background-color: ${props => props.color};

  ${props => props.outlined && `
    background-color: transparent;
    color: ${props.color};
    border: 1px solid ${props.color};
  `}
`

export default Button
