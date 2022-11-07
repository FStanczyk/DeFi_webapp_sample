import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import connect from "./components/connect"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <button id="button" onClick={connect}>connect</button>
  </React.StrictMode>
);