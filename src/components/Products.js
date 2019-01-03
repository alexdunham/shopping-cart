import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../store/Actions';
import SingleProduct from './SingleProduct';
import { List } from './styles/List';

class Products extends Component {
    addToCart = (item) => {
        this.props.addToCart(item, 1);
    }
    render() {
        return (
            <React.Fragment>
                <h2>Products</h2>
                <List>
                    {
                        this.props.products.map((product) => {
                            return <SingleProduct key={product.name} name={product.name} price={product.price} addToCart={() => this.addToCart(product)}/>
                        })
                    }       
                </List>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    products: state.products
});

const mapDispatchToProps = (dispatch) => ({
    addToCart: (item, quantity) => dispatch(addToCart(item, quantity))
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);