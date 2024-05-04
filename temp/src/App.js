import './App.css';
import React from "react";
import User from './Components/User/User'
import Counter from './Components/Counter/Counter'


function App() {

  const user = { name: "Reza", age: 41, email: "rbazdaran@gmail.com" }
  const counter = {start:7, end:15}
  return (
    // <User {...user} ></User>
    <Counter {...counter} ></Counter>
  );
}

export default App;
