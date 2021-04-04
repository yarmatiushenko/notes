import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

// material-ui
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
    width: '100%',
    height: '100%'
  },
  container: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    textAlign: 'center',
    transform: 'translate(-50%, -50%)',
    '& svg': {
      color: '#3f51b5',
      width: 50,
      height: 50
    },
    '& p, span': {
      fontSize: 20,
      color: '#3f51b5',
    }
  }
}))

const StubComponent = ({ icon, text, containerClassName }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={clsx(classes.container, containerClassName)}>
        {icon}
        <Typography>{text}</Typography>
      </div>
    </div>
  )
}

StubComponent.propTypes = {
  icon: PropTypes.object,
  text: PropTypes.string.isRequired,
  containerClassName: PropTypes.object
}

export default StubComponent
