import React, { Component } from 'react'
import './TicketBuy.css'

export default class TicketBuy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'reza'
        };

        // const date = {
        //     'Iran': ['Tabriz', 'shiraz', 'mashhad', 'abadan'],
        //     'Turkey': ['istanbul', 'ankara', 'izmir'],
        //     'United State': ['new york', 'los angeles', 'chicago']
        // }
    }


    render() {
        return (
            <div className='TicketBuy'>
                <div className="container">
                    <input className='item' type="text" placeholder="First Name" />
                    <input className='item' type="text" placeholder="Last Name" />
                    <input className='item' type="tel" placeholder="Phone Number" />
                    <input className='item' type="email" placeholder="Email" />
                    <select className='item' name="">
                        <option value="Iran">Iran</option>
                        <option value="Turkey">Turkey</option>
                        <option value="United State">United State</option>
                    </select>
                    <select className='item' name="">
                        <option value="Tabriz">Tabriz</option>
                        <option value="Shiraz">Shiraz</option>
                        <option value="Mashhad">Mashhad</option>
                    </select>
                    <button>Book a ticket</button>
                </div>
            </div>
        )
    }
}