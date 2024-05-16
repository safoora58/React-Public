import React, { Component } from 'react'
import './Product.css'

export default class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id:this.props.id,
            title: this.props.title,
            description: this.props.description,
            price: this.props.price,
            img: this.props.img
            
        }
    }

    addHandler (id)  {
        this.props.onAdd(id);

    }
    render() {
        return (
            <div className='Product'>

                <h3 className='product-title'>{this.state.title}</h3>
                <div className='product-img'><img  src={this.state.img} alt="picture" /></div>
                <p className='product-desc'>{this.state.description}</p>
                <div className='product-footer'>
                    <span className='product-price'>{this.state.price}</span>
                    <button className='add-btn' onClick={() => this.addHandler(this.state.id)}>Add to cart</button>
                </div>


            </div>
        )
    }
}
