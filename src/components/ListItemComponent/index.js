import React, { useState } from 'react'
import PropTypes from 'prop-types'

// material-ui
import { makeStyles } from '@material-ui/core/styles'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import IconButton from '@material-ui/core/IconButton'

// icons
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import CloseIcon from '@material-ui/icons/Close'

// components
import ListItemName from './ListItemName'
import { ClickAwayListener } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  icon: {
    minWidth: 20,
    marginRight: 10,
    fontSize: '1rem',
  },
  iconBtn: {
    fontSize: '1rem',
    padding: 10,
    '& svg': {
      fontSize: '1rem'
    }
  }
}))

const ListItemComponent = (props) => {
  const { primaryText, icon, selected, listItemProps, handleEditItem,
    handleDeleteItem, handleRenameItem, setActiveItem, ...rest } = props
  const [isEdit, setEdit] = useState(false)

  const openEditMode = () => setEdit(true)
  const closeEditMode = () => setEdit(false)
  const classes = useStyles()
  console.log('render')
  const actions = [
    {
      label: 'Rename',
      icon: <EditIcon/>,
      onClick: openEditMode,
      condition: isEdit
    },
    {
      label: 'Delete',
      icon: <DeleteIcon/>,
      onClick: handleDeleteItem,
      condition: isEdit
    },
    {
      label: 'Cancel',
      icon: <CloseIcon/>,
      onClick: closeEditMode,
      condition: !isEdit
    },
  ]

  return (
    <ClickAwayListener onClickAway={closeEditMode}>
      <ListItem
        selected={selected}
        className={classes.root}
        onClick={setActiveItem}
        {...listItemProps}
      >
        {icon && (<ListItemIcon className={classes.icon}>{icon}</ListItemIcon>)}

        <ListItemName
          isEdit={isEdit}
          initialValue={primaryText}
          onBlur={handleEditItem}
          onChange={handleRenameItem}
          {...rest}
        />

        {actions.map(item => {
          if (item.condition) return false
          return (
            <IconButton
              key={item.label}
              className={classes.iconBtn}
              onClick={item.onClick}
            >
              {item.icon}
            </IconButton>)
        })}
      </ListItem>
    </ClickAwayListener>
  )
}

ListItemComponent.propTypes = {
  icon: PropTypes.object,
  listItemProps: PropTypes.object,
  isEdit: PropTypes.bool.isRequired,
  selected: PropTypes.bool.isRequired,
  setActiveItem: PropTypes.func.isRequired,
  primaryText: PropTypes.string.isRequired,
  handleEditItem: PropTypes.func.isRequired,
  handleRenameItem: PropTypes.func.isRequired,
  handleDeleteItem: PropTypes.func.isRequired
}

export default ListItemComponent
