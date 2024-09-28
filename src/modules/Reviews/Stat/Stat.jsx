import React, { Component } from 'react';

export class Stat extends Component {
  render() {
    const { children } = this.props;

    return <p>{children}</p>;
  }
}

export default Stat;
