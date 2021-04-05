import React from 'react'
import PropTypes from 'prop-types'

// redux
import { connect } from 'react-redux'

// material-ui
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder'

// component
import FolderItem from './FolderItem/Index'
import StubComponent from '../StubComponent'

const useStyles = makeStyles(() => ({
  list: {
    height: '100%',
    backgroundColor: '#202122',
    padding: 10
  }
}))

const FolderComponent = ({ folders }) => {
  const classes = useStyles()

  return (
    <List className={classes.list}>
      {folders.length === 0 && (<StubComponent text="Please, add folder" icon={<CreateNewFolderIcon/>}/>)}
      {folders.map(item => (<FolderItem key={item} id={item} to={`/${item}/notes`}/>))}


    </List>
  )
}

FolderComponent.propTypes = {
  folders: PropTypes.array.isRequired
}

const mapStateToProps = (store) => ({
  folders: store.folders.allIds,
})

export default connect(mapStateToProps)(FolderComponent)
