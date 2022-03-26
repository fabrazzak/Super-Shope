import React from 'react';
import './Products.css'

const Products = (props) => {
    const {id,name,price,img,seller,ratings}=props.products;
 
    
            
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <h3 className='product-name'>{name}</h3>
            <h4 className='product-price'>Price : {price}</h4>
            <h4 className='product-seller'>Manufacturer : {seller}</h4>
            <h4 className='product-rating'>Rating : {ratings}</h4>
            </div>
        </div>
    );
};





    

export default Products;