import React from 'react'
import PropTypes from 'prop-types'

// material-ui
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'

// components
import FolderComponent from '../FolderComponent'

// redux
import { connect } from 'react-redux'
import { toggleDrawer } from '../../redux/reducer'

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 300,
    flexShrink: 0,
    backgroundColor: '#202122'
  },
  drawerPaper: {
    width: 300,
    backgroundColor: '#202122'
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    borderBottom: '1px solid grey',
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'space-between',
    '& h6, svg': {
      color: '#fff'
    }
  }
}))

const FoldersDrawer = ({ foldersDrawer, toggleDrawer }) => {
  const classes = useStyles()

  return (
    <Drawer
      className={classes.drawer}
      open={foldersDrawer}
      variant="persistent"
      anchor="left"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <Typography variant="h6">Notes</Typography>
        <IconButton onClick={toggleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <FolderComponent/>
    </Drawer>
  )
}

FoldersDrawer.propTypes = {
  foldersDrawer: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
}

const mapStateToProps = (store) => ({
  foldersDrawer: store.ui.foldersDrawer
})

export default connect(mapStateToProps, { toggleDrawer })(FoldersDrawer)
