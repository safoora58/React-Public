import React, { Component } from 'react'
import './FormRegister.css'

export default class FormRegister extends Component {

    constructor(props) {
        super(props)
        this.state = {
            submitted: false,
            firstName: '',
            lastName: '',
            email: '',
            allValid: false


        }
    }

    submitHandler = (event) => {
        event.preventDefault()
        this.setState({
            submitted: true
        })
        this.allValidChecker()
    }

    firstNameHandler = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    lastNameHandler = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    emailHandler = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    allValidChecker = () => {
        if (this.state.firstName && this.state.lastName && this.state.email) { this.setState({ allValid: true }) }
    }

    fieldChecker = (field) => {
        if (field === '') {
            return (
                <span>This field is required</span>
            )
        }
    }

    render() {
        return (
            <div className='FormRegister'>
                <form action="" onSubmit={this.submitHandler}>
                    <input type="text" placeholder='First Name' value={this.state.firstName} onChange={this.firstNameHandler} />
                    {this.state.submitted && this.fieldChecker(this.state.firstName)}
                    <input type="text" placeholder='Last Name' value={this.state.lastName} onChange={this.lastNameHandler} />
                    {this.state.submitted && this.fieldChecker(this.state.lastName)}
                    <input type="email" placeholder='Email' value={this.state.email} onChange={this.emailHandler} />
                    {this.state.submitted && this.fieldChecker(this.state.email)}
                    <input type="submit" value="Register" />
                </form>
            </div>
        )
    }
}
