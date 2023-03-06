import Modal from "react-modal";
import { Container, TransactionTypeContainer } from "./styles";
import incomeImg from '../../assets/income.svg'
import expenseImg from '../../assets/expense.svg'

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose
}: NewTransactionModalProps) {
  return (
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      >
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
          <button
            type="button"

          >
            <img src={incomeImg} alt="entradas" />
            <span>Entrada</span>
          </button>

          <button
            type="button"

          >
            <img src={expenseImg} alt="saidas" />
            <span>Saida</span>
          </button>
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
