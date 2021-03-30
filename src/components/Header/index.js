import React from 'react'
import PropTypes from 'prop-types'

// material-ui
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder'

// redux
import { connect } from 'react-redux'
import { createFolder } from '../../redux/reducer'

const useStyles = makeStyles((theme) => ({
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
}))

function Header({createFolder}) {
  const classes = useStyles()

  const actions = [
    {
      name: 'Add folder',
      onClick: createFolder,
      icon: <CreateNewFolderIcon/>
    }
  ]

  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" noWrap>Notes</Typography>
        {actions.map(item => (
          <IconButton
            key={item.name}
            color="secondary"
            onClick={item.onClick}
          >
            {item.icon}
          </IconButton>
        ))}
      </Toolbar>
    </AppBar>
  )
}

Header.propTypes = {
  createFolder: PropTypes.func.isRequired
}

export default connect(null, {createFolder})(Header)
