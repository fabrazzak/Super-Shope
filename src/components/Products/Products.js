import React from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping,faCartPlus} from '@fortawesome/free-solid-svg-icons'

import './Products.css'

const Products = (props) => {
    const {id,name,price,img,seller,ratings}=props.products;
    const addToCart=props.addToCart;
 
    
            
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <h3 className='product-name'>{name}</h3>
            <h4 className='product-price'>Price : {price}</h4>
            <h4 className='product-seller'>Manufacturer : {seller}</h4>
            <h4 className='product-rating'>Rating : {ratings}</h4>
            <button className="btn-cart" onClick={()=> addToCart(props.products)}> Add to cart <span className='cart-icon'><FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon></span></button>
            </div>
        </div>
    );
};





    

export default Products;