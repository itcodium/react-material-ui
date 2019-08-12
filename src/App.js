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

import Header from './app/Header/Header'
import Footer from './app/Footer/Footer'

import Index from './components/pages/home/index'
import ProductList from './components/pages/products/ProductList'
import Gestion from './components/pages/gestion'
import Proveedores from './components/pages/proveedores'
import Trabajo from './components/pages/trabajo'
import Servicios from './components/pages/servicios'
import Contacto from './components/pages/contacto'

import CivilPDF from './components/pages/rubros.pdf/civil'
import ElectricoPDF from './components/pages/rubros.pdf/electrico'
import InstrumentacionPDF from './components/pages/rubros.pdf/instrumentacion'
import MecanicoPDF from './components/pages/rubros.pdf/mecanico'


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
            <Grid container    >
              <Grid item xs={ 12 } md={ 12 }>
                <Route exact path="/" component={ Index } />
                <Route path="/ProductList" component={ ProductList } />
                <Route path="/Gestion" component={ Gestion } />
                <Route path="/Proveedores" component={ Proveedores } />
                <Route path="/Trabajo" component={ Trabajo } />
                <Route path="/Servicios" component={ Servicios } />
                <Route path="/Contactenos" component={ Contacto } />
                <Route path="/products/Civil" component={ CivilPDF } />
                <Route path="/products/Electrico" component={ ElectricoPDF } />
                <Route path="/products/Instrumentacion" component={ InstrumentacionPDF } />
                <Route path="/products/Mecanico" component={ MecanicoPDF } />
                <Route path="/index" component={ Index } />
              </Grid>
            </Grid>
          </main>
          <footer className={ classes.container }>
            <Footer></Footer>
          </footer>
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
