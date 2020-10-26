
import React from 'react';
import FancyBorder from './FancyBorder';
import Typography from '@material-ui/core/Typography';
class WelcomeDialog extends React.Component {
    /*
    renderChild = (childData, index) => {
        return React.createElement(
            this.props.component,
            {},
            childData
        )
    }*/
    render() {
        return (
            <FancyBorder color="Red" content={ <Typography variant="h4" gutterBottom>Component Typography</Typography>} >
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