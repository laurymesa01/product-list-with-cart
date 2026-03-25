import React from 'react'
import Dessert from './Dessert'
import Cart from './Cart'


function Desserts() {
  return (
    <section className='w-full'>
      <h1 className='text-preset-1 mb-8'>Desserts</h1>
      <section>
        <div className='flex flex-col'>
          <Dessert/>
        </div>
      </section>
    </section>
  )
}

export default Desserts