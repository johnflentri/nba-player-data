import React, { Component } from "react";
import PropTypes from "prop-types";
export default class Player extends React.Component {
  static propTypes = {
    addComment: PropTypes.string.isRequired
  };

  state = { name: "" };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addComment(this.state.name);
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div className="add-comment">
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
            />
          </label>
          <input type="submit" value="New Comment" />
        </form>
      </div>
    );
  }
}
