import React, { useState } from 'react'
import PropTypes from 'prop-types'

// html editor
import { Editor } from 'react-draft-wysiwyg'
import { convertToRaw } from 'draft-js'
import draftToHtml from 'draftjs-to-html'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

// redux
import { connect } from 'react-redux'
import { changeDescription } from '../../../redux/reducer'

// material-ui
import { makeStyles } from '@material-ui/core/styles'

// components
import StubComponent from '../../StubComponent'

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
  },
  stubText: {
    cursor: 'pointer',
    '& p, span': {
      fontSize: 20,
      color: '#000',
    }
  }
}))

const NoteDescription = ({ activeNote, notes, changeDescription }) => {
  const note = notes[activeNote] || {}
  const classes = useStyles()
  const [editMode, setEditMode] = useState(false)

  //
  const isDescription = note.description ? note.description.getCurrentContent().hasText() : false

  const changeNoteDescription = (value) => changeDescription(note.id, value)
  const openEditMode = () => {
    if (!activeNote) return false
    return setEditMode(true)
  }
  const closeEditMode = () => setEditMode(false)

  if (!isDescription && !editMode) {
    return (
      <StubComponent onClick={openEditMode} text="Select note" containerClassName={classes.stubText}/>
    )
  }

  const htmlContent = draftToHtml(convertToRaw(note.description.getCurrentContent()))

  return (
    <div
      onClick={openEditMode}
      onBlur={closeEditMode}
      className={classes.root}
    >
      {editMode ? (<Editor
        editorState={note.description}
        placeholder="Writing text"
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={changeNoteDescription}
      />) : <div dangerouslySetInnerHTML={{ __html: htmlContent }} />}
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
