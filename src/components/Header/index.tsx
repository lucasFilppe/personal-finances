import { useState } from "react";
import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";

export function Header() {

  const [countTransaction, setCountTransaction] = useState(0);

  return (
      <Container>
        <Content>
          <img src={logoImg} alt="personal-finances" />
          <h1>Transações feitas: {countTransaction}</h1>
          <button onClick={()=> setCountTransaction(countTransaction + 1)}>Nova transação</button>
        </Content>
      </Container>
  );
}
