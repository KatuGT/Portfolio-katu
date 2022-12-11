import React from 'react'
import ImgPetSpaceMobile from '../../assets/imagenes/pr-petSpaceMobile.webp';
import ImgPetSpace from '../../assets/imagenes/pr-petSpace.webp';
import ImEstafaMLibre from '../../assets/imagenes/pr-estafaMLibre.webp';
import ImEstafaMLibreMobile from '../../assets/imagenes/pr-estafaMLibreMobile.webp';
import ImgRollflixMobile from '../../assets/imagenes/pr-rollflixMobile.webp';
import ImgRollflix from '../../assets/imagenes/pr-rollflix.webp';
import { useTranslation } from 'react-i18next';
import { WrapperListaProyectos } from './listaProyecto.styled';
import ProyectoTemplate from '../proyectosTemplate/ProyectoTemplate';

const ProyectosEnGrupo = () => {
  const  { t } = useTranslation(['grupalProjects'])
  return (
    <WrapperListaProyectos>
      <ProyectoTemplate
        titulo='Pet Space'
        descripcion={t('petSpace.desc')}
        githubFront='https://github.com/No-Country/C7-G35'
        imgMobile={ImgPetSpaceMobile}
        altMobile='Caputa de pantalla de celular sitio Pet Space'
        imgDesktop={ImgPetSpace}
        altDesktop='Caputa de pantalla de escritorio sitio Pet Space'
        linkDeploy='https://petspace-frontend-nine.vercel.app/'
        imgPsition='left'
      />
      <ProyectoTemplate
        titulo='Estafa MLibre'
        descripcion={t('estafaMLibre.desc')}
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
        descripcion={t('rollflix.desc')}
        githubFront='https://github.com/KatuGT/Proyecto-Final-FrontEnd'
        githubBack='https://github.com/KatuGT/Proyecto-Final-BackEnd'
        imgMobile={ImgRollflixMobile}
        altMobile='Caputa de pantalla de celular sitio Rollflix'
        imgDesktop={ImgRollflix}
        altDesktop='Caputa de pantalla de escritorio sitio Rollflix'
        linkDeploy='https://effortless-centaur-f31ca1.netlify.app/'
        imgPsition='left'
      />
    </WrapperListaProyectos>
  )
}

export default ProyectosEnGrupo