import types from './cart-types';
import {addItemToCart, removeItemFromCart} from './cart-utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
   
    
  
    switch (action.type) {
        case types.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        case types.ADD_ITEM:
           console.log(state.cartItems ,'payload');
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            };
        case types.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
                
            }
        case types.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            };
        default:
            return state;
    }
};

export default cartReducer;