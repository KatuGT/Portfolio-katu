import styled from "styled-components";

const Titulo = styled.h3`
    color: #000;
    text-align: center;
    font-weight: bold;
    font-size: 1.5em;
`

const TituloSecciones = ({children , className}) => {
  return (
    <Titulo className={className}>
        {children}
    </Titulo>
  )
}

export default TituloSecciones