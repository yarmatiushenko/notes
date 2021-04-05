import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

// redux
import { store } from '../redux/store'
import { Provider } from 'react-redux'

// material ui
import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core'
import useMediaQuery from '@material-ui/core/useMediaQuery'

// components
import Header from './Header'
import NotesBody from './NotesBody'
import MobileLayout from './NotesBody/MobileLayout'

const theme = createMuiTheme()

const App = () => {
  const isMobile = useMediaQuery('(max-width:800px)')

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router >
          <div style={{ display: 'flex' }}>
            <Header/>
            {!isMobile && <NotesBody/>}
            {isMobile && <MobileLayout/>}
          </div>
        </Router>
      </ThemeProvider>
    </Provider>
  )
}

export default App
