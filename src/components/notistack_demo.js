/*
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import { SnackbarProvider, withSnackbar } from 'notistack';

class NotistackCustom extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: props.open };
  }
  handleClick = () => {
    this.props.enqueueSnackbar('I love snacks.');
  };

  handleClickVariant = variant => () => {
    this.props.enqueueSnackbar('This is a warning message!', { variant });
  };

  render () {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Button onClick={ this.handleClick }>Show snackbar</Button>
        <Button onClick={ this.handleClickVariant('warning') }>Show warning snackbar</Button>
      </React.Fragment>
    );
  }
}

NotistackCustom.propTypes = {
  enqueueSnackbar: PropTypes.func.isRequired,
};

const MyApp = withSnackbar(NotistackCustom);

function IntegrationNotistack () {
  return (
    <SnackbarProvider maxSnack={ 3 }>
      <MyApp />
    </SnackbarProvider>
  );
}


NotistackCustom.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default IntegrationNotistack;


*/