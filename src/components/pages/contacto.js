
import React from 'react';
import EnConstruccion from './en.construccion';
import { withStyles } from '@material-ui/core/styles';
import styles from '../../styles/styles';

class Contacto extends React.Component {

    render () {
        const { classes } = this.props;
        return (
            <div className={ classes.container }>
                <EnConstruccion></EnConstruccion>
            </div>
        );
    }
}

export default (withStyles(styles)(Contacto))
