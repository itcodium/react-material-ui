import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Header from './app/Header'
import Footer from './app/Footer'

import QuienesSomos from './components/paginas/quienes_somos'
import ProductList from './components/chapter1/ProductList'
import withWidth from '@material-ui/core/withWidth';
import Grid from '@material-ui/core/Grid';
import { SnackbarProvider, withSnackbar } from 'notistack';
import compose from 'recompose/compose';

import { Route, HashRouter } from "react-router-dom";
import styles from './common/styles';

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <HashRouter>
        <div className={classes.layout}>
          <Header></Header>
          <div className={classes.root}>
            <Grid container spacing={0}>
              <Grid item xs={12} className={classes.paper} >
                <Route exact path="/" component={QuienesSomos} />
                <Route path="/ProductList" component={ProductList} />
                <Route path="/QuienesSomos" component={QuienesSomos} />
              </Grid>
            </Grid>
          </div>
          <Footer></Footer>
        </div>
      </HashRouter>
    );
  }
}

/*
https://github.com/mui-org/material-ui/blob/master/docs/src/pages/getting-started/page-layout-examples/blog/Blog.js
https://material-ui.com/getting-started/page-layout-examples/blog/
  <h1>{ this.props.width }</h1>
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
