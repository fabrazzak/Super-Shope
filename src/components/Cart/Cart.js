import React from 'react';
import SelectProduct from '../SelectProduct';
import './Cart.css'

const Cart = (props) => {
    // console.log(props.cart);
    
    const {name,price,img}=props.cart;
    // const {name,price,img}=props.cart;

    
    return (
        <div className='cart'>
                <img className='product-img' src={img} alt="img" />
                <p> Price: {name}</p>
                <p> Price: {price}</p>            
        </div>
    );
};

export default Cart;