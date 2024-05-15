import React, { Component } from 'react'
import './Navbar.css'

export default class Navbar extends Component {
  render() {
    return (
      <div className='Navbar'>
        <ul>
            <li>Home</li>
            <li>Store</li>
            <li>About</li>
        </ul>
      </div>
    )
  }
}
