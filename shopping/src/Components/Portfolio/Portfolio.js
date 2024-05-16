import React, { Component } from 'react'
import './Portfolio.css'

export default class Portfolio extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cartItems: this.props,
      totalPrice: 0
    }
  }
  removeHandler = (id) => {
    console.log(this.state.cartItems)
    this.props.onRemove(id)

  }
  render() {
    return (
      <div className='Portfolio'>
        {/* <h1>CART</h1>
        <div className='cart-header'>
          <span>Item</span>
          <span>Price</span>
          <span>Doing</span>
        </div> */}
        {/* <div className='cart-body'> */}
          <div className='cart-item'>
            <span><img src={this.state.cartItems.img} alt="" /></span>
            <span>{this.state.cartItems.price}</span>
            <span><button className='remove-btn' onClick={() => this.removeHandler(this.state.cartItems.id)}>Remove</button></span>
          </div>
        {/* </div> */}
        {/* <div className='cart-footer'>
          <button>Empty Cart</button>
        </div> */}
      </div>
    )
  }
}
