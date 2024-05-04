import React, { Component } from 'react'

export default class User extends Component {


    constructor(props) {

        super(props);
        this.state = {
            name: props.name,
            age: props.age,
            email: props.email,
            num: 0
        }


    }
    // clickHandler = () => {
    //     this.setState({
    //         num : this.state.num + 1,
    //     })

    // }


    clickHandler = () => {
        this.setState((prevState) => {
            return{
                num : prevState.num + 1
            }
        })
    }




    render() {
        return (
            <div className='User'>
                <div>{this.state.name}</div>
                <h1>{this.num}</h1>
                <h2 onClick={this.clickHandler}>{this.state.num}</h2>
            </div>
        )
    }
}
