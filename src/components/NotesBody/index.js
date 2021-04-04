import React from 'react'

// material-ui
import { makeStyles } from '@material-ui/core/styles'

// components
import FolderComponent from '../FolderComponent'
import NoteComponent from '../NoteComponent'
import NoteDescription from '../NoteComponent/NoteDescription'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    height: 'calc(100vh - 64px)',
    marginTop: 64,
    '& > div': {
      padding: 10
    }
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

const NotesBody = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.folderList}>
        <FolderComponent/>
      </div>
      <div className={classes.notesList}>
        <NoteComponent/>
      </div>
      <div className={classes.notesDescription}>
        <NoteDescription/>
      </div>
    </div>
  )
}

export default NotesBody
