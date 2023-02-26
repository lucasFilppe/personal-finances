import { Container } from "./styles";

export function TransactionsTable() {
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
            <td>R$12.0000</td>
            <td>Desenvolvimento</td>
            <td>20/02/2023</td>
          </tr>

          <tr>
            <td>Desenvolvimento Website</td>
            <td>R$12.0000</td>
            <td>Desenvolvimento</td>
            <td>20/02/2023</td>
          </tr>

          <tr>
            <td>Desenvolvimento Website</td>
            <td>R$12.0000</td>
            <td>Desenvolvimento</td>
            <td>20/02/2023</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
