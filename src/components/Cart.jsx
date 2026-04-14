import React from 'react'
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

import emptyCart from "../../assets/images/illustration-empty-cart.svg";
import carbonNeutral from "../../assets/images/icon-carbon-neutral.svg";
import OrderConfirmed from './OrderConfirmed';

import { formatPrice } from "../utils/format";



function Cart() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const { cart, totalPrice, clearCart, removeProduct } = useContext(CartContext);

  const closeModal = () => {
    setIsModalOpen(false);
    clearCart();
  };

  return (
    <>
      <section className='w-full bg-white p-6 xl:flex-1'>
        <h2 className='text-preset-2 text-red mb-6'>Your Cart ({cart.length})</h2>
        {cart.length === 0 ? (
          <div className='flex flex-col items-center mb-6'>
            <img src={emptyCart} alt="" className='mb-6'/>
            <p className='text-preset-4-bold text-rose-500'>Your added items will appear here</p>
          </div>
        ): (
          <>
            { cart.map((item, id) => (
              <div key={id} className='flex justify-between items-center py-3 border-b border-rose-100'>
                <div>
                  <p className='text-preset-4-bold text-rose-900'>{item.name}</p>
                  <div className='flex mt-2'>
                    <p className='text-preset-4-bold text-red'>{item.quantity}x</p>
                    <p className='text-preset-4 text-rose-500 ml-6'>@ {formatPrice(item.price)}</p>
                    <p className='text-preset-4-bold text-rose-500 ml-2'>{formatPrice(item.price * item.quantity)}</p>
                  </div>
                </div>
                <button onClick={() => removeProduct(item.id)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" viewBox="0 0 10 10" className='text-rose-400 border rounded-full border-rose-400 p-px cursor-pointer hover:border-rose-900 hover:text-rose-900'>
                    <path fill="currentColor" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/>
                  </svg>
                </button>

              </div>
              ))
            }
            <div className='mt-8'>
              <div className='flex justify-between items-center'>
                <p className='text-preset-4 text-rose-900'>Order total</p>
                <p className='text-preset-2 text-rose-900'>{formatPrice(totalPrice)}</p>
              </div>
              <div className='bg-rose-50 flex justify-center p-4 rounded-md mt-6'>
                <img src={carbonNeutral} alt="" />
                <p className='text-preset-4 text-rose-900 ml-1'>This is a <span className='text-preset-4-bold'>carbon-neutral</span> delivery</p>
              </div>
              <button className='mt-6 confirm-order-btn text-preset-3' onClick={() => setIsModalOpen(true)}>Confirm order</button>
            </div>
          </>

        )}
      </section>
      {isModalOpen && <OrderConfirmed isOpen ={isModalOpen} onClose={closeModal} />}
    </>


  )
}

export default Cart