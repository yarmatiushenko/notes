import React from 'react'
import clsx from 'clsx'

// material-ui
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
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
    backgroundColor: '#202122',
    flexShrink: 0,
  },
  drawerPaper: {
    backgroundColor: '#202122',
    width: 300,
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
      variant="persistent"
      anchor="left"
      classes={{
        paper: classes.drawerPaper,
      }}
      open={foldersDrawer}
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

const mapStateToProps = (store) => ({
  foldersDrawer: store.ui.foldersDrawer
})

export default connect(mapStateToProps, { toggleDrawer })(FoldersDrawer)
