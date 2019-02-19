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

import NavBarCustom from './app/NavBarCustom';

import Drawer from '@material-ui/core/Drawer';

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

  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
  },
  mainFeaturedPost: {
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing.unit * 4,
  },
  mainFeaturedPostContent: {
    padding: `${theme.spacing.unit * 6}px`,
    [theme.breakpoints.up('md')]: {
      paddingRight: 0,
    },
  },
  mainGrid: {
    marginTop: theme.spacing.unit * 3,
  },
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  markdown: {
    padding: `${theme.spacing.unit * 3}px 0`,
  },
  sidebarAboutBox: {
    padding: theme.spacing.unit * 2,
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing.unit * 3,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing.unit * 8,
    padding: `${theme.spacing.unit * 6}px 0`,
  },
  root: {
    flexGrow: 1,
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
  id = null;
  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.props.closeSnackbar(this.id)
  }
  handleClick = () => {
    this.id = this.props.enqueueSnackbar('Item moved to recently deleted folder.', {
      variant: 'default',
      autoHideDuration: 8000,
      vertical: 'bottom',
      horizontal: 'center',
    }
    )
  }
  handleClickVariant = () => {
    this.props.enqueueSnackbar('This is a warning message!', { variant: "error" });
  };

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

          </div>

        </div>
      </HashRouter>
    );
  }
}

/*
https://github.com/mui-org/material-ui/blob/master/docs/src/pages/getting-started/page-layout-examples/blog/Blog.js
https://material-ui.com/getting-started/page-layout-examples/blog/

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

