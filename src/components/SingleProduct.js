import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import { Button } from './styles/Button';
import { ItemWrap } from './styles/List';

const ItemName = styled.span`
    font-weight: bold;
    width: 100%;
    @media screen and (min-width: 600px){
        width: 30%;
    }
`;

const ItemPrice = styled.span`
    width: 100%;
    @media screen and (min-width: 600px){
        width: 30%;
    }
`;

class SingleProduct extends Component {
    render() {
        return (
            <ItemWrap>
                <ItemName>{this.props.name}</ItemName>
                <ItemPrice>${this.props.price.toFixed(2)}</ItemPrice>
                <Button onClick={this.props.addToCart}>Add to cart</Button>
            </ItemWrap>
        );
    }
}

SingleProduct.propTypes = {
    name: PropTypes.string,
    price: PropTypes.number,
    addToCart: PropTypes.func
};

export default SingleProduct