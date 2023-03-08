import { useEffect, useState } from "react";
import { Container } from "./styles";

interface Transaction {
  id: number;
  title: string;
  type: string;
  category: string;
  createdAt: string;
}
export function TransactionsTable() {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() =>{
    fetch('http://localhost:3000/api/transactions')
    .then(response => response.json())
    .then(data => setTransactions(data.transactions))
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
        
          {transactions.map(transction =>{
            return(
              <tr key={transction.id}>
                <td> {transction.title} </td>
                <td className="deposit"> {transction.title} </td>
                <td> {transction.category} </td>
                <td> {transction.createdAt} </td>
              </tr>
            )
          })}

        </tbody>
      </table>
    </Container>
  );
}
