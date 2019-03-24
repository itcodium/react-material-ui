
import React from 'react';
import Product from './Product';
import { withStyles } from '@material-ui/core/styles';
import styles from '../../../styles/styles';

class ProductList extends React.Component {

    render () {
        const { classes } = this.props;
        return (
            <div className={ classes.container }>
                <Product />
            </div>
        );
    }
}

export default (withStyles(styles)(ProductList))
