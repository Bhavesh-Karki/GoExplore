import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';  
import { BrowserRouter } from 'react-router-dom';
import { DestinationsProvider } from './context/DestinationsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <DestinationsProvider>
      <App />
    </DestinationsProvider>
  </BrowserRouter>
);