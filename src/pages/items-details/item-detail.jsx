import React,{useState} from "react";
import { useLocation } from "react-router-dom"
import { addItem } from "../../redux/cart/cart-actions";
import CustomButton from "../../components/custum-button/CustumButton";
import { addItemToCart } from "../../redux/cart/cart-utils";

import ItemDetails from "../../components/item-details/ItemDetails";

export default function ItemDetailsPage(addItem) {
	const location = useLocation();

	const { name, price, image_url,id } = location.state;
	console.log(id)

	return (
		<ItemDetails key={id} item ={location.state}/>
	);
}
