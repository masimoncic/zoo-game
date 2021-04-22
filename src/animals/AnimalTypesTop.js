import React, { Component } from 'react';
import AnimalType from './AnimalType';
import './AnimalTypesTop.css';


class AnimalTypesTop extends Component{
  constructor(props) {
    super(props);
  }
  render() {
    let animalTypes = [];
    for (let animal in this.props.animals) {
      animalTypes.push(<AnimalType type={animal} buyAnimal={this.props.buyAnimal} /> )
    }
    return(
      <div className="AnimalTypesTop row mb-3">
        <div className='row'>
          {animalTypes}
        </div>
      </div>
    )
  }
}

export default AnimalTypesTop;