import React from 'react'
import PropTypes from 'prop-types'

// material-ui
import { makeStyles } from '@material-ui/core/styles'
import NoteIcon from '@material-ui/icons/Note'

// redux
import { connect } from 'react-redux'
import { deleteNote, renameItem, setActiveItem } from '../../../redux/reducer'

// components
import ListItemComponent from '../../ListItemComponent'

const useStyles = makeStyles(() => ({
  listItem: {
    marginTop: 10,
    borderRadius: 6,
    cursor: 'pointer',
    backgroundColor: '#D1D1D6',
    '&:hover': {
      backgroundColor: '#F1C40F !important',
      '& svg, span, p': {
        color: '#fff'
      }
    }
  },
  selected: {
    backgroundColor: '#F1C40F !important',
    '& svg, span, p': {
      color: '#fff'
    }
  }
}))

function NoteItem({ note, activeNote, index, activeFolder, deleteNote, renameItem, setActiveItem }) {
  const classes = useStyles()
  const { id, name, date } = note

  const deleteNotes = (e) => {
    e.stopPropagation()
    deleteNote(id, activeFolder, index)
  }

  const renameNote = (e) => {
    e.stopPropagation()
    renameItem(id, e.target.value, 'notes')
  }

  const setActiveNote = () => setActiveItem(id, 'activeNote')

  return (
    <ListItemComponent
      to={`/description/${id}`}
      icon={<NoteIcon/>}
      handleDeleteItem={deleteNotes}
      handleRenameItem={renameNote}
      setActiveItem={setActiveNote}
      selected={activeNote === id}
      primaryText={name}
      secondary={date}
      listItemProps={{
        classes: {
          root: classes.listItem,
          selected: classes.selected
        }
      }}
    />
  )
}

NoteItem.propTypes = {
  activeNote: PropTypes.string,
  note: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  deleteNote: PropTypes.func.isRequired,
  renameItem: PropTypes.func.isRequired,
  setActiveItem: PropTypes.func.isRequired,
  activeFolder: PropTypes.string.isRequired
}

const mapDispatchToProps = {
  deleteNote,
  renameItem,
  setActiveItem
}

const mapStateToProps = (store, ownProps) => ({
  note: store.notes.byId[ownProps.id],
  activeFolder: store.activeFolder,
  activeNote: store.activeNote
})

export default connect(mapStateToProps, mapDispatchToProps)(NoteItem)
