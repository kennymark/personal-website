import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';
import './styles/normalize.css';
import Route from './components/routes'
import * as serviceWorker from './serviceWorker';

ReactDOM.render( < Route / > , document.getElementById('root'));

serviceWorker.register();