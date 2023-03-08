import { createContext, ReactNode } from "react";
import { useEffect, useState } from "react";
import { api } from "./services/api";



interface Transaction {
    id: number;
    title: string;
    type: string;
    amount: number;
    category: string;
    createdAt: string;
  }

  interface TransactionInput{
    title: string;
    type: string;
    amount: number;
    category: string;
    createdAt: string;
  }

    interface TransactionsProviderProps{
    children: ReactNode
  }

  interface TransactionsContextData{
    transactions: Transaction[],
    createTransaction: (transaction: TransactionInput) => void
  }

 export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

export function TransactionsProvider({children}: TransactionsProviderProps) {
 
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/transactions")
      .then((response) => response.json())
      .then((data) => setTransactions(data.transactions));
  }, []);

  function createTransaction(transaction: TransactionInput){

    api.post('transactions', transaction)
  }

  return (
    <TransactionsContext.Provider value={{transactions, createTransaction}}>
      {children}
    </TransactionsContext.Provider>
    );
}
