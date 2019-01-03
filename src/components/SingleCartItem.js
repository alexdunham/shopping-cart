import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import { Button } from './styles/Button';
import { Bold } from './styles/Typography';
import { ItemWrap } from './styles/List';

const ItemPart = styled.span`
    width: 100%;
    @media screen and (min-width: 600px){
        width: 50%;
    }
`;

class SingleCartItem extends Component {
    render() {
        return (
            <ItemWrap>
                <ItemPart><Bold>Name:</Bold> {this.props.name}</ItemPart>
                <ItemPart><Bold>Price:</Bold> ${this.props.price.toFixed(2)}</ItemPart>
                <ItemPart><Bold>Quantity:</Bold> {this.props.quantity}</ItemPart>
                <ItemPart><Bold>Total cost:</Bold> ${this.props.total.toFixed(2)}</ItemPart>
                <Button onClick={this.props.removeFromCart}>Remove from cart</Button>
            </ItemWrap>
        );
    }
}

SingleCartItem.propTypes = {
    name: PropTypes.string,
    price: PropTypes.number,
    removeFromCart: PropTypes.func,
    quantity: PropTypes.number,
    total: PropTypes.number
};

export default SingleCartItem;