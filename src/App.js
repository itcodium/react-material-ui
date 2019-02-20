import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Header from './app/Header'
import SimpleSnackbar from './components/simpleSnackbar'
import ProductList from './components/chapter1/ProductList'
import withWidth from '@material-ui/core/withWidth';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { SnackbarProvider, withSnackbar } from 'notistack';
import compose from 'recompose/compose';

import { Route, HashRouter } from "react-router-dom";
import NavBarCustom from './app/NavBarCustom';

const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  grow: {
    flexGrow: 1,
  },
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
  render() {
    const { classes } = this.props;
    return (
      <HashRouter>
        <div className={classes.layout}>
          <Header></Header>
          <NavBarCustom></NavBarCustom>
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
            <h1>{this.props.width}</h1>
          </div>
        </div>
      </HashRouter>
    );
  }
}

/*
https://github.com/mui-org/material-ui/blob/master/docs/src/pages/getting-started/page-layout-examples/blog/Blog.js
https://material-ui.com/getting-started/page-layout-examples/blog/

*/

App.propTypes = {
  enqueueSnackbar: PropTypes.func.isRequired,
};
App.propTypes = {
  classes: PropTypes.object.isRequired,

};
App.propTypes = {
  width: PropTypes.string.isRequired,
};

const MyApp = withSnackbar(compose(
  withStyles(styles),
  withWidth(),
)(App));


function IntegrationNotistack() {
  return (
    <SnackbarProvider maxSnack={3}>
      <MyApp />
    </SnackbarProvider>
  );
}

export default IntegrationNotistack;
