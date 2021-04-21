import React, { Component } from 'react';
import './AnimalContainer.css';
import Animal from './Animal';

class AnimalContainer extends Component{

  render() {
    return(
      <div className="AnimalType row mb-2">
        {this.props.info.individuals.map(individual =>
          <div className='col-4 col-md-2'>
            <Animal info={individual} />
          </div>
          )}
      </div>

    )
  }
}

export default AnimalContainer;