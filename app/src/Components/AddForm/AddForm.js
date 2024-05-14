import React, { Component } from 'react'
import './AddForm.css'

export default class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Shahname',
      author: 'Ferdowsi',
      year: '1950'

    }

  }
  yearHandler = (value) => {
    this.setState({
      year: value
    })

  }
  render() {
    return (
      <div className='AddForm'>
        <form action="">
          <label htmlFor="title">Title</label>
          <input id='title' type="text" value={this.state.title} />
          <label htmlFor="author">Author</label>
          <input id='author' type="text" value={this.state.author} />
          <label htmlFor="year">Year</label>
          <input id='year' type="text" value={this.state.year} onChange={         } />
          <input type="submit" value="Add Book" />
          <input type="reset" value="Clear" />

        </form>
      </div>
    )
  }
}
