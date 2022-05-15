import styled from "styled-components";

const Titulo = styled.h3`
    color: #000;
    text-align: center;
    font-weight: normal;
    font-size: 1.3em;
`

const TituloSecciones = ({children}) => {
  return (
    <Titulo>
        {children}
    </Titulo>
  )
}

export default TituloSecciones