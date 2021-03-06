import React, { useEffect, useState } from 'react';
import './Shope.css'

import Products from '../Products/Products';
import Cart from '../Cart/Cart';
import SelectProduct from '../SelectProduct';

const Shope = () => {
    const [products,setProducts]=useState([]);
    const [cart,setCart]=useState([]);
    const [addedCart,setAddedCart]=useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then( data => setProducts(data));
    },[]);
   

    const addToCart=(product)=>{
        
        let newCart=[];
        // console.log(product);
        if (cart.length===4){
            alert("Your four product seleted");
        }
        else{
 

            newCart=[...cart , product]
            setCart(newCart);

        }

    }

    const spineNow =(addedCarts)=>{
        const randomNumber= Math.floor(Math.random() * cart.length ) +1;
        for (const addedCart of addedCarts){
            if(parseFloat(addedCart.id)===parseFloat(randomNumber)){
                setAddedCart(addedCart);
            }
        }
    }
    const resetBtn =()=>{
        setAddedCart([]);
        setCart([]);
    }
   
    return (
        <div className='shope'>
            <div className='products'>
            {
                products.map(product=>
                     <Products
                     products={product}
                      key={product.id}
                      addToCart={addToCart}
                      ></Products>)
               }
              
            </div>
            <div className='order-summerys'>
                <div className='order-summery-wraper'>
                <h3 > Your selecte product</h3>
                {
                    cart.map(product=> <Cart cart={product} key={product.id}></Cart>)
                }
              <button className='cart-btn' onClick={()=>spineNow(cart)}>sprine now</button>
              <br /> <br />
              {
                    <SelectProduct addedCart={addedCart}></SelectProduct>
              }
              <button className='cart-btn' onClick={resetBtn}>Re-select now</button>

                </div>
               
            </div>
            
        </div>
    );
    };
    


export default Shope;