import React, { useEffect, useState } from 'react';
import './Shope.css'

import Products from '../Products/Products';

const Shope = () => {
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then( data => setProducts(data));
    },[]);
   
    return (
        <div className='shopp'>
            <div className='products'>
            {
                products.map(product=>
                     <Products
                     products={product}
                      key={product.id}
                     
                     
                      ></Products>)
               }
              
            </div>
            <div className='summary'>
               
            </div>
            
        </div>
    );
    };
    


export default Shope;