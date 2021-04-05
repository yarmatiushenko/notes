import React from 'react'
import { Route, Switch } from 'react-router-dom'

// material-ui
import { makeStyles } from '@material-ui/core/styles'

// components
import FolderComponent from '../../FolderComponent'
import NoteComponent from '../../NoteComponent'
import NoteDescription from '../../NoteComponent/NoteDescription'

const useStyles = makeStyles(() => ({
  container: {
    flexGrow: 1,
    minHeight: 'calc(100vh - 54px)',
    marginTop: 54,
  }
}))

const MobileLayout = () => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <Switch>
        <Route exact path="/" component={FolderComponent}/>
        <Route path="/:id/notes" component={NoteComponent}/>
        <Route path="/description/:id" component={NoteDescription}/>
        <Route component={FolderComponent}/>
      </Switch>
    </div>
  )
}

export default MobileLayout
