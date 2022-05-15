import styled from "styled-components";


const MainWrapper = styled.main`
    margin: 0 2em;
`

const Main = ({children}) => {
  return (
    <MainWrapper>{children}</MainWrapper>
  )
}

export default Main