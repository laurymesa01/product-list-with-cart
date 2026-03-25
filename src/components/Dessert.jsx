import React from 'react'
import imageWaffleMobile from "../assets/images/image-waffle-mobile.jpg";

function Dessert() {
  return (
    <section>
      <img src={imageWaffleMobile} alt="" />
      <button>Add to cart</button>
      <p>Waffle</p>
      <p>Waffle with berries</p>
      <p>$6.50</p>
    </section>
  )
}

export default Dessert