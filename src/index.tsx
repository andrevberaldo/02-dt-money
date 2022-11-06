import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer } from 'miragejs';
import { App } from './App';  

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Transaction 1',
          amout: 400,
          type: 'deposit',
          category: 'Food',
          creatAt: new Date().toLocaleDateString()
        },
        {
          id: 2,
          title: 'Transaction 1',
          amout: -500,
          type: 'withdraw',
          category: 'Food',
          creatAt: new Date().toLocaleDateString()
        }
      ]
    });

    this.post('transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return data;
    });
  }
})


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);