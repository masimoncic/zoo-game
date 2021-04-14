import React, { Component } from 'react';
import '../styles/Animal.css';


class Animal extends Component{
  render() {
    return(
      <div className="Animal">
          <p>{this.props.type} {this.props.number}</p>
      </div>
    )
  }
}

export default Animal;