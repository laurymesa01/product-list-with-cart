import React, { useState, useEffect } from 'react'
import Dessert from './Dessert'
import Cart from './Cart'


function Desserts() {
  const [desserts, setDesserts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/desserts")
      .then(res => res.json())
      .then(data => setDesserts(data));
  }, []);

  return (
    <section className='w-full'>
      <h1 className='text-preset-1 mb-8'>Desserts</h1>
      <div className='flex flex-col gap-8 md:grid md:grid-cols-3'>
        {desserts.map(dessert => (
          <Dessert key={dessert.id} dessert = {dessert}/>
        ))}
      </div>
    </section>
  )
}

export default Desserts