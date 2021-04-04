import React from 'react'
import PropTypes from 'prop-types'

// redux
import { connect } from 'react-redux'

// component
import NoteItem from './NoteItem'

function NoteComponent({ folder }) {
  if (!folder) return false

  return (
    <>
      {folder.notes.map((item, index) => (<NoteItem key={item} id={item} index={index}/>))}
    </>
  )
}

NoteComponent.propTypes = {
  folder: PropTypes.object.isRequired
}

const mapStateToProps = (store) => {
  const { activeFolder } = store
  const folder = store.folders.byId[activeFolder]

  return {
    folder,
    activeFolder,
  }
}

export default connect(mapStateToProps)(NoteComponent)
