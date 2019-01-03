import * as types from './ActionTypes';
import products from '../products';


export function setAllProducts() {
    return {
        type: types.SET_ALL_PRODUCTS,
        products
    }
};

export function addToCart(item) {
    return(dispatch, getState) => {
        // check if product exists in the cart
        let productExistsInCart = getState().cart.find(product => product.name === item.name);

        // if it does exist, simply increase the quantity
        if(productExistsInCart) {
            dispatch(changeQuantity(item, productExistsInCart.quantity + 1));
        }
        // otherwise add a new item to the cart
        else {
            const newItem = {
                name: item.name,
                price: item.price,
                quantity: 1,
                total: item.price
            }
            dispatch(addNewToCart(newItem))
        }
        dispatch(calcTotalCost())
    }
}

export function addNewToCart(item) {
    return {
        type: types.ADD_TO_CART,
        item
    }
};

export function removeFromCart(item) {
    return(dispatch) => {
        dispatch({ type: types.REMOVE_FROM_CART, item });
        dispatch(calcTotalCost())
    }
};

export function calcTotalCost() {
    return (dispatch, getState) => {
        const allCosts = getState().cart.map((item) => item.total);
        const total = allCosts.reduce((a, b) => +a + +b, 0);
        dispatch({ type: types.CALC_TOTAL_COST, total });
    }
}

export function changeQuantity(item, quantity) {
    return {
        type: types.CHANGE_QUANTITY,
        item, quantity
    }
};