import styled from "styled-components";
import {Btnsave} from "../../index";
export function LoginTemplate() {
  return (
    <Container>
      <div>
        <span>Version 1.0</span>
        <div>
          <img />
        </div>
        <Titulo>ControlGastos</Titulo>
        <p>Se que no soy el unico pero si uno de los mejores</p>
        <ContainerBtn>
          <Btnsave>Iniciar Sesion</Btnsave>
        </ContainerBtn>
      </div>
    </Container>
  );
}
const Container = styled.div``;

const Titulo = styled.span`
  font-size: 5rem;
  font-weight: 700;
`;

const ContainerBtn = styled.div`
  display: flex;
  justify-content: center;
`;
