import React,{useState} from "react";
import { useLocation } from "react-router-dom"
import { addItem } from "../../redux/cart/cart-actions";
import CustomButton from "../../components/custum-button/CustumButton";
import {connect} from 'react-redux';
import '../item-details/item-details.scss'

const  ItemDetails = ({item, addItem })=> {

	const location = useLocation();
    const [itemSize, setItemSize] = useState('')

    const Size = ['Small','Medium','Large', 'xxLarge', 'xxxLarge']



    
	return (
		<div style={{ display: "flex", justifyContent: "space-evenly" }} >
			<img src={item.image_url} />
			<div className="item-details-container">
				<p >{item.name}</p>
            
              
				<p>${item.price}</p>
				<label  htmlFor="size"> Size: </label>
                <br />
                
				<select name="size" id="size"  value={''} onChange={(e)=>{
                    item.size = e.target.value

                }}>
                    
                {Size.map((size) => (
              <option key={size} value={size}>{size}</option>
            ))}
				</select>
			</div>
			<div>
			<CustomButton onClick={()=> {
                 if(!item.hasOwnProperty('size')){
                    item.size = Size[0]
                }
               
                addItem(item)}} >Add to cart</CustomButton>
			</div>
		</div>
	);
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(ItemDetails);