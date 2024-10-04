import React, { Component } from 'react';

import initialState from './initialState';

export class PhonebookForm extends Component {
  state = { ...initialState };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    onSubmit({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ ...initialState });
  };

  render() {
    const { contactName, contactNumber } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            onChange={this.handleChange}
            type="text"
            name="contactName"
            value={contactName}
            required
          />
        </label>
        <label>
          Number
          <input
            onChange={this.handleChange}
            type="tel"
            name="contactNumber"
            value={contactNumber}
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default PhonebookForm;
