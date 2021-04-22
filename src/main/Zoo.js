import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import SpeciesContainer from '../animals/SpeciesContainer';
import ConstructionTop from '../construction/ConstructionTop';
import './Zoo.css';
import MainDisplay from './MainDisplay';
import AnimalContainer from '../animals/IndividualContainer';


//add keys
class Zoo extends Component{
  constructor(props) {
    super(props);
    this.state = {
      /*
      animals: [
        {type: 'tiger', individuals: [
          {name: 'tiger1', hungerMeter: 65}
        ]},
        {type: 'penguine', individuals: []},
        {type: 'elephant', individuals: []},
        {type: 'panda', individuals: []},
        {type: 'chimpanzee', individuals: []},
        {type: 'aligator', individuals: []}
      ]*/
  
      //try to remove 'type'
      /*
      animals: {
        tiger: {type: 'tiger', individuals: [{name: 'tiger', hungerMeter: 70}]},
        penguine: {type: 'penguine', individuals: []},
        elephant: {type: 'elephant', individuals: []},
        panda: {type: 'panda', individuals: []},
        chimpanzee: {type: 'chimpanzee', individuals: []},
        aligator: {type: 'aligator', individuals: []}
      },*/
      animals: {
        tigers: [{name: 'tiger', hungerMeter: 65}],
        penguines: [],
        elephants: [],
        pandas: [],
        chimpanzees: [],
        aligators: [],
      },
      money: 1000,
      income: 100,
    }
    this.buyAnimal = this.buyAnimal.bind(this);
  }
  static defaultProps = {
    //put types in default props, qty and individuals in state
    animalTypes: {
      tigers: {
        foodConsumption: 20,
        hungerIncreaseRate: 4,
        hungerDecreasePerFeed: 40,
        price: 300,
      }
    }
  }

  buyAnimal(species) { 
    const newIndividuals = [...this.state.animals[species], {name:`new type is ${species.substr(0, species.length-1)}`, hungerMeter:'70'}]
    this.setState({
      //need animals[animal] = newIndividuals
      animals: {
        tigers: newIndividuals,
        penguines: [],
        elephants: [],
        pandas: [],
        chimpanzees: [],
        aligators: [],
      }
    })
  }
  //pass animalTypes to AnimalTypesTop
  render() {
    const getAnimalSpecies = props => {
      let species = props.match.params.species;
      let individuals = this.state.animals[species];
      return <AnimalContainer animal={species} individuals={individuals} />
    }
    return(
      <div className="Zoo">
        <MainDisplay money={this.state.money} income={this.state.income}/>
        <Route path='/animals' render={() => 
        <SpeciesContainer 
          animals={this.state.animals}
          buyAnimal={this.buyAnimal}
        />} />
        <Route path='/animals/:species' render={getAnimalSpecies} />
        <Route path='/construction' render={() => <ConstructionTop />} />
      </div>
    )
  }
}

export default Zoo;