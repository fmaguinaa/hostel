import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import App from './app/App';
import * as serviceWorker from './serviceWorker';

import './stylesheets/main.scss';

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <App />
  </BrowserRouter>,
  document.getElementById('ReactApp')
);

serviceWorker.unregister();
