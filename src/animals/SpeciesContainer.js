import React, { Component } from 'react';
import Species from './Species';
import './SpeciesContainer.css';
import {v4 as uuidv4} from 'uuid';


class SpeciesContainer extends Component{
  constructor(props) {
    super(props);
  }
  render() {
    let species = [];
    for (let animal in this.props.animals) {
      species.push(
      <Species
        species={animal} 
        buyAnimal={this.props.buyAnimal}
        price={this.props.speciesData[animal].price}
        quantity={this.props.animals[animal].length }
        feedAll={this.props.feedAll}
        key={uuidv4()}
      /> )
    }
    return(
      <div className="SpeciesContainer row mb-2">
        <div className='row'>
          {species}
        </div>
      </div>
    )
  }
}

export default SpeciesContainer;