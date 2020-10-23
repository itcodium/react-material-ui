import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import withWidth from '@material-ui/core/withWidth';
import Grid from '@material-ui/core/Grid';
import { SnackbarProvider, withSnackbar } from 'notistack';
import compose from 'recompose/compose';

import { Route, HashRouter } from "react-router-dom";
import styles from './styles/styles';

import Header from './app/Header/Header'
import Footer from './app/Footer/Footer'

import Index from './components/pages/home/index'
import ProductList from './components/pages/products/ProductList'
import Contacto from './components/pages/contacto'

import Login from './components/pages/Login/Login'
import CivilPDF from './components/pages/rubros.pdf/civil'

import TimersDashboard from './modules/Timer/TimersDashboard'
import ReactCourse from './modules/ReactCourse/ReactCourse'
class App extends Component {
  render () {
    const { classes } = this.props;
    return (
      <HashRouter>
        <div>
          <header className={ classes.container }>
            <Header></Header>
          </header>
          <main className={ classes.layout }>

            <Grid container>
            <Grid item xs={ 12 } md={ 12 }>
                <Route key="1" exact path="/" component={ Index } />
                <Route key="12" path="/index" component={ Index } />
              </Grid>
              <Grid item xs={ 12 } md={ 12 } >
                <div className={ classes.container } >
                  <Route key="3" path="/React" component={ ReactCourse } />
                  <Route key="2" path="/ProductList" component={ ProductList } />
                  <Route key="7" path="/Contacto" component={ Contacto } />
                  <Route key="8" path="/products/Civil" component={ CivilPDF } />
                  <Route key="12" path="/Login" component={ Login } />
                  <Route key="13" path="/TimeLogging" component={ TimersDashboard } />
                </div>
              </Grid>
            </Grid>
          </main>
          <footer className={ classes.container }>
            <Footer></Footer>
          </footer>
        </div>
      </HashRouter >
    );
  }
}

/*
  



  Agregar Galeria:
  https://codepen.io/suez/pen/OjGQza
  https://github.com/mui-org/material-ui/blob/master/docs/src/pages/getting-started/page-layout-examples/blog/Blog.js
  https://material-ui.com/getting-started/page-layout-examples/blog/


  Esta ok:

  https://reactjsexample.com/responsive-and-flexible-carousel-component-with-thumbnail-support/


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
