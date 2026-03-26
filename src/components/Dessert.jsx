import React from 'react'
import addToCartSvg from "../../assets/images/icon-add-to-cart.svg";


function Dessert({dessert}) {
  const formato = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  
  return (
    <section>
      <div className='relative mb-8 '>
        <img src={dessert.image.mobile} alt="" className='rounded-md w-full object-cover'/>
        <button className='add-to-cart-btn absolute left-1/2 bottom-0 translate-y-1/2 -translate-x-1/2'>
          <img src={addToCartSvg} alt="" className='h-5 w-5'/>
          <span className='text-preset-4-bold text-rose-900'>Add to cart</span>
        </button>
      </div>

      <p className='text-preset-4 text-rose-500 mb-1'>{dessert.category}</p>
      <p className='text-preset-3 text-rose-900 mb-1'>{dessert.name}</p>
      <p className='text-preset-3 text-red'>{formato.format(dessert.price)}</p>
    </section>
  )
}

export default Dessert