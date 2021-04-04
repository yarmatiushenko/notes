import React from 'react'
import PropTypes from 'prop-types'

// material-ui
import { makeStyles } from '@material-ui/core/styles'
import FolderOpenIcon from '@material-ui/icons/FolderOpen'

// redux
import { connect } from 'react-redux'
import { deleteItem, renameItem, setActiveItem } from '../../../redux/reducer'

// components
import ListItemComponent from '../../ListItemComponent'

const useStyles = makeStyles(() => ({
  listItem: {
    marginTop: 10,
    borderRadius: 6,
    cursor: 'pointer',
    border: '1px solid #000',
    backgroundColor: '#fff'
  },
  selected: {
    border: '1px solid transparent',
    backgroundColor: '#cfe8fc !important'
  }
}))

function FolderItem({ folder, activeFolder, deleteItem, renameItem, setActiveItem }) {
  const classes = useStyles()
  const { id, name } = folder
  const isSelected = activeFolder === id

  const deleteFolder = () => deleteItem(id)
  const renameFolder = (e) => renameItem(id, e.target.value)
  const setActiveFolder = () => setActiveItem(id, 'activeFolder')

  return (
    <ListItemComponent
      icon={<FolderOpenIcon/>}
      handleDeleteItem={deleteFolder}
      handleRenameItem={renameFolder}
      setActiveItem={setActiveFolder}
      selected={isSelected}
      primaryText={name}
      listItemProps={{
        classes: {
          root: classes.listItem,
          selected: classes.selected
        }
      }}
    />
  )
}

FolderItem.propTypes = {
  activeFolder: PropTypes.string,
  folder: PropTypes.object.isRequired,
  renameItem: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  setActiveItem: PropTypes.func.isRequired
}

const mapDispatchToProps = {
  deleteItem,
  renameItem,
  setActiveItem
}

const mapStateToProps = (store, ownProps) => ({
  folder: store.folders.byId[ownProps.id],
  activeFolder: store.activeFolder
})

export default connect(mapStateToProps, mapDispatchToProps)(FolderItem)
