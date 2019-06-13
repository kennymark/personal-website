import React from 'react';
import ReactDOM from 'react-dom';
import './styles/bootstrap.min.css'
import './styles/main.css';
import './styles/normalize.css';
import Route from './components/routes'
import * as serviceWorker from './serviceWorker';
import ReactGA from 'react-ga';
const { pathname, search } = window.location

ReactGA.initialize('UA-68267074-1')
ReactGA.pageview(pathname + search);

ReactDOM.render(<Route />, document.getElementById('root'));
serviceWorker.register();