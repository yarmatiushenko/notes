import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

// material-ui
import { makeStyles } from '@material-ui/core/styles'
import ListItemText from '@material-ui/core/ListItemText'
import useMediaQuery from '@material-ui/core/useMediaQuery'

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
  },
  listItemSecondary: {
    fontSize: 12
  },
  link: {
    textDecoration: 'none',
    color: 'inherit !important'
  }
}))

function ListItemName({ isEdit, initialValue, onChange, to, ...rest }) {
  const classes = useStyles()
  const isMobile = useMediaQuery('(max-width:800px)')

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

  if (isMobile) {
    return (
      <Link to={to} className={classes.link}>
        <ListItemText classes={{ secondary: classes.listItemSecondary }} primary={initialValue} {...rest}/>
      </Link>
    )
  }

  return (
    <ListItemText classes={{ secondary: classes.listItemSecondary }} primary={initialValue} {...rest}/>
  )
}

ListItemName.propTypes = {
  isEdit: PropTypes.bool.isRequired,
  initialValue: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default ListItemName
