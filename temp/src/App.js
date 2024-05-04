import './App.css';
import React from "react";
import User from './User/User'
import Counter from './Counter/Counter'


function App() {

  const user = { name: "Reza", age: 41, email: "rbazdaran@gmail.com" }
  const counter = {start:7, end:15}
  return (
    // <User {...user} ></User>
    <Counter {...counter} ></Counter>
  );
}

export default App;
