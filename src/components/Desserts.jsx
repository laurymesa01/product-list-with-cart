import React, { useState, useEffect } from 'react'
import Dessert from './Dessert'


function Desserts() {
  const [desserts, setDesserts] = useState([]);

  useEffect(() => {
    fetch("/data/data.json")
      .then(res => res.json())
      .then(data => setDesserts(data.desserts));
  }, []);

  return (
    <section className='xl:w-2/3'>
      <h1 className='text-preset-1 mb-8'>Desserts</h1>
      <ul className='flex flex-col gap-8 md:grid md:grid-cols-3'>
        {desserts.map(dessert => (
          <li key={dessert.name}>
            <Dessert dessert = {dessert}/>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Desserts