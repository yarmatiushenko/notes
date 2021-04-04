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
    height: '100%'
  },
  textArea: {
    display: 'block',
    height: '100%',
    width: '100%',
    outline: 'none',
    border: 'none'
  },
  subContainer: {
    position: 'relative',
    width: '100%',
    height: '100%'
  },
  subText: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }
}))

function NoteDescription({ activeNote, notes, changeDescription }) {
  const [edit, setEdit] = useState(false)
  const note = notes[activeNote]
  const classes = useStyles()

  if (!activeNote) {
    return (
      <div className={classes.subContainer}>
        <Typography className={classes.subText}>Please, select note</Typography>
      </div>
    )
  }

  const handleEditNote = () => setEdit(true)
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

  const span = (<Typography>{note.description || 'Add note description'}</Typography>)
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
  notes: PropTypes.array.isRequired,
  activeNote: PropTypes.string,
  changeDescription: PropTypes.func.isRequired
}

const mapStateToProps = (store) => ({
  activeNote: store.activeNote,
  notes: store.notes.byId
})

export default connect(mapStateToProps, { changeDescription })(NoteDescription)
