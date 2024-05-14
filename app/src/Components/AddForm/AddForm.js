import React, { Component } from 'react'
import './AddForm.css'
import Book from '../Book/Book';

export default class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      year: '',
      submitted: false,
      sent: false,
      books: []

    }

  }
  yearHandler = (value) => {
    this.setState({
      year: value
    })

  }
  authorHandler = (value) => {
    this.setState({
      author: value
    })

  }
  titleHandler = (value) => {
    this.setState({
      title: value
    })
  }
  submitHandler = (event) => {
    event.preventDefault();
    this.setState({
      submitted: true,
    })
    if (this.state.title && this.state.author && this.state.year) {

      const maxId = this.state.books.length > 0 ? this.state.books.reduce(
        (max, book) => Math.max(max, book.id),
        0
      ) : 0;
      const newId = maxId + 1;
      const newBook = {
        id: newId,
        title: this.state.title,
        author: this.state.author,
        year: this.state.year,
      };
      this.setState({

        books: [...this.state.books, newBook],
      });
      this.titleHandler('');
      this.authorHandler('');
      this.yearHandler('');
      this.setState({
         sent: true ,
         submitted:false
        })
    }
    else {
      return ('All fields are required');
    }

  }
  render() {
    return (
      <div className='AddForm'>
        <form action="" onSubmit={this.submitHandler}>
          <label htmlFor="title">Title</label>
          <input id='title' type="text" value={this.state.title} onChange={(event) => this.titleHandler(event.target.value)} />
          {!this.state.title && this.state.submitted && <p>Title is required</p>}
          <label htmlFor="author">Author</label>
          <input id='author' type="text" value={this.state.author} onChange={(event) => this.authorHandler(event.target.value)} />
          {!this.state.author && this.state.submitted && <p>Author is required</p>}
          <label htmlFor="year">Year</label>
          <input id='year' type="text" value={this.state.year} onChange={(event) => this.yearHandler(event.target.value)} />
          {!this.state.year && this.state.submitted && <p>Year is required</p> }
          <input type="submit" value="Add Book" />
        </form>
        <div className='books'>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Year</th>
              </tr>
            </thead>
            <tbody>

              {this.state.books.map((book, index) => {
                return (
                  <Book key={book.id} {...book}></Book>
                )
              })}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={3}>Footer</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    )
  }
}
