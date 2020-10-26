
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from './FancyBorder.style.js';
class FancyBorder extends React.Component {
    static propTypes = {
        panel: PropTypes.element.isRequired,
    }
    render() {
        const { classes } = this.props;
        return (
            <div>
                <div className={classes['FancyBorder' + this.props.color]}>
                    {this.props.children}

                </div>
                <div className={classes['FancyBorderBlue']}>
                    {this.props.panel}
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(FancyBorder);