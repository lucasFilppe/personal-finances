import styled from "styled-components";


export const Container = styled.form`
  h2 {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.24rem;
    background: #e7e9ee;
    border: 1px solid #d7d7d7;
    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: black;
    }

    & + input {
      margin-top: 1rem;
    }
  }

    button[type="submit"]{
      width: 100%;
      padding: 0 1.5rem;
      background: green;
      height: 4rem;
      border: 0;
      margin-top: 1.5rem;
      color: #d7d7d7;
      font-size: 1rem;

      transition:cfilter 0.2s ;

      &:hover{
        filter: brightness(0.9)
      }
    }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
 
`

interface RadioBoxProps{
  isActive: boolean;
  activeColor: 'green' | 'red'
}

const colors = {
  green: '#239B56',
  red: '#E74C3C'
}

export const RadioBox = styled.button<RadioBoxProps>`
    height: 4rem;
    background: ${(props) => props.isActive 
      ? colors[props.activeColor]
      : 'transparent'};
    display: flex;
    align-items: center;
    justify-content: center;

    img{
      width: 20px;
      height: 20px;
    }
    
    span{
      display: inline-block;
      margin-left: 1rem;
      font-size: 1rem;

    }

    &:hover{
      border-color: #aaa;
    }
`