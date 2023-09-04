import { Titulo } from './tituloSecciones'

const TituloSecciones = ({children , className}) => {
  return (
    <Titulo className={className}>
        {children}
    </Titulo>
  )
}

export default TituloSecciones