import React from 'react';
import ReactDOM from 'react-dom/client';
// import { Provider } from 'react-redux';
// import { ToastContainer } from 'react-toastify';


import 'react-toastify/dist/ReactToastify.css';
import 'normalize.css';
import { App } from './app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);



root.render(
    <App />
);




