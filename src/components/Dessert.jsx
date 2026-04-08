import React from 'react'
import { useContext } from "react";

import { CartContext } from "../context/CartContext";

import addToCartSvg from "../../assets/images/icon-add-to-cart.svg";

import { formatPrice } from "../utils/format";



function Dessert({dessert}) {

  const { addToCart, cart, removeFromCart } = useContext(CartContext);
  const dessertIsInCart = cart.find(item => item.id === dessert.id);
  
  
  return (
    <section>
      <div className='relative mb-8'>
        <picture>
          <source media="(min-width: 1024px)" srcSet={dessert.image.desktop} />
          <source media="(min-width: 768px)" srcSet={dessert.image.tablet} />
          <img src={dessert.image.mobile} alt={dessert.name} className={`rounded-md w-full object-cover ${dessertIsInCart ? "border-2 border-red" : ''}`}/>
        </picture>
        {!dessertIsInCart ? ( 
          <button 
          className='add-to-cart-btn absolute left-1/2 bottom-0 translate-y-1/2 -translate-x-1/2 whitespace-nowrap group transition cursor-pointer' 
          onClick={() => addToCart(dessert)}>
            <img src={addToCartSvg} alt="" className='h-5 w-5'/>
            <span className='text-preset-4-bold text-rose-900 group-hover:text-red transition'>Add to cart</span>
          </button>
        ): (
          <div className='cart-quantity absolute left-1/2 bottom-0 translate-y-1/2 -translate-x-1/2  whitespace-nowrap transition'>
            <button className='h-3.75 w-3.75 p-0.5 flex justify-center items-center border rounded-full border-white cursor-pointer hover:bg-white' onClick={() => removeFromCart(dessert.id)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none" viewBox="0 0 10 2" className='text-white hover:text-rose-100'>
                <path fill="currentColor" d="M0 .375h10v1.25H0V.375Z"/>
              </svg>
            </button>
            <span className='text-preset-4-bold text-white'>{cart.find(item => item.id === dessert.id)?.quantity || 0}</span>
            <button className='h-3.75 w-3.75 p-0.5 border flex justify-center rounded-full border-white cursor-pointer hover:bg-white '  onClick={() => addToCart(dessert)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10" className='text-white hover:text-rose-100'>
                <path fill="currentColor" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/>
              </svg>
            </button>

          </div>
        )}

      </div>

      <p className='text-preset-4 text-rose-500 mb-1'>{dessert.category}</p>
      <p className='text-preset-3 text-rose-900 mb-1'>{dessert.name}</p>
      <p className='text-preset-3 text-red'>{formatPrice(dessert.price)}</p>
    </section>
  )
}

export default Dessert