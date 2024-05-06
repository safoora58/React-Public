import React, { Component } from 'react'
import './TicketBuy.css'

export default class TicketBuy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [

                { country: 'Iran', cities: ['Tabriz', 'Shiraz', 'Mashhad', 'Abadan'] },
                { country: 'Turkey', cities: ['Istanbul', 'Ankara', 'Izmir'] },
                { country: 'United State', cities: ['New York', 'Los Angeles', 'Chicago'] }
            ],
            currentCountryIndex: 0

        }
        this.handleCountryChange = this.handleCountryChange.bind(this);
    };

    handleCountryChange(value) {
        const countryData = this.state.data.find(item => item.country === value)
        this.setState({
            currentCountryIndex: this.state.data.indexOf(countryData)
        })
    }


    render() {
        return (
            <div className='TicketBuy'>
                <div className="container">
                    <input className='item' type="text" placeholder="First Name" />
                    <input className='item' type="text" placeholder="Last Name" />
                    <input className='item' type="tel" placeholder="Phone Number" />
                    <input className='item' type="email" placeholder="Email" />
                    <select className='item' onChange={(event) => { this.handleCountryChange(event.target.value) }}>
                        {this.state.data.map((item) => <option value={item.country}>{item.country}</option>)}

                    </select>
                    <select className='item' name="">
                        {this.state.data[this.state.currentCountryIndex].cities.map((item) => <option value={item}>{item}</option>)}
                    </select>
                    <button>Book a ticket</button>
                </div>
            </div>
        )
    }
}