import React,{useEffect} from 'react'
import StripeCheckout from 'react-stripe-checkout'
export default function StripeButton({ price, isDisabled }) {
    const label = <h3 style={{width:"180px", height:"150px"}}>Pay Now</h3>
    const priceForStripe = price * 100
    const publishableKey = `${process.env.REACT_APP_STRIPE_API_KEY}`;
    

    useEffect(() => {
   isDisabled = isDisabled;
})

    const onToken = token => {
        if (token) {
           console.log("payment sucessfull")
           
        }  
     
    }
      console.log(isDisabled);    
    
    return (
      <div
        style={{margin:"50px auto 0px 35% " , maxWidth:"100px"}}
      >
        <StripeCheckout
          label={label}
          name="RCH Clothing LLC."
          billingAddress
          shippingAddress
          image="https://svgshare.com/i/QaG.svg"
          description={`Your total is ${price}`}
          amount={priceForStripe}
          panelLabel="Pay Now"
          token={onToken}
          stripeKey={publishableKey}
          disabled={isDisabled}
        />
      </div>
    );
}
