import { useState } from "react";
import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";


interface HeaderProps{
  onOpenNewTransactionModal:() =>void;
}

export function Header({onOpenNewTransactionModal}: HeaderProps){

  const [countTransaction, setCountTransaction] = useState(0);
  function handleCountTrasaction(){
    setCountTransaction(countTransaction + 1);
  }

  return (
      <Container>
        <Content>
          <img src={logoImg} alt="personal-finances" />
          <h1>Transações feitas: {countTransaction}</h1>
          <button onClick=/*{handleCountTrasaction}*/{onOpenNewTransactionModal}>Nova transação</button>
         
        </Content>
      </Container>
  );
}
