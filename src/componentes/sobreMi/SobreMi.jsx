import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  FrontEnd,
  Katu,
  Link,
  Presentacion,
  Redes,
  Titulo,
  WrapperSobreMi,
  WrapperTituloRedes,
} from './sobreMi.styled';

const SobreMi = () => {
  const { t } = useTranslation(['aboutMe'], { useSuspense: false });

  
  const [cvLink, setCvLink] = useState('');

  const idioma = localStorage.getItem('i18nextLng');

  useEffect(() => {
    const link = (idioma === 'es'
    ? 'https://drive.google.com/file/d/1MTTv0wRLhb7VfoAvHfv5Tn0EeflyVT3L/view?usp=share_link'
    : 'https://drive.google.com/file/d/1AtAZ4A-csmhIoAz9UPkC-EAYBT9RQPIJ/view?usp=share_link')
    setCvLink(link)
  }, [idioma]);
  
  return (
    <WrapperSobreMi id='sobreMi'>
      <WrapperTituloRedes>
        <Titulo>
          <Katu>
            {t('hiIam')} <span>Katu</span>
          </Katu>
          <FrontEnd>Front-end developer</FrontEnd>
        </Titulo>
      </WrapperTituloRedes>
      <Presentacion>{t('desc')}</Presentacion>
      <Redes>
        <Link
          href='https://www.linkedin.com/in/cintiajimenamartinez/'
          target='_blank'
          rel='noreferrer noopener'
        >
          <i className='fa-brands fa-linkedin-in'></i>
          <p>Linkedin</p>
        </Link>
        <Link
          href='https://github.com/KatuGT'
          target='_blank'
          rel='noreferrer noopener'
        >
          <i className='fa-brands fa-github'></i>
          <p>Github</p>
        </Link>

        <Link
          href={cvLink}
          target='_blank'
          download='CV - Cintia Jimena Martinez'
          rel='noreferrer noopener'
        >
          <i className='fa-solid fa-file'></i>
          <p>CV</p>
        </Link>
      </Redes>
    </WrapperSobreMi>
  );
};

export default SobreMi;
