import React, { useState } from 'react'
import PropTypes from 'prop-types'

// redux
import { connect } from 'react-redux'
import { changeDescription } from '../../../redux/reducer'

// material-ui
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    padding: 10,
    '@media only screen and (max-width: 800px)': {
      height: '100%'
    }
  },
  textArea: {
    display: 'block',
    height: '100%',
    width: '100%',
    outline: 'none',
    border: 'none',
    '&:placeholder': {
      fontSize: 16,
      color: '#95A5A6'
    }
  },
  description: {
    fontSize: 16,
    whiteSpace: 'pre-wrap',
    color: '#95A5A6'
  }
}))

const NoteDescription = ({ activeNote, notes, changeDescription }) => {
  const [edit, setEdit] = useState(false)
  const note = notes[activeNote] || {}
  const classes = useStyles()

  const handleEditNote = () => {
    if (!activeNote) return false
    return setEdit(true)
  }

  const closeEditMode = () => setEdit(false)
  const changeNoteDescription = (e) => changeDescription(note.id, e.target.value)

  const textArea = (
    <textarea
      onChange={changeNoteDescription}
      placeholder="Add note description"
      className={classes.textArea}
      value={note.description}
    />
  )

  const span = (<Typography className={classes.description}>{note.description || 'Add note description'}</Typography>)
  const content = edit ? textArea : span

  return (
    <div
      className={classes.root}
      onClick={handleEditNote}
      onBlur={closeEditMode}
    >
      {content}
    </div>
  )
}

NoteDescription.propTypes = {
  notes: PropTypes.object,
  activeNote: PropTypes.string,
  changeDescription: PropTypes.func.isRequired
}

const mapStateToProps = (store) => ({
  activeNote: store.activeNote,
  notes: store.notes.byId
})

export default connect(mapStateToProps, { changeDescription })(NoteDescription)
