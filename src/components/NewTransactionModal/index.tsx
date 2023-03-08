import Modal from "react-modal";
import { Container, RadioBox, TransactionTypeContainer } from "./styles";
import incomeImg from '../../assets/income.svg'
import expenseImg from '../../assets/expense.svg'
import minusImg from '../../assets/minus.svg'
import { FormEvent, useState, useContext } from "react";
import { TransactionsContext } from "../../TransactionsContext";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose
}: NewTransactionModalProps) {

  const {createTransaction} = useContext(TransactionsContext)

  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(0)
  const [category, setCategory] = useState('');
  const [type, setType] = useState('')

  function handleCreateNewTrasanction(event: FormEvent){
    event.preventDefault();
   createTransaction({
     title,
     amount,
     category,
     type,
     createdAt: '',
   })
  }

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

      <Container onSubmit={handleCreateNewTrasanction}>
        <h2>Cadastrar transação</h2>
        <input 
            type="text" 
            placeholder="Título"
            value={title}
            onChange={event => setTitle(event.target.value)}
        />

        <input 
            type="number" 
            placeholder="Valor"
            value={amount}
            onChange={event => setAmount(Number(event.target.value))}
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
            value={category}
            onChange={event => setCategory(event.target.value)}

        />
        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  );
}
