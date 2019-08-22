import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import App from './app/App';
import * as serviceWorker from './serviceWorker';

import {LocaleProvider} from 'antd'
import esEs from 'antd/lib/locale-provider/es_ES'

import 'antd/dist/antd.css'
import './stylesheets/main.scss';

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <LocaleProvider locale={esEs}>
    <App />
    </LocaleProvider>
  </BrowserRouter>,
  document.getElementById('ReactApp')
);

serviceWorker.unregister();
