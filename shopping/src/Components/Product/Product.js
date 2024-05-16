import React, { Component } from 'react'
import './Product.css'

export default class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            product: {
                id: this.props.id,
                title: this.props.title,
                description: this.props.description,
                price: this.props.price,
                img: this.props.img
            },
            

        }
    }

    addHandler(id) {

        this.props.onAdd(id);


    }
    render() {
        return (
            <div className='Product'>

                <h3 className='product-title'>{this.state.product.title}</h3>
                <div className='product-img'><img src={this.state.product.img} alt="picture" /></div>
                <p className='product-desc'>{this.state.product.description}</p>
                <div className='product-footer'>
                    <span className='product-price'>{this.state.product.price} $</span>
                    <button className='add-btn' onClick={() => this.addHandler(this.state.product.id)}>Add to cart</button>
                </div>


            </div>
        )
    }
}
