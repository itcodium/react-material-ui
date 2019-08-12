import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import compose from 'recompose/compose';
import styles from './FooterSiteLink.style.js';

class FooterSiteLink extends React.Component {
    render () {
        const { classes } = this.props;
        const social = ['GitHub', 'Twitter', 'Facebook'];
        return (
            <div>
                <Typography variant="h7" gutterBottom>
                    { this.props.title }
                </Typography>
                <ul className={ classes.ul } >
                    { social.map(url => (
                        <li className={ classes.li } key={ url }>
                            <Link href="#" variant="body1" color="textSecondary">
                                { url }
                            </Link>
                        </li>
                    )) }
                </ul>
            </div>
        );
    }
}

FooterSiteLink.propTypes = {
    classes: PropTypes.object.isRequired

};

export default compose(
    withStyles(styles),
)(FooterSiteLink);