
import React from 'react';
import Product from './Product';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import styles from './ProductList.style.js';
import Seed from './Seed.js';

class ProductList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
        };
        this.handleProductUpVote = this.handleProductUpVote.bind(this);
    }
    componentDidMount() {
        this.setState({ products: Seed.products });
    }

    handleProductUpVote = productId => {
        const nextProducts = this.state.products.map(product => {
            if (product.id === productId) {
                return Object.assign({}, product, {
                    votes: product.votes + 1,
                });
            } else {
                return product;
            }
        });
        this.setState({
            products: nextProducts,
        });
    }

    render() {
        const { classes } = this.props;
        const products = this.state.products.sort((a, b) => (
            a.id - b.id
        ));
        return (
            <div className={classes.container}  >
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    Album layout
                </Typography>

                <List className={classes.list}>
                    {products.map(product => (
                        <Product 
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            user={product.user}
                            description={product.description}
                            url={product.url}
                            votes={product.votes}
                            submitterAvatarUrl={product.submitterAvatarUrl}
                            productImageUrl={product.productImageUrl}
                            onVote={this.handleProductUpVote}
                        />
                    ))}
                </List>

            </div>
        )

    }
}

export default withStyles(styles)(ProductList);
