import InitialState from './InitialState';
import * as types from './ActionTypes';

const Reducer = (state = InitialState, action) => {
    switch (action.type) {
        case types.SET_ALL_PRODUCTS: 
            return Object.assign({}, state, {
                products: action.products
            });
        case types.ADD_TO_CART: 
            return Object.assign({}, state, {
                cart: [...state.cart, action.item]
            }); 
        case types.CHANGE_QUANTITY: 
            return Object.assign({}, state, {
                cart: state.cart.map((product) => {
                    if(product.name !== action.item.name) {
                        return product;
                    }
                    return {
                        ...product,
                        quantity: action.quantity,
                        total: product.price * action.quantity
                    }
                }),
                cost: state.cart.reduce((a, b) => +a + +b.total)
            });
        case types.REMOVE_FROM_CART: 
            return Object.assign({}, state, {
                cart: state.cart.filter(item => item.name !== action.item.name)
            }); 
        case types.CALC_TOTAL_COST: 
            return Object.assign({}, state, {
                cost: action.total
            }); 
        default:
            return state
    }
}

export default Reducer;