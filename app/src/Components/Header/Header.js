import React, { Component } from 'react'
import './Header.css'
import { IoBookSharp } from "react-icons/io5";

export default class Header extends Component {
    render() {
        return (
            <div className='Header'>
                <IoBookSharp className='book-icon' />
                <h1>Book list <span>Project</span> App</h1>
            </div>
        )
    }
}
