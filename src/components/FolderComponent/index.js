import React from 'react'
import PropTypes from 'prop-types'

// redux
import { connect } from 'react-redux'

// component
import FolderItem from './FolderItem/Index'

function FolderComponent({ folders }) {
  return (
    <>
      {folders.map(item => (<FolderItem key={item} id={item}/>))}
    </>
  )
}

FolderComponent.propTypes = {
  folders: PropTypes.array.isRequired
}

const mapStateToProps = (store) => ({
  folders: store.folders.allIds,
})

export default connect(mapStateToProps)(FolderComponent)
