import React from 'react'

import emptyCart from "../assets/images/illustration-empty-cart.svg";


function Cart() {
  return (
    <section className='bg-white p-6'>
      <h2 className='text-preset-2 text-red mb-6'>Your Cart(0)</h2>
      <div className='flex flex-col items-center'>
        <img src={emptyCart} alt="" className='mb-6'/>
        <p className='text-preset-4-bold text-rose-500'>Your added items will appear here</p>
      </div>

    </section>
  )
}

export default Cart