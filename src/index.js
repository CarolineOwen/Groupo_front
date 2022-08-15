import React from 'react';
import ReactDOM from 'react-dom/client';
import "./styles/index.scss";
import App from './App';

//Fichier qui relie le projet react au DOM avec l'id root

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(   
    <App />
);

