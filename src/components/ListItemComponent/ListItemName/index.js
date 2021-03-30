import React from 'react'
import PropTypes from 'prop-types'

// material-ui
import { makeStyles } from '@material-ui/core/styles'
import ListItemText from '@material-ui/core/ListItemText'

const useStyles = makeStyles(() => ({
  input: {
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1,
    width: '120px',
    border: '1px solid #cfe8fc',
    borderRadius: '5px',
    marginRight: '5px',
    padding: '5px',
    boxShadow: 'none',
    outline: 'none',
    background: '#fff',
    pointerEvents: 'auto'
  }
}))

function ListItemName({ isEdit, initialValue, onChange, onBlur }) {
  const classes = useStyles()

  if (isEdit) {
    return (
      <input
        onBlur={onBlur}
        value={initialValue}
        className={classes.input}
        onChange={onChange}
      />
    )
  }

  return (
    <ListItemText primary={initialValue}/>
  )
}

ListItemName.propTypes = {
  isEdit: PropTypes.bool.isRequired,
  initialValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired
}

export default ListItemName
