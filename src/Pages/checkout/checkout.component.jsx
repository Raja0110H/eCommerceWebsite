import React,{useState} from 'react'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import {
  EmptyCartMessage,
} from "../../components/cart-dropdown/cart-dropdown.styles";
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'
import CheckoutSummary from "../../Pages/checkout/checkout.summary.component"
import './checkout.styles.scss'
function CheckoutPage({ cartItems, subTotal }) {
  const [isDisabled,setIsDisabled] = useState(true)
  const salesTax = parseInt((subTotal * 0.15).toFixed(2));;
  const total = subTotal + salesTax;
 

  function validate(e) {
    const checkBox = document.getElementById("check-box").checked;
    if (checkBox && cartItems.length > 0) {
     setIsDisabled(false)
      console.log("false")
    
  
    }
    else if (
      (!checkBox && cartItems.length < 1) ||
      (!checkBox && cartItems.length >0)
    ) {
      setIsDisabled(true);
      console.log("true");
    }
  
  }

  
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Products</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))
      ) : (
        <EmptyCartMessage>Your Cart is empty</EmptyCartMessage>
      )}

      <div className="total">
        <CheckoutSummary
          subTotal={subTotal}
          total={total}
          salesTax={salesTax}
          cartItems={cartItems}
          isDisabled={isDisabled}
          validate={validate}
        />
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    subTotal: selectCartTotal
})


export default connect(mapStateToProps)(CheckoutPage)
