import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
//import {createHistory} from 'history/createBrowserHistory'
//import { browserHistory } from 'react-router';
import Root from '../components/root/Root'

//export const history = createHistory()

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Root
        //history={browserHistory}
        />
      </BrowserRouter>
    );
  }
}

export default App;