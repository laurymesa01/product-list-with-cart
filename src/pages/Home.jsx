import React from 'react'

import Cart from '../components/Cart'
import Desserts from '../components/Desserts'
import OrderConfirmed from '../components/OrderConfirmed'

function Home() {
  return (
    <section className='min-h-screen px-6 py-8 bg-rose-50 flex flex-col items-start  md:gap-8 lg:p-20 xl:flex-row'>
        <Desserts/>
        <Cart/>
        <OrderConfirmed/>
    </section>
  )
}

export default Home