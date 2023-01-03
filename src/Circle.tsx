import styled from 'styled-components'

interface ContainerProps {
  bgColor: string
}

interface CircleProps {
  bgColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px
  background-color: ${props => props.bgColor}
`

function Circle({bgColor}: CircleProps) {
  return <Container bgColor={bgColor}/>
}

export default Circle