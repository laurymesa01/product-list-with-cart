import React, { useState, useEffect } from 'react'
import Dessert from './Dessert'
import { api } from "../services/api";


function Desserts() {
  const [desserts, setDesserts] = useState([]);

  useEffect(() => {
    api.getDesserts().then(setDesserts);
  }, []);

  return (
    <section className='xl:w-2/3'>
      <h1 className='text-preset-1 mb-8'>Desserts</h1>
      <div className='flex flex-col gap-8 md:grid md:grid-cols-3'>
        {desserts.map(dessert => (
          <Dessert key={dessert.name} dessert = {dessert}/>
        ))}
      </div>
    </section>
  )
}

export default Desserts