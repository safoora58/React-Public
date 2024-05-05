import React, { Component } from 'react'
import './Form.css'
import { name } from 'tar/types'

export default class Form extends Component {

    static defaultProps = {
        name: 'Reza',
        password: '123456',
        email: 'reza@gmail.com',
        checked: false

    }

    constructor(props) {

        super(props)
        this.state = {
            name: this.props.name,
            email: this.props.email,
            password: this.props.password,
            checked: this.props.checked
        }

    }


    changeValue = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    checkedHandler(event) {
        this.setState({

            checked: event.target.checked

        })
    }
    render() {
        return (
            <div className='Form'>
                <form action="">
                    <input type="text" value={this.state.name} placeholder='Name' onChange={this.changeValue} />
                    <input type="password" value={this.state.password} />
                    <input type="checkbox" checked={this.state.checked} onChange={this.checkedHandler.bind(this)} />
                </form>
            </div>
        )
    }

}

