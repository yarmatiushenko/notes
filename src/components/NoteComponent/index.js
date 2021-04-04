import React from 'react'
import PropTypes from 'prop-types'

// redux
import { connect } from 'react-redux'


// component
import NoteItem from './NoteItem'
import StubComponent from '../StubComponent'

const NoteComponent = ({ folder = {} }) => {
  const { notes = [] } = folder

  if (notes.length === 0) {
    return (
      <StubComponent text="List notes ..."/>
    )
  }

  return (
    <>
      {notes.map((item, index) => (<NoteItem key={item} id={item} index={index}/>))}
    </>
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
