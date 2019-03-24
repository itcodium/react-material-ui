import React, { Component } from 'react';
import './styles/App.css';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import withWidth from '@material-ui/core/withWidth';
import Grid from '@material-ui/core/Grid';
import { SnackbarProvider, withSnackbar } from 'notistack';
import compose from 'recompose/compose';

import { Route, HashRouter } from "react-router-dom";
import styles from './styles/styles';

import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Index from './components/pages/home/index'
import ProductList from './components/pages/products/ProductList'

import Paper from '@material-ui/core/Paper';
class App extends Component {
  render () {
    const { classes } = this.props;
    return (
      <HashRouter>
        <div className={ classes.root }>
          <div className={ classes.container }>
            <Header ></Header>
          </div>

          <Grid container spacing={ 0 }>
            <Grid item xs={ 12 } sm={ 24 }>
              <Route exact path="/" component={ Index } />
              <Route path="/ProductList" component={ ProductList } />
              <Route path="/index" component={ Index } />
            </Grid>
          </Grid>
          <Footer></Footer>
        </div>
      </HashRouter>
    );
  }
}

/*


  Agregar Galeria:
  https://codepen.io/suez/pen/OjGQza
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


function IntegrationNotistack () {
  return (
    <SnackbarProvider maxSnack={ 3 }>
      <MyApp />
    </SnackbarProvider>
  );
}

export default IntegrationNotistack;
