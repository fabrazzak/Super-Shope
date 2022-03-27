import React from 'react';
import './SelectProduct.css'

const SelectProduct = (props) => {
    const {img,name,price}=props.addedCart;
    return (
<div className='cart'>
                <img className='selected-img' src={img}/>
                <p>  {name}</p>
                <p>  {price}</p>            
        </div>
    );
};

export default SelectProduct;