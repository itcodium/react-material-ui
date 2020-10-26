
import React from 'react';
import FancyBorder from './FancyBorder';
import Typography from '@material-ui/core/Typography';
class WelcomeDialog extends React.Component {
    render() {
        return (
            <FancyBorder color="Red" panel={ <Typography variant="h4" gutterBottom>Component Typography</Typography>} >
            <h1 className="Dialog-title">
              Welcome
            </h1>
            <p className="Dialog-message">
              Thank you for visiting our spacecraft!
            </p>
          </FancyBorder>
        )
    }
}

export default WelcomeDialog;