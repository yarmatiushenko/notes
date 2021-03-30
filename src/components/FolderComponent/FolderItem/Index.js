import React from 'react'
import PropTypes from 'prop-types'

// material-ui
import { makeStyles } from '@material-ui/core/styles'
import FolderOpenIcon from '@material-ui/icons/FolderOpen'

// redux
import { connect } from 'react-redux'
import { editItem, deleteItem, renameItem, setActiveItem } from '../../../redux/reducer'

// components
import ListItemComponent from '../../ListItemComponent'

const useStyles = makeStyles(() => ({
  listItem: {
    marginTop: 10,
    borderRadius: 6,
    cursor: 'pointer',
    border: '1px solid #000',
    backgroundColor: "#fff"
  },
  selected: {
    border: '1px solid transparent',
    backgroundColor: "#cfe8fc !important"
  }
}))

function FolderItem({ folder, activeFolder, editItem, deleteItem, renameItem, setActiveItem }) {
  const classes = useStyles()
  const { id, isEdit, name } = folder

  const editFolder = () => editItem(id, 'folders')
  const deleteFolder = () => deleteItem(id, 'folders')
  const renameFolder = (e) => renameItem(id, e.target.value)
  const setActiveFolder = () => setActiveItem(id, 'activeFolder')

  return (
    <ListItemComponent
      icon={<FolderOpenIcon/>}
      handleEditItem={editFolder}
      handleDeleteItem={deleteFolder}
      handleRenameItem={renameFolder}
      setActiveItem={setActiveFolder}
      selected={activeFolder === id}
      isEdit={isEdit}
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
  editItem: PropTypes.func.isRequired,
  renameItem: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  setActiveItem: PropTypes.func.isRequired
}

const mapDispatchToProps = {
  editItem,
  deleteItem,
  renameItem,
  setActiveItem
}

const mapStateToProps = (store, ownProps) => ({
  folder: store.folders.byId[ownProps.id],
  activeFolder: store.activeFolder
})

export default connect(mapStateToProps, mapDispatchToProps)(FolderItem)
