import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

// material-ui
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder'
import NoteAddIcon from '@material-ui/icons/NoteAdd'
import MenuIcon from '@material-ui/icons/Menu'

// redux
import { connect } from 'react-redux'
import { createFolder, createNote, toggleDrawer } from '../../redux/reducer'

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
    marginLeft: 300,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
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

  const handleCreateNote = () => {
    createNote(activeFolder)
  }

  const actions = [
    {
      name: 'Menu',
      onClick: toggleDrawer,
      icon: <MenuIcon/>,
      condition: foldersDrawer
    },
    {
      name: 'Add folder',
      onClick: createFolder,
      icon: <CreateNewFolderIcon/>,
      condition: !foldersDrawer
    },
    {
      name: 'Add note',
      onClick: handleCreateNote,
      disabled: !activeFolder,
      icon: <NoteAddIcon/>
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
  foldersDrawer: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  createFolder: PropTypes.func.isRequired
}

const mapStateToProps = (store) => ({
  activeFolder: store.activeFolder,
  foldersDrawer: store.ui.foldersDrawer
})

export default connect(mapStateToProps, { createFolder, createNote, toggleDrawer })(Header)
