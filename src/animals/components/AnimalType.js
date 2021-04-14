import React, { Component } from 'react';
import '../styles/AnimalType.css';
import Animal from './Animal';

class AnimalType extends Component{

  render() {
    let animals = [];
    for (let i = 0; i < this.props.info.quantity; i++) {
      animals.push(<Animal type={this.props.info.type} number={i + 1}/>)
    }
    return(
      <div className="AnimalType">
        <p>Animal: {this.props.info.type}</p>
        <p>Quantity: {this.props.info.quantity}</p>
        {animals}
      </div>
    )
  }
}

export default AnimalType;