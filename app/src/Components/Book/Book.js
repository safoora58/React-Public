import React, { Component } from 'react'
import './Book.css'

export default class Book extends Component {
  
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     title: this.props.title,
  //     author: this.props.author,
  //     year: this.props.year
  //   }
  // }
  render() {
    return (
      <>
        <tr className='Book'>
          <td>{this.props.title}</td>
          <td>{this.props.author}</td>
          <td>{this.props.year}</td>
        </tr>
      </>
    )
  }
}

