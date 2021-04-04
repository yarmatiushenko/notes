import React from 'react'
import PropTypes from 'prop-types'

// redux
import { connect } from 'react-redux'

// material-ui
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder'

// component
import FolderItem from './FolderItem/Index'
import StubComponent from '../StubComponent'

const FolderComponent = ({ folders }) => {
  // stub text
  if (folders.length === 0) {
    return (
      <StubComponent text="Please, add folder" icon={<CreateNewFolderIcon/>}/>
    )
  }

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
