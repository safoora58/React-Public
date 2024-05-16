import React, { Component } from 'react'
import './Portfolio.css'

export default class Portfolio extends Component {
  render() {
    return (
      <div className='Portfolio'>
        <h1>CART</h1>
        <div className='cart-header'>
          <span>Item</span>
          <span>Price</span>
          <span>Doing</span>
        </div>
        <div className='cart-body'>
          <div className='cart-item'>
            <span><img src="images/p1.jpg" alt="" /></span>
            <span>Price</span>
            <span><button className='remove-btn'>Remove</button></span>
          </div>
        </div>
        <div className='cart-footer'>
          <button>Empty Cart</button>
        </div>
      </div>
    )
  }
}
