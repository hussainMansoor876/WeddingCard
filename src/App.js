import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { store } from './Redux/store'
import Routes from './Config/routes'
import './App.css'


class App extends Component {
  constructor() {
    super()
    this.state = {
    }
  }

  render() {
    return (
      <div>
          <Provider store={store}>
        <Routes />
          </Provider>
      </div>
    )
  }
}

export default App;
