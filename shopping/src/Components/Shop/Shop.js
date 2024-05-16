import React, { Component } from 'react'
import './Shop.css'
import Header from '../Header/Header'
import Product from '../Product/Product'

import Portfolio from '../Portfolio/Portfolio'
export default class Shop extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [
        {
          id: 1,
          title: 'SHOE 1',
          description: 'Good shoe for casual wear',
          price: 2000,
          img: 'images/p1.jpg'
        },
        {
          id: 2,
          title: 'SHOE 2',
          description: 'Stylish sneakers for everyday use',
          price: 3500,
          img: 'images/p2.jpg'
        },
        {
          id: 3,
          title: 'SHOE 3',
          description: 'Durable hiking boots for outdoor adventures',
          price: 4200,
          img: 'images/p3.jpg'
        },
        {
          id: 4,
          title: 'SHOE 4',
          description: 'Elegant dress shoes for formal occasions',
          price: 5000,
          img: 'images/p4.jpg'
        },
        {
          id: 5,
          title: 'SHOE 5',
          description: 'Comfortable sandals for summer days',
          price: 1800,
          img: 'images/p5.jpg'
        },
        {
          id: 6,
          title: 'SHOE 6',
          description: 'High-performance running shoes for athletes',
          price: 6000,
          img: 'images/p6.jpg'
        }
      ]
    }
  }
  render() {
    return (
      <div className='Shop'>
        <Header></Header>
        <div className='product-list'>

          {this.state.products.map(product => {
            return <Product key={product.id} {...product}></Product>
          })}
        </div>
        <Portfolio></Portfolio>
      </div>
    )
  }
}
