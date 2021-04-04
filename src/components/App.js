import React, { Component } from 'react'

// redux
import { store } from '../redux/store'
import { Provider } from 'react-redux'

// material ui
import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core'

// components
import Header from './Header'
import NotesBody from './NotesBody'

const theme = createMuiTheme()

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Header/>
          <NotesBody/>
        </ThemeProvider>
      </Provider>
    )
  }
}
