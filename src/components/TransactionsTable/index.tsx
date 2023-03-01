import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {
  useEffect(() =>{
    api.get('transactions')
    .then(data => console.log(data))
  }, [])
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <td>(Transac)Titulo</td>
            <td>Valor</td>
            <td>Categoria</td>
            <td>Data</td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento Website</td>
            <td className="positivo">R$12.0000</td>
            <td>Desenvolvimento</td>
            <td>20/02/2023</td>
          </tr>

          <tr>
            <td>Aluguel</td>
            <td className="negativo"> R$-2.0000</td>
            <td>Desenvolvimento</td>
            <td>20/02/2023</td>
          </tr>

        </tbody>
      </table>
    </Container>
  );
}
