import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart-actions";

import { CollectionItemContainer, CollectionFooterContainer, AddButton, BackgroundImage, NameContainer, PriceContainer } from "./collection-item-styles";
import { getItemhandler } from "../../Pages/items-details/item-detail";

const CollectionItem = ({ item, addItem }) => {


	const { name, price, image_url } = item;
	const history = useHistory();

	const navigateToItemDetailsPage = () => {
		let path = `/item-details/${name}`;
		history.push({pathname: path, state: item});
	};

	return (
		<CollectionItemContainer onClick={(e) =>{
		
			 navigateToItemDetailsPage()
			 }}>
			<BackgroundImage className="image" imageUrl={image_url} />
			<CollectionFooterContainer>
				<NameContainer>{name}</NameContainer>
				<PriceContainer>{price}</PriceContainer>
				{/* <button onClick={() => addItem(item)} inverted>
            Add to cart
        </button> */}
			</CollectionFooterContainer>
		</CollectionItemContainer>
	);
};

const mapDispatchToProps = (dispatch) => ({
	addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
