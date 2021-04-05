import React from 'react'
import PropTypes from 'prop-types'

// redux
import { connect } from 'react-redux'

// material-ui
import List from '@material-ui/core/List'
import { makeStyles } from '@material-ui/core/styles'
import NoteAddIcon from '@material-ui/icons/NoteAdd'

// component
import NoteItem from './NoteItem'
import StubComponent from '../StubComponent'

const useStyles = makeStyles(() => ({
  list: {
    padding: 10,
    height: '100%',
    width: '400px',
    backgroundColor: '#3C3C43'
  }
}))

const NoteComponent = ({ folder = {} }) => {
  const { notes = [] } = folder
  const classes = useStyles()

  return (
    <List className={classes.list}>
      {notes.length === 0 && (<StubComponent icon={<NoteAddIcon/>} text="Please, add note"/>)}
      {notes.map((item, index) => (<NoteItem key={item} id={item} index={index}/>))}
    </List>
  )
}

NoteComponent.propTypes = {
  folder: PropTypes.object.isRequired
}

const mapStateToProps = (store) => {
  const { activeFolder } = store

  return {
    folder: store.folders.byId[activeFolder]
  }
}

export default connect(mapStateToProps)(NoteComponent)
