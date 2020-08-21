
import React from 'react';
import Product from './Product';
import List from '@material-ui/core/List';
import { withStyles } from '@material-ui/core/styles';
import styles from './ProductList.style.js';
class ProductList extends React.Component {

    render() {
        const { classes } = this.props;
        return (
            <List className={classes.root}>
                <Product />
            </List>
        );
    }
}

export default withStyles(styles)(ProductList);