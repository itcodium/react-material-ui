
import React from 'react';
import Product from './Product';
import ProductsData from './data/seed'


class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
        };
        this.handleProductUpVote = this.handleProductUpVote.bind(this);
    }
    componentDidMount() {
        this.setState({ products: ProductsData });
    }
    handleProductUpVote = (productId) => {
        const nextProducts = this.state.products.map((product) => {
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
        this.state.products.sort((a, b) => (
            b.votes - a.votes
        ));

        const productComponents = this.state.products.map((product) => (
            <div className='ui unstackable items'>
                <Product
                    key="0"
                    id={product.id}
                    title={product.title}
                    description={product.description}
                    url={product.url}
                    votes={product.votes}
                    onVote={this.handleProductUpVote}
                    submitterAvatarUrl={product.submitterAvatarUrl}
                    productImageUrl={product.productImageUrl}
                />
            </div>
        ));
        return (

            productComponents

        );
    }
}

export default ProductList;

