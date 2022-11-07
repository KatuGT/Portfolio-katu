import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FrontEnd, Katu, Link, Presentacion, Redes, Titulo, WrapperSobreMi, WrapperTituloRedes } from './sobreMi.styled';

const SobreMi = () => {
  const { t } = useTranslation(['aboutMe'], { useSuspense: false });

  const [lenguajeActual, setLenguajeActual] = useState()
  const lenguaje = JSON.stringify(localStorage.getItem('i18nextLng'));
  useEffect(() => {
    setLenguajeActual(lenguaje)
  }, [lenguaje]);

  return (
    <WrapperSobreMi id="sobreMi">
      <WrapperTituloRedes>
        <Titulo>
          <Katu>
            {t("hiIam")} <span>Katu</span>
          </Katu>
          <FrontEnd>Front-end developer</FrontEnd>
        </Titulo>
      </WrapperTituloRedes>
      <Presentacion>
      {t("desc")}
      </Presentacion>
      <Redes>
        <Link
          href="https://www.linkedin.com/in/cintiajimenamartinez/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <i className="fa-brands fa-linkedin-in"></i>
          <p>Linkedin</p>
        </Link>
        <Link
          href="https://github.com/KatuGT"
          target="_blank"
          rel="noreferrer noopener"
        >
          <i className="fa-brands fa-github"></i>
          <p>Github</p>
        </Link>

        <Link
          href={lenguajeActual === 'es' ? "https://drive.google.com/file/d/1Cw3je7nWwGJLA3Buh71opgU2zfYAKhix/view?usp=sharing" : "https://drive.google.com/file/d/1OGnPEXF2T9K6yMwojPhoNa5cT-HiDika/view?usp=share_link"}
          target="_blank"
          download="CV - Cintia Jimena Martinez"
          rel="noreferrer noopener"
        >
          <i className="fa-solid fa-file"></i>
          <p>CV</p>
        </Link>
      </Redes>
    </WrapperSobreMi>
  );
};

export default SobreMi;
