import React, { Component } from 'react';
import './App.css';
import SvgIcons from './components/svg_Icons'
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import SimpleSnackbar from './components/simpleSnackbar'
import { SnackbarProvider, withSnackbar } from 'notistack';


import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';



const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};


class App extends Component {
  id = null;
  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.props.closeSnackbar(this.id)
  };
  handleClick = () => {
    this.id = this.props.enqueueSnackbar('Item moved to recently deleted folder.', {
      variant: 'default',
      autoHideDuration: 8000
    })
  };
  handleClickVariant = () => {
    this.props.enqueueSnackbar('This is a warning message!', { variant: "error" });
  };

  render() {

    const { classes } = this.props;

    return (


      <div className="App">
       <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
        <header className="App-header">
          <p>Main</p>
          <SvgIcons></SvgIcons>
          <SimpleSnackbar></SimpleSnackbar>
          <Button onClick={this.handleClick}>Delete Folder</Button>
          <Button onClick={this.handleClickVariant}>Warning</Button>
        </header>
      </div>

    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

App.propTypes = {
  enqueueSnackbar: PropTypes.func.isRequired,
};

const MyApp = withSnackbar((withStyles(styles)(App)));
function IntegrationNotistack() {
  return (
    <SnackbarProvider maxSnack={3}>
      <MyApp />
    </SnackbarProvider>
  );
}
export default IntegrationNotistack;

