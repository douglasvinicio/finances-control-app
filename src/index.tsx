import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

import { createServer, Model } from 'miragejs';

createServer({
models : {
  transaction: Model,
},

seeds(server) {
  server.db.loadData({
    transactions: [
      {
        id: 1,
        title: "Freelance Website",
        type: "withdraw",
        category: "Software Developer",
        amount: 6000,
        createdAt: new Date('2022-05-10T03:24:00'),
      },

      {
        id: 2,
        title: "Rent",
        type: "withdraw",
        category: "Living",
        amount: 1000,
        createdAt: new Date('November 05, 2022 03:24:00'),
      },

      {
        id: 3,
        title: "Rent",
        type: "withdraw",
        category: "Living",
        amount: 1000,
        createdAt: new Date('2022-12-06T03:24:00'),
      }
    ],
  })
},

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    })

    this.post('/transactions', (schema, request) => { 
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', data);
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

