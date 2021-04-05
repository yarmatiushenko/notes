import React from 'react'

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

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div style={{ display: 'flex' }}>
          <Header/>
          <NotesBody/>
        </div>
      </ThemeProvider>
    </Provider>
  )
}

export default App
