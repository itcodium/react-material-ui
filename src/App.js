import React, { Component } from 'react';
import './App.css';
import SvgIcons from './components/svg_Icons'
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import SimpleSnackbar from './components/simpleSnackbar'
import { SnackbarProvider, withSnackbar } from 'notistack';


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
    return (
      <div className="App">
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
  enqueueSnackbar: PropTypes.func.isRequired,
};

const MyApp = withSnackbar(App);
function IntegrationNotistack() {
  return (
    <SnackbarProvider maxSnack={3}>
      <MyApp />
    </SnackbarProvider>
  );
}
export default IntegrationNotistack;
