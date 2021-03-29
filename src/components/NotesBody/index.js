import React from 'react'

// material-ui
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    height: 'calc(100vh - 64px)',
    marginTop: 64,
    '& div': {
      padding: 10
    }
  },
  folderList: {
    width: '300px',
  },
  notesList: {
    width: '300px',
    backgroundColor: "#cfe8fc"
  }
}))

export default function NotesBody() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.folderList} />
      <div className={classes.notesList} />
      <div className={classes.notesDescription} />
    </div>
  )
}
