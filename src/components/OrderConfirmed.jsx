import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';

import orderConfirmed from "../../assets/images/icon-order-confirmed.svg";


function OrderConfirmed() {

  const { cart, totalPrice,} = useContext(CartContext);

  const formato = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  
  return (
    <section className='bg-white p-6'>
      <img src={orderConfirmed} alt="" />
      <h1 className='text-preset-1 mt-4'>Order confirmed</h1>
      <p className='text-rose-500 mt-3'>We hope you enjoy your food!</p>
      <div className='bg-rose-50 p-4 rounded-md mt-4'>
        {cart.map((item, id) => (
          <div className='flex justify-between items-center border-b border-rose-100 pb-3' key={id}>
            <img src={item.image.thumbnail} alt={item.name} className='rounded-md'/>
            <div className='ml-2'>
              <p className='text-preset-4-bold text-rose-900'>{item.name}</p>
              <div className='flex items-center gap-2 mt-2'>
                <p className='text-preset-4-bold text-red'>{item.quantity}x</p>
                <p className='text-preset-4 text-rose-500'>@ {formato.format(item.price)}</p>
              </div>
            </div>
            <p className='text-preset-3 text-rose-900'>{formato.format(item.price * item.quantity)}</p>
          </div>
        ))}
        <div className='flex justify-between items-center mt-5'>
          <p className='text-preset-4 text-rose-900'>Order Total</p>
          <h2 className='text-preset-2 text-rose-900'>{formato.format(totalPrice)}</h2>
        </div>
      </div>
      <button className='mt-4 confirm-order-btn'>Start new order</button>
    </section>
  )
}

export default OrderConfirmed