import React, { Component } from 'react'

// redux
import { store } from '../redux/store'
import { Provider } from 'react-redux'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <h1>My React App!</h1>
      </Provider>
    )
  }
}

export default App
