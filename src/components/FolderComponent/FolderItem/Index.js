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
    backgroundColor: '#E6E6E6',
    '&:hover': {
      backgroundColor: '#fff !important'
    }
  },
  selected: {
    backgroundColor: '#fff !important'
  }
}))

function FolderItem({ folder, activeFolder, deleteItem, renameItem, setActiveItem, to }) {
  const classes = useStyles()
  const { id, name } = folder
  const isSelected = activeFolder === id

  const deleteFolder = (e) => {
    e.stopPropagation()
    deleteItem(id)
  }

  const renameFolder = (e) => {
    e.stopPropagation()
    renameItem(id, e.target.value)
  }
  const setActiveFolder = () => setActiveItem(id, 'activeFolder')

  return (
    <ListItemComponent
      to={to}
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
  to: PropTypes.string.isRequired,
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
