import React, { useEffect, lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user-selectors";

import Header from "./components/header/Header";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user-actions";

import GlobalStyles from "./global-styles";
import Spinner from "./components/spinner/Spinner";
import ErrorBoundary from "./components/error-boundary/ErrorBoundary";
import ItemDetailsPage from "./pages/items-details/item-detail";

import HomePage from "./pages/homepage/Homepage";
import ShopPage from "./pages/shop/Shop";
import RegistrationPage from "./pages/account-registration/Register";
import CheckoutPage from "./pages/checkout/checkout";
import ContactPage from "./pages/contact/contact.component";

const App = ({ currentUser, setCurrentUser }) => {
	// let unsubscribeFromAuth = null;

	useEffect(() => {
		const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);
				userRef.onSnapshot((snapshot) => {
					setCurrentUser({
						currentUser: {
							id: snapshot.id,
							...snapshot.data(),
						},
					});
				});
			}
			setCurrentUser(userAuth);
		});

		return () => {
			// Close subscription from auth observable
			unsubscribeFromAuth();
		};
	}, []);

	return (
		<div className="App">
			<GlobalStyles />
			<Header />
			<Switch>
				<ErrorBoundary>
					<Suspense fallback={<Spinner />}>
						<Route exact path="/" component={HomePage} />
						<Route path="/shop" component={ShopPage} />
						<Route path="/item-details/:item" component={ItemDetailsPage} />
						<Route exact path="/checkout" component={CheckoutPage} />
						<Route exact path="/contact" component={ContactPage} />
						<Route exact path="/register" render={() => (currentUser ? <Redirect to="/" /> : <RegistrationPage />)} />
					</Suspense>
				</ErrorBoundary>
			</Switch>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
