import React, { Component } from "react";
import "./User.css";

export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.name,
      age: this.props.age,
      email: this.props.email,
    };
  }

  clickHandler = (id) => {
    console.log(id);
    this.props.onRemove(id);
  };

  editHandler = (id) => {
    console.log("Editing user with ID:", id);
    this.props.onEdit(id)
  }

  render() {
    return (
      <div className="User">
        <h1>{this.state.username}</h1>
        <button className="btn" onClick={this.clickHandler.bind(this, this.props.id)}>Remove</button>
        <button onClick={() => this.editHandler(this.props.id)}>Edit</button>
      </div>
    );
  }
}


