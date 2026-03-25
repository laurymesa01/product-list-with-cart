import React from 'react'
import imageWaffleMobile from "../assets/images/image-waffle-mobile.jpg";
import addToCartSvg from "../assets/images/icon-add-to-cart.svg";


function Dessert() {
  return (
    <section>
      <div className='relative mb-8 '>
        <img src={imageWaffleMobile} alt="" className='rounded-md'/>
        <button className='add-to-cart-btn absolute left-1/2 bottom-0 translate-y-1/2 -translate-x-1/2'>
          <img src={addToCartSvg} alt="" className='h-5 w-5'/>
          <span>Add to cart</span>
        </button>
      </div>

      <p className='text-preset-4 text-rose-500 mb-1'>Waffle</p>
      <p className='text-preset-3 text-rose-900 mb-1'>Waffle with berries</p>
      <p className='text-preset-3 text-red'>$6.50</p>
    </section>
  )
}

export default Dessert