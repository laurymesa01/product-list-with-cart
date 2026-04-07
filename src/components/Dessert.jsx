import React from 'react'
import { useContext } from "react";

import { CartContext } from "../context/CartContext";

import addToCartSvg from "../../assets/images/icon-add-to-cart.svg";


function Dessert({dessert}) {

  const { addToCart, cart, removeFromCart } = useContext(CartContext);
  const dessertIsInCart = cart.find(item => item.id === dessert.id);
  

  const formato = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  
  return (
    <section>
      <div className='relative mb-8 '>
        <picture>
          <source media="(min-width: 1024px)" srcSet={dessert.image.desktop} />
          <source media="(min-width: 768px)" srcSet={dessert.image.tablet} />
          <img src={dessert.image.mobile} alt={dessert.name} className='rounded-md w-full object-cover'/>
        </picture>
        {!dessertIsInCart ? ( 
          <button 
          className='add-to-cart-btn absolute left-1/2 bottom-0 translate-y-1/2 -translate-x-1/2 w-max whitespace-nowrap group transition cursor-pointer' 
          onClick={() => addToCart(dessert)}>
            <img src={addToCartSvg} alt="" className='h-5 w-5'/>
            <span className='text-preset-4-bold text-rose-900 group-hover:text-red transition'>Add to cart</span>
          </button>
        ): (
          <button className='cart-quantity absolute left-1/2 bottom-0 translate-y-1/2 -translate-x-1/2  whitespace-nowrap transition'>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" viewBox="0 0 10 10" className='border rounded-full border-white p-0.5 cursor-pointer'  onClick={() => addToCart(dessert)}>
              <path fill="#fff" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/>
            </svg>
            <span className='text-preset-4-bold text-white'>{cart.find(item => item.id === dessert.id)?.quantity || 0}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none" viewBox="0 0 10 2" className='border rounded-full border-white cursor-pointer'  onClick={() => removeFromCart(dessert.id)}>
              <path fill="#fff" d="M0 .375h10v1.25H0V.375Z"/>
            </svg>
          </button>
        )}

      </div>

      <p className='text-preset-4 text-rose-500 mb-1'>{dessert.category}</p>
      <p className='text-preset-3 text-rose-900 mb-1'>{dessert.name}</p>
      <p className='text-preset-3 text-red'>{formato.format(dessert.price)}</p>
    </section>
  )
}

export default Dessert