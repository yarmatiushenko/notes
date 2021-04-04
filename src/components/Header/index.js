import React from 'react'
import PropTypes from 'prop-types'

// material-ui
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder'
import NoteAddIcon from '@material-ui/icons/NoteAdd';
// redux
import { connect } from 'react-redux'
import { createFolder, createNote } from '../../redux/reducer'

const useStyles = makeStyles((theme) => ({
  iconBtn: {
    '& svg': {
      color: '#fff'
    }
  }
}))

function Header({ createFolder, createNote, activeFolder }) {
  const classes = useStyles()

  const handleCreateNote = () => {
    console.log('click')
    createNote(activeFolder)
  }
  const actions = [
    {
      name: 'Add folder',
      onClick: createFolder,
      icon: <CreateNewFolderIcon/>
    },
    {
      name: 'Add note',
      onClick: handleCreateNote,
      disabled: !activeFolder,
      icon: <NoteAddIcon/>
    }
  ]

  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" noWrap>Notes</Typography>
        {actions.map(item => (
          <IconButton
            key={item.name}
            disabled={item.disabled}
            onClick={item.onClick}
            className={classes.iconBtn}
          >
            {item.icon}
          </IconButton>
        ))}
      </Toolbar>
    </AppBar>
  )
}

Header.propTypes = {
  activeFolder: PropTypes.string,
  createFolder: PropTypes.func.isRequired
}

const mapStateToProps = (store) => ({
  activeFolder: store.activeFolder
})

export default connect(mapStateToProps, { createFolder, createNote })(Header)
