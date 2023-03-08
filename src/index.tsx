import React from "react";
import ReactDOM from "react-dom/client";
import { createServer, Model } from "miragejs";
import App from "./App";

createServer({
  
  models: {
    //salva dados no banco de dados do mirage
    transaction: Model,


  },

  //iniciando uma transação no banco de dados
  seeds(server){
    server.db.loadData({
      transactions: [
        {
          id: '1',
          title: 'Freelancer desenvolvimento',
          type: 'deposit',
          category: 'Dev',
          amount: 5000,
          createdAt: new Date()

        },

        {
          id: '2',
          title: 'Luz',
          type: 'withdraw',
          category: 'Despeza',
          amount: 1000,
          createdAt: new Date()

        },


      ]
    })
  },

  routes() {
    this.namespace = "api";

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', data)
    })
  }
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
