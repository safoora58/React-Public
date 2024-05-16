import React, { Component } from 'react'
import './Portfolio.css'

export default class Portfolio extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cartItems: this.props.cart,
      totalPrice: 0
    }
  }
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
          {/* <div className='cart-item'>
            <span><img src={this.props.data.img} alt="" /></span>
            <span>{this.props.data.price}</span>
            <span><button className='remove-btn'>Remove</button></span>
          </div> */}

          {
            this.props.data.map(item => (
              <div className='cart-item'>
                <span><img src={item.img} alt="" /></span>
                <span>{item.price}</span>
                <span><button className='remove-btn'>Remove</button></span>
              </div>
            ))
          }


        </div>
        <div className='cart-footer'>
          <button>Empty Cart</button>
        </div>
      </div>
    )
  }
}
