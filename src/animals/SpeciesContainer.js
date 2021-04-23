import React, { Component } from 'react';
import Species from './Species';
import './SpeciesContainer.css';


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
        price={this.props.animalSpecies[animal].price}
      /> )
    }
    return(
      <div className="SpeciesContainer row mb-3">
        <div className='row'>
          {species}
        </div>
      </div>
    )
  }
}

export default SpeciesContainer;