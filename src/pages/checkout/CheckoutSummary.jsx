import React from "react";
import StripeButton from "../../components/stripe-button/stripe-button.component";
import "./checkout.styles.scss";

class CheckoutSummary extends React.Component {
	render() {
		return (
			<div>
				<div className="total-amount">
					{<p>Order Summary</p>}
					<div className="sub-total">
						{" "}
						<p>Subtotal: </p>
						<p>${this.props.subTotal}.00 </p>
					</div>
					<div className="sub-total">
						{" "}
						<p>Estimated Shipping: </p>
						<p>free </p>
					</div>
					<div className="sub-total">
						{" "}
						<p>Discount: </p>
						<p>$0.00 </p>
					</div>
					<div className="sub-total">
						{" "}
						<p>Sales Tax: </p>
						<p>${this.props.salesTax}.00 </p>
					</div>
					<hr />
					<div className="sub-total">
						{" "}
						<p>Total: </p>
						<p>${this.props.total}.00 </p>
					</div>
					<div className="discount-info">
						<p>Spent over $200 and get 20% discount on you total </p>
					</div>

					<div className="term-and-conditions">
						<p>
							<input type="checkbox" onChange={this.props.validate} id="check-box" value="1" /> I confirm that I have read and agreed to the
							<a href="www.google.com"> Terms & Conditions</a>
						</p>
           
						<StripeButton   price={this.props.total} isDisabled={this.props.isDisabled} />
					</div>
				</div>
				<h2 style={{ fontSize: "20px", marginTop: "8rem" }}> </h2> Testing interactively:{" "}
				<h2
					style={{
						display: "inline-flex",
						color: "red",
						fontSize: "30px",
					}}
				>
					*
				</h2>
				<p style={{ fontSize: "12px", marginTop: "1rem" }}>
					When testing interactively, use a card number, such as 4242 4242 4242 4242. Enter the card number in the Dashboard or in any payment form. Use a valid future date, such
					as 12/34. Use any three-digit CVC (four digits for American Express cards). Use any value you like for other form fields.
				</p>
				<br />
			</div>
		);
	}
}

export default CheckoutSummary;
