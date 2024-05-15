import React, { Component } from 'react'
import './Product.css'

export default class Product extends Component {
    render() {
        return (
            <div className='Product'>

                <h3 className='product-title'>Product Title</h3>
                <div className='product-img'><img  src="images/p1.jpg" alt="" /></div>
                <p className='product-desc'>Sleek sneaker in black with a breathable knit upper and a chunky rubber sole. Perfect for everyday wear.</p>
                <div className='product-footer'>
                    <span className='product-price'>Price</span>
                    <button className='add-btn'>Add to cart</button>
                </div>


            </div>
        )
    }
}
