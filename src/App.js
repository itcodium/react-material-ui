import React, { Component } from 'react';
import './App.css';
import SvgIcons from './components/svg_Icons'
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/core/styles';
import Header from './app/Header'
import SimpleSnackbar from './components/simpleSnackbar'
import ProductList from './components/chapter1/ProductList'

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { SnackbarProvider, withSnackbar } from 'notistack';



import { Route, NavLink, HashRouter } from "react-router-dom";


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});


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

      <HashRouter>
        <div className="App">
  
          <Header></Header>
          <div className={classes.root}>
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <Route exact path="/" component={SimpleSnackbar} />
                  <Route path="/ProductList" component={ProductList} />
                </Paper>
              </Grid>
            </Grid>
          </div>

          <div className="content">

          </div>
        </div>
      </HashRouter>
    );
  }
}

/*

            <SvgIcons></SvgIcons>
            <div>
              <h1>Popular Products</h1>
              <ProductList></ProductList>
            </div>
            <SimpleSnackbar></SimpleSnackbar>
            <Button onClick={this.handleClick}>Delete Folder</Button>
            <Button onClick={this.handleClickVariant}>Warning</Button>

*/

App.propTypes = {
  enqueueSnackbar: PropTypes.func.isRequired,
};
App.propTypes = {
  classes: PropTypes.object.isRequired,
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

