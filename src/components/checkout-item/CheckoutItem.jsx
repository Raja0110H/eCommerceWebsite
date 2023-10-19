import React from 'react';

import {connect} from 'react-redux';

import {clearItemFromCart, removeItem, addItem} from '../../redux/cart/cart-actions';
import {
    CheckoutItemContainer,
    ImageContainer,
    TextContainer,
    QuantityContainer,
    RemoveButtonContainer
  } from './checkout-item-styles';

const CheckoutItem = ({cartItem, dispatch}) => {
    const {name, price, quantity, image_url,size} = cartItem
    return (
    <CheckoutItemContainer>
        <ImageContainer>
            <img src={image_url} alt="item"/>
        </ImageContainer>
        <TextContainer><p style={{marginBottom:'20px'}}>{name}</p><p>({size})</p></TextContainer>
       
        <QuantityContainer>
            <span className="arrow" onClick={()=> dispatch(removeItem(cartItem))}>&#10094;</span>
            <span className="value">{quantity}</span>
            <span className="arrow" onClick={()=> dispatch(addItem(cartItem))}>&#10095;</span>
        </QuantityContainer>
        <TextContainer>{price}</TextContainer>
        <RemoveButtonContainer onClick={()=> dispatch(clearItemFromCart(cartItem))}>&#10005;</RemoveButtonContainer>
    </CheckoutItemContainer>)
};

export default connect()(CheckoutItem);