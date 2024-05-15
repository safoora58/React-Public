import React, { Component } from 'react'
import './Header.css'
import Navbar from '../Navbar/Navbar'

export default class Header extends Component {
  render() {
    return (
      <div className='Header'>

        <Navbar></Navbar>
        
      </div>
    )
  }
}
