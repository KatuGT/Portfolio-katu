 import { Contacto, WrapperFooter } from './footer.styled';

const Footer = () => {
  return (
    <WrapperFooter>
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
      </Contacto>
    </WrapperFooter>
  );
};

export default Footer;
