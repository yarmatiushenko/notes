import React, { Component } from 'react'

// redux
import { store } from '../redux/store'
import { Provider } from 'react-redux'

// material ui
import { ThemeProvider } from "@material-ui/styles"
import { createMuiTheme } from "@material-ui/core"
import Typography from '@material-ui/core/Typography';

const theme = createMuiTheme()

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Typography variant="h1" component="h2">My React App!</Typography>
        </ThemeProvider>
      </Provider>
    )
  }
}
