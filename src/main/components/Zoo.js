import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import AnimalTypesTop from '../../animals/components/AnimalTypesTop';
import ConstructionTop from '../../construction/components/ConstructionTop';
import '../styles/Zoo.css';
import MainDisplay from './MainDisplay';
import AnimalType from '../../animals/components/AnimalType';

class Zoo extends Component{
  static defaultProps = {
    animalTypes: [
      {type: 'tiger', quantity: 22},
      {type: 'penguine', quantity: 5},
      {type: 'elephant', quantity: 4},
      {type: 'panda', quantity: 3},
      {type: 'chimpanzee', quantity: 6},
      {type: 'aligator', quantity: 3}
    ]
  }
  //pass animalTypes to AnimalTypesTop
  render() {
    const getAnimalType = props => {
      let animal = props.match.params.animal;
      let currentAnimal = this.props.animalTypes.find(
        type => type.type === animal
      )
      return <AnimalType info={currentAnimal} />
    }
    return(
      <div className="Zoo">
        <MainDisplay />
        <Route path='/animals' render={() => <AnimalTypesTop animalTypes={this.props.animalTypes} />} />
        <Route path='/animals/:animal' render={getAnimalType} />
        <Route path='/construction' render={() => <ConstructionTop />} />
      </div>
    )
  }
}

export default Zoo;