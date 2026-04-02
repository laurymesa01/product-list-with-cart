import React from 'react'
import { useContext } from "react";

import { CartContext } from "../context/CartContext";

import addToCartSvg from "../../assets/images/icon-add-to-cart.svg";


function Dessert({dessert}) {

  const { addToCart } = useContext(CartContext);

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
        <button 
        className='add-to-cart-btn absolute left-1/2 bottom-0 translate-y-1/2 -translate-x-1/2 w-max whitespace-nowrap group transition cursor-pointer' 
        onClick={() => addToCart(dessert)}>
          <img src={addToCartSvg} alt="" className='h-5 w-5'/>
          <span className='text-preset-4-bold text-rose-900 group-hover:text-red transition'>Add to cart</span>
        </button>
      </div>

      <p className='text-preset-4 text-rose-500 mb-1'>{dessert.category}</p>
      <p className='text-preset-3 text-rose-900 mb-1'>{dessert.name}</p>
      <p className='text-preset-3 text-red'>{formato.format(dessert.price)}</p>
    </section>
  )
}

export default Dessert