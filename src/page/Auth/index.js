import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import { useAdminContext } from '../../state'

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    width: '100%',
    backgroundColor: '#cfe8fc',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    padding: theme.spacing(3, 2),
    display: 'flex',
    flexDirection: 'column'
  },
  field: {
    width: 300
  },
  button: {
    width: 300,
    marginTop: 10,
  },
}));



const Auth = () => {
  const classes = useStyles();

  const {
    permissions,
    snackBar,
    actions: {
      login,
      handleChangePermissions,
      closeSnackBar,
    }
  } = useAdminContext();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Typography variant="h4" component="h4" align="center">
          Auth
        </Typography>
        <TextField
          id="outlined-login"
          label="Login"
          margin="normal"
          variant="outlined"
          className={classes.field}
          value={permissions.login}
          onChange={e => handleChangePermissions(e, 'login')}
        />
        <TextField
          id="outlined-password"
          label="Password"
          margin="normal"
          variant="outlined"
          type="password"
          className={classes.field}
          value={permissions.password}
          onChange={e => handleChangePermissions(e, 'password')}
        />
        <Button
          variant="outlined"
          color="primary"
          className={classes.button}
          size="large"
          onClick={login}
        >
          Login
        </Button>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          open={snackBar}
          autoHideDuration={6000}
          onClose={closeSnackBar}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">Password or login is incorrect</span>}
          action={[
            <IconButton
              key="close"
              aria-label="close"
              color="inherit"
              onClick={closeSnackBar}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </Paper>
    </div>
  )
};

export default Auth
