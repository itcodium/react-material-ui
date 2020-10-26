
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from './FancyBorder.style.js';
class FancyBorder extends React.Component {
    static propTypes = {
        //component: PropTypes.element.isRequired,
        //children: PropTypes.element.isRequired
    }
    render() {
        const { classes } = this.props;
        return (
            <div className={classes['FancyBorder' + this.props.color]}>
                {this.props.children}
                <div className="FancyBorderBlue">
                    {this.props.content}
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(FancyBorder);