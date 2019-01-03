import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../store/Actions';
import { List } from './styles/List';
import { Bold } from './styles/Typography';
import SingleCartItem from './SingleCartItem';

class Cart extends Component {
    removeFromCart = (item) => {
        this.props.removeFromCart(item);
    }
    render() {
        return (
            <React.Fragment>
                <h2>My Cart</h2>
                {
                    this.props.cart.length > 0 ? (
                        <React.Fragment>
                            <List>
                                {
                                    this.props.cart.map((item) => {
                                        return <SingleCartItem key={item.name} name={item.name} price={item.price} quantity={item.quantity} total={item.total} removeFromCart={() => this.removeFromCart(item)}/>
                                    })
                                }       
                            </List>
                            <p><Bold>Total:</Bold> ${this.props.cost.toFixed(2)}</p>
                        </React.Fragment>
                    ) : (
                        <p>There are no products in your cart.</p>
                    )
                }
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    cart: state.cart,
    cost: state.cost
});

const mapDispatchToProps = (dispatch) => ({
    removeFromCart: (item) => dispatch(removeFromCart(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);