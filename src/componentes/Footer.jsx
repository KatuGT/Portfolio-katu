import styled from "styled-components";
import { useTranslation } from 'react-i18next';

const WrapperFooter = styled.footer`
  background-color: #000;
  padding: 2em;
  color: #fff;
  display: grid;
  place-items: center;
  > p {
    font-size: 1.5em;
    font-weight: bold;
  }
`;

const Contacto = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    color: inherit;
    font-size: 2em;
    margin-bottom: 1em;
  }
  p {
    margin: 0;
    font-size: 1.5em;
  }

  @media screen and (min-width: 600px) {
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    a:nth-child(2) {
      margin: 0 1em;
    }
    a {
      margin-bottom: 0;
    }
    p {
      font-size: 1.5em;
    }
  }
`;

const Footer = () => {
  const { t } = useTranslation(['footer'], { useSuspense: false })
  return (
    <WrapperFooter>
      <p>{t('contact')}</p>
      <Contacto>
        <a
          href="https://github.com/KatuGT"
          target="_blank"
          rel="noreferrer noopener"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/cintiajimenamartinez/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
        <p>93katu@gmail.com</p>
      </Contacto>
    </WrapperFooter>
  );
};

export default Footer;
