import React, { Component } from 'react';
import './IndividualContainer.css';
import Individual from './Individual';

class IndividualContainer extends Component{

  render() {
    return(
      <div className="IndividualContainer row mb-2">
        {this.props.individuals.map(individual =>
          <div key={individual.id} className='col-4 col-md-2'>
            <Individual 
            info={individual} 
            species={this.props.species} 
            foodConsumption={this.props.speciesData[this.props.species].foodConsumption}
            feedAnimal={this.props.feedAnimal}
            renameAnimal={this.props.renameAnimal}
            imgUrl={this.props.speciesData[this.props.species].imgUrl}
          />
          </div>
          )}
      </div>

    )
  }
}

export default IndividualContainer;