import styled from "styled-components";

const WrapperLineas = styled.div`
  margin: 3em 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LineaNegra = styled.div`
  height: 1px;
  max-width: 70%;
  width: 70%;
  position: relative;
  background-color: black;
  top: 0;
`;

const LineaVerde = styled.div`
  height: 1px;
  width: 70%;
  max-width: 70%;
  position: relative;
  top: 2px;
  left: 10px;
  background-color: var(--main-clr);
`;

const Divisor = () => {
  return (
    <WrapperLineas>
      <LineaNegra />
      <LineaVerde />
    </WrapperLineas>
  );
};

export default Divisor;
