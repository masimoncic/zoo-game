import React, { Component } from 'react';
import './IndividualContainer.css';
import Individual from './Individual';

class IndividualContainer extends Component{

  render() {
    return(
      <div className="IndividualContainer row mb-2">
        {this.props.individuals.map(individual =>
          <div className='col-4 col-md-2'>
            <Individual info={individual} />
          </div>
          )}
      </div>

    )
  }
}

export default IndividualContainer;