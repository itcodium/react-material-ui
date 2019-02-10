import React, { Component } from 'react';
import './App.css';
import SvgIcons from './components/svg_Icons'
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import SimpleSnackbar from './components/snackbars'
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

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
    var _this = this;
    this.id = this.props.enqueueSnackbar('Item moved to recently deleted folder.', {
      variant: 'default',
      maxSnack: 3,
      autoHideDuration: 8000,
      action: [<Button color="secondary" size="small">Undo</Button>, <IconButton
        key="close"
        aria-label="Close"
        color="inherit"
      >
        <CloseIcon />
      </IconButton>],
      onClickAction: _this.handleClose()
    })
  };
  handleClickVariant = variant => () => {
    // variant could be success, error, warning or info
    this.props.enqueueSnackbar('This is a warning message!', { variant: "success" });
  };


  render () {
    return (
      <div className="App">
        <header className="App-header">
          <p>Main</p>

          <SvgIcons></SvgIcons>
          <SimpleSnackbar></SimpleSnackbar>
          <React.Fragment>
            <Button onClick={ this.handleClick }>Delete Folder</Button>
          </React.Fragment>
        </header>
      </div>

    );
  }
}


App.propTypes = {
  enqueueSnackbar: PropTypes.func.isRequired,
};

const MyApp = withSnackbar(App);

function IntegrationNotistack () {
  return (
    <SnackbarProvider maxSnack={ 3 }>
      <MyApp />
    </SnackbarProvider>
  );
}
export default IntegrationNotistack;
