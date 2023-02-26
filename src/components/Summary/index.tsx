import { Container } from "./styles";
import entradasImg from "../../assets/income.svg"
import saidasImg from "../../assets/expense.svg"
import totalImg from "../../assets/total.svg"

export function Summary(){
    return(
          <Container>
            <div>
              <header>      
                <p>(Summary)Entradas</p>
                <img src={entradasImg} alt="entradas"/>
              </header>
              <strong>R$1000,00</strong>
            </div>

            <div>
              <header>
                <p>Saidas</p>
                <img src={saidasImg} alt="saidas"/>
              </header>
              <strong>R$-1000,00</strong>
            </div>

            <div className="summary-total">
              <header>
                <p>Total</p>
                <img src={totalImg} alt="total"/>
              </header>
              <strong>R$0,00</strong>
            </div>
          </Container>
    )
}