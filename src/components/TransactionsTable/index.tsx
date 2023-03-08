import { useEffect, useState, useContext } from "react";
import { Container } from "./styles";
import { TransactionsContext } from "../../TransactionsContext";


export function TransactionsTable() {
  const transactions= useContext(TransactionsContext)

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
                <td className={transction.type}>
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(transction.amount)}
                 </td>
                <td> {transction.category} </td>
                <td className={transction.type}>
                  {new Intl.DateTimeFormat('pt-BR').format(
                    new Date (transction.createdAt))}
                 </td>
              </tr>
            )
          })}

        </tbody>
      </table>
    </Container>
  );
}
