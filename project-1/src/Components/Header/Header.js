import React from 'react'
import './Header.css'
import Navbar from '../Navbar/Navbar'
import SearchBar from '../SearchBar/SearchBar'
import Logo from '../Logo/Logo'

export default function Header() {
    return (
        <div className='header-container'>
            <Logo></Logo>
            <Navbar></Navbar>
            <SearchBar></SearchBar>
        </div>
    )
}
