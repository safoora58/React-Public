import React, { Component } from 'react'
import './Navbar.css'

export default class Navbar extends Component {


    constructor(props) {
        super(props);
        this.state = {
            activeItem: 0,
            notif: ["hello welcome", "thanks for join", "compleate profile"]
        };
    }
    render() {
        return (
            <div className='Navbar'>
                <div className='navbar-container'>
                    <ul className='navbar-list'>
                        <li className='navbar-item'><h2>Hello World</h2></li>
                        {this.state.notif.length > 1 &&
                            <li className='navbar-item'>
                                <h3>News
                                    <span>{this.state.notif.length}</span>
                                </h3>

                            </li>
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
