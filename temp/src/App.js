import './App.css';
import React, { Component } from "react";
import User from './Components/User/User'
import Counter from './Components/Counter/Counter'
import Navbar from './Components/Navbar/Navbar'


export default class App extends Component {

  state = {
    users: [
      { name: 'Reza', age: 41, email: 'rbazdaran@gmail.com' },
      { name: 'Safoora', age: 43, email: 'safoora@gmail.com' },
      { name: 'mona', age: 36, email: 'mina@gmail.com' },
    ],

    counter: { start: 7, end: 15 }
  }



  render() {

    return (
      <div className='App' >
        <Navbar></Navbar>

        {this.state.users.map((item, index) => (
          <User {...item}></User>
        ))}


        <Counter {...this.state.counter} ></Counter>
      </div >
    );
  }

}

