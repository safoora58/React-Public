import React, { Component } from 'react'
import './Shop.css'
import Header from '../Header/Header'
import Product from '../Product/Product'

export default class Shop extends Component {
  render() {
    return (
      <div className='Shop'>
        <Header></Header>
        <Product></Product>
      </div>
    )
  }
}
