import React, { Component } from 'react'
import './User.css'
import { name } from 'tar/types'

export default class User extends Component {
    constructor(props) {
        super(props)
        this.state = {

            count: props.age,
            

        }
    }
    handleClick = () => {
        this.setState(prevState => ({
            count: prevState.count + 1

        }));
        console.log(this.state.count + 1); 
    }
    render() {
        return (
            <div className='User'>
                <h1 >{this.props.name}</h1>
                <h2>{this.state.count}</h2>
                <h3>{this.props.email}</h3>
                <button onClick={this.handleClick}>Add Age</button>
            </div>
        )
    }
}
