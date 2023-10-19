import React from 'react'
import { CartItemContainer, ItemDetailsContainer, NameSpanner, QuantitySpanner, ImageHolder } from "./cart-item.styles";

function CartItem({ item: { imageUrl, price, name, quantity } }) {
    
    return (
      <CartItemContainer>
        <ImageHolder src={imageUrl} alt={name} />
        <ItemDetailsContainer>
          <NameSpanner>{name}</NameSpanner>
          <QuantitySpanner> Quantity:  {quantity}x </QuantitySpanner>
          <QuantitySpanner>${price}</QuantitySpanner>
        </ItemDetailsContainer>
      </CartItemContainer>
    );
}

export default CartItem
