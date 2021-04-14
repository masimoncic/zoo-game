import React, { Component } from 'react';
import '../styles/AnimalTypesTop.css';
import AnimalType from './AnimalType';

class AnimalTypesTop extends Component{
  constructor(props) {
    super(props);
    this.state = {
      animals: [],
    }
  }
  static defaultProps = {
    animalTypes: [
      {type: 'tiger', quantity: 2},
      {type:' penguine', quantity: 5}
    ]
  }
  render() {
    return(
      <div className="AnimalTypesTop">
        <p>AnimalTypesTop</p>
        {this.props.animalTypes.map(type => <AnimalType info={type}/>)}
      </div>
    )
  }
}

export default AnimalTypesTop;