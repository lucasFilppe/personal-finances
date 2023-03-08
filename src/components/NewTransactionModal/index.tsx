import Modal from "react-modal";
import { Container, RadioBox, TransactionTypeContainer } from "./styles";
import incomeImg from '../../assets/income.svg'
import expenseImg from '../../assets/expense.svg'
import minusImg from '../../assets/minus.svg'
import { useState } from "react";
interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose
}: NewTransactionModalProps) {

  const [type, setType] = useState('deposit')

  return (
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      >

      <button
        type='button'
        onClick={onRequestClose}
        className='react-modal-close'
      >
        <img src={minusImg} alt="fechar" />
      </button>

      <Container>
        <h2>Cadastrar transação</h2>
        <input 
            type="text" 
            placeholder="Título"
        />

        <input 
            type="number" 
            placeholder="Valor"
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => {setType('deposit')}}
            isActive={type === 'deposit'}
            activeColor='green'

          >
            <img src={incomeImg} alt="entradas" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => {setType('withdraw')}}
            isActive={type === 'withdraw'}
            activeColor='red'

          >
            <img src={expenseImg} alt="saidas" />
            <span>Saida</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input 
            type="text" 
            placeholder="Categoria"
        />
        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  );
}
