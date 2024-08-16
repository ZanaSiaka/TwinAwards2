import React from 'react';
import ReactDOM from 'react-dom/client';
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.min.js'
import './index.css';
import App from './App';
import Connexion from './Components/connexion';
import { BrowserRouter, Route } from 'react-router-dom/cjs/react-router-dom.min';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

/* const secondRoot = ReactDOM.createRoot(document.getElementById('connexion'))
secondRoot.render(
    <BrowserRouter>
        <Route  path='/connexion' component={Connexion} />
    </BrowserRouter>
) */