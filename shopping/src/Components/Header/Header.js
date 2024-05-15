import React, { Component } from 'react'
import './Header.css'
import Navbar from '../Navbar/Navbar'

export default class Header extends Component {
  render() {
    return (
      <div className='Header'>

        <Navbar></Navbar>
        <h1>This is Header</h1>
      </div>
    )
  }
}
