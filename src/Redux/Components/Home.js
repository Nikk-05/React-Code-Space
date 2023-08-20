import React from 'react'
import Cart from '../Static/cart.png'
import Image from '../Static/iphone_14.png'
import '../Styles/HomeStyle.css'

function Home() {
  return (
    <div className='container'>
        <h1>Mobile</h1>
        <div className='cart-img'><img src={Cart}></img></div>
        <div className='cart-wrapper items'>
            <img src={Image}></img>
        </div>
        <div className='text-wrapper items'>    
            <span>IPhone 14 Pro</span>
            <span>Price: $23000</span>
        </div>
        <div className='btn-wrapper items'>    
            <button>Add To Cart</button>
        </div>
    </div>
  )
}

export default Home