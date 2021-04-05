import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'

// material-ui
import { makeStyles } from '@material-ui/core/styles'

// redux
import { connect } from 'react-redux'
import { toggleDrawer } from '../../redux/reducer'

// components
import NoteComponent from '../NoteComponent'
import NoteDescription from '../NoteComponent/NoteDescription'
import FoldersDrawer from '../FoldersDrawer'

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    display: 'flex',
    height: 'calc(100vh - 64px)',
    marginTop: 64,
    marginLeft: -300,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    '& > div, ul': {
      overflow: 'auto'
    },
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  folderList: {
    width: '250px',
  },
  notesList: {
    width: '300px',
    backgroundColor: '#cfe8fc'
  },
  notesDescription: {
    flexGrow: 1
  }
}))

const NotesBody = ({ foldersDrawer }) => {
  const classes = useStyles()

  return (
    <>
      <FoldersDrawer/>
      <div className={clsx(classes.content, {
        [classes.contentShift]: foldersDrawer,
      })}
      >
        <NoteComponent/>
        <NoteDescription/>
      </div>
    </>
  )
}

NotesBody.propTypes = {
  foldersDrawer: PropTypes.bool.isRequired,
}

const mapStateToProps = (store) => ({
  foldersDrawer: store.ui.foldersDrawer
})

export default connect(mapStateToProps, { toggleDrawer })(NotesBody)
