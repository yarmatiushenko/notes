import React from 'react'
import PropTypes from 'prop-types'

// material-ui
import { makeStyles } from '@material-ui/core/styles'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'

const useStyles = makeStyles(() => ({
  root: {}
}))

const ListItemComponent = (props) => {
  const { primaryText, actions, listItemProps } = props
  const classes = useStyles()

  return (
    <ListItem {...listItemProps} className={classes.root}>
      <ListItemText
        primary={primaryText}
      />
      {actions && actions.map(item => (<ListItemIcon onClick={item.onClick}>{item.icon}</ListItemIcon>))}
    </ListItem>
  )
}

ListItemComponent.propTypes = {
  primaryText: PropTypes.string.isRequired,
  actions: PropTypes.array,
  listItemProps: PropTypes.object
}
