import React from 'react'
import PropTypes from 'prop-types'
import { useLocation, useHistory } from 'react-router-dom'
import clsx from 'clsx'

// material-ui
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder'
import NoteAddIcon from '@material-ui/icons/NoteAdd'
import MenuIcon from '@material-ui/icons/Menu'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace'

// redux
import { connect } from 'react-redux'
import { createFolder, createNote, toggleDrawer } from '../../redux/reducer'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#202122',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: 'calc(100% - 300px)',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    '@media only screen and (max-width: 800px)': {
      width: '100%'
    }
  },
  iconBtn: {
    '& svg': {
      color: '#fff'
    }
  },
  disabled: {
    '& svg': {
      color: 'grey'
    }
  }
}))

function Header({ createFolder, createNote, toggleDrawer, foldersDrawer, activeFolder }) {
  const classes = useStyles()
  const history = useHistory()
  const location = useLocation()
  const isMobile = useMediaQuery('(max-width:800px)')
  const isHomePath = location.pathname === '/'

  console.log(location)
  const handleCreateNote = () => createNote(activeFolder)

  const actions = [
    {
      name: 'Menu',
      onClick: toggleDrawer,
      icon: <MenuIcon/>,
      condition: isMobile || foldersDrawer
    },
    {
      name: 'Back',
      onClick: () => history.goBack(),
      icon: <KeyboardBackspaceIcon/>,
      condition: !isMobile || isHomePath
    },
    {
      name: 'Add folder',
      onClick: createFolder,
      icon: <CreateNewFolderIcon/>,
      condition: isMobile && !isHomePath
    },
    {
      name: 'Add note',
      onClick: handleCreateNote,
      disabled: !activeFolder,
      icon: <NoteAddIcon/>,
      condition: isMobile && isHomePath
    }
  ]

  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: foldersDrawer,
      })}
    >
      <Toolbar>
        {actions.map(item => {
          if (item.condition) return false
          return (
            <IconButton
              key={item.name}
              disabled={item.disabled}
              onClick={item.onClick}
              classes={{
                root: classes.iconBtn,
                disabled: classes.disabled
              }}
            >
              {item.icon}
            </IconButton>
          )
        })}
      </Toolbar>
    </AppBar>
  )
}

Header.propTypes = {
  activeFolder: PropTypes.string,
  createNote: PropTypes.func.isRequired,
  foldersDrawer: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  createFolder: PropTypes.func.isRequired
}

const mapStateToProps = (store) => ({
  activeFolder: store.activeFolder,
  foldersDrawer: store.ui.foldersDrawer
})

export default connect(mapStateToProps, { createFolder, createNote, toggleDrawer })(Header)
