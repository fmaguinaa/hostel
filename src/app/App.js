import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { createHistory } from 'history/createBrowserHistory'
import Root from '../components/root/Root'

export const history = createHistory

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Root
          history={history}
        />
      </BrowserRouter>
    );
  }
}