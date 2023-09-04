import styled from "styled-components";

export const WrapperFooter = styled.footer`
  background-color: #000;
  padding: 4em;
  color: #fff;
  display: grid;
  place-items: center;
  > p {
    font-size: 1.5em;
    font-weight: bold;
  }
`;

export const Contacto = styled.div`
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