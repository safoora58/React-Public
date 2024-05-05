import "./App.css";
import React, { Component } from "react";
import User from "./Components/User/User";
import Counter from "./Components/Counter/Counter";
import Navbar from "./Components/Navbar/Navbar";
import Form from "./Components/Form/Form";
import FormRegister from './Components/FormRegister/FormRegister'
import Quiz from "./Components/Quiz/Quiz";

export default class App extends Component {
  state = {
    users: [
      { name: "Reza", age: 41, email: "reza@gmail.com" },
      { name: "Ali", age: 43, email: "ali@gmail.com" },
      { name: "Mona", age: 36, email: "mona@gmail.com" },
    ],

    counter: { start: 7, end: 15 },
  };

  render() {
    return (
      <div className="App">
        {/* <Navbar></Navbar> */}
        {/* {this.state.users.map((item, index) => (<User {...item}></User>))} */}
        {/* <Form name="Ali"></Form> */}
        {/* <Counter {...this.state.counter}></Counter> */}
        {/* <FormRegister></FormRegister> */}
        <Quiz></Quiz>
      </div>
    );
  }
}
