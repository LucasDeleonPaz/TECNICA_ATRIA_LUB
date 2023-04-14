import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom';
import App from './App';
import Providers from './providers/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Providers>
    <React.StrictMode>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </React.StrictMode>
  </Providers>
);

