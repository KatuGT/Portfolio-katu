import { useTranslation } from 'react-i18next';
import { Contacto, WrapperFooter } from './footer.styled';

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
