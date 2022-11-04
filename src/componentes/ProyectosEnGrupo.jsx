import React from 'react'
import ProyectoTemplate from './ProyectoTemplate'
import ImgPetSpaceMobile from '../imagenes/pr-petSpaceMobile.webp';
import ImgPetSpace from '../imagenes/pr-petSpace.webp';
import ImEstafaMLibre from '../imagenes/pr-estafaMLibre.webp';
import ImEstafaMLibreMobile from '../imagenes/pr-estafaMLibreMobile.webp';
import ImgRollflixMobile from '../imagenes/pr-rollflixMobile.webp';
import ImgRollflix from '../imagenes/pr-rollflix.webp';


const ProyectosEnGrupo = () => {
  return (
    <>
      <ProyectoTemplate
        titulo='Pet Space'
        descripcion='Sitio con el fin de ayudar a mascotas a reunirse con sus familias, fue hecho para como parte de challange de No Country (si pasamos), yo me encargue del front.'
        githubFront='https://github.com/No-Country/C7-G35'
        imgMobile={ImgPetSpaceMobile}
        altMobile='Caputa de pantalla de celular sitio Pet Space'
        imgDesktop={ImgPetSpace}
        altDesktop='Caputa de pantalla de escritorio sitio Pet Space'
        linkDeploy='https://petspace-frontend-nine.vercel.app/'
        imgPsition='left'
      />
      <ProyectoTemplate
        titulo='EstafaMLibre'
        descripcion='Es el resultado de un equipo de 3/4 personas, yo me encargue de la landing page y el footer. Es la versión malvada de Mercado Libre.'
        githubFront='https://github.com/agustingu20/estafa-mlibre'
        imgMobile={ImEstafaMLibreMobile}
        altMobile='Caputa de pantalla de celular sitio MoviePop'
        imgDesktop={ImEstafaMLibre}
        altDesktop='Caputa de pantalla de escritorio sitio MoviePop'
        linkDeploy='https://estafa-mlibre.vercel.app/'
        imgPsition='right'
        orderDos='order-dos'
      />
      <ProyectoTemplate
        titulo='Rollflix'
        descripcion='Clon de Netflix, fue mi proyecto final en el curso FullStack
            (MERN) de RollingCode School.'
        githubFront='https://github.com/KatuGT/Proyecto-Final-FrontEnd'
        githubBack='https://github.com/KatuGT/Proyecto-Final-BackEnd'
        imgMobile={ImgRollflixMobile}
        altMobile='Caputa de pantalla de celular sitio Rollflix'
        imgDesktop={ImgRollflix}
        altDesktop='Caputa de pantalla de escritorio sitio Rollflix'
        linkDeploy='https://effortless-centaur-f31ca1.netlify.app/'
        imgPsition='left'
      />
    </>
  )
}

export default ProyectosEnGrupo