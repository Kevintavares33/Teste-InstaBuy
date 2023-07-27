import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { CarProvider } from '../src/components/carcontext/CarContext';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CarProvider>
        <App />
      </CarProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
