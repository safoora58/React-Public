import React, { Component } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import AddForm from './Components/AddForm/AddForm'
import Book from './Components/Book/Book'

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <AddForm></AddForm>
      </div>
    )
  }
}
