import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import AnimalTypesTop from '../animals/AnimalTypesTop';
import ConstructionTop from '../construction/components/ConstructionTop';
import './Zoo.css';
import MainDisplay from './MainDisplay';
import AnimalType from '../animals/AnimalType';

class Zoo extends Component{
  constructor(props) {
    super(props);
    this.state = {
      animals: [
        {type: 'tiger', individuals: [
          {name: 'tiger1', hungerMeter: 65}
        ]},
        {type: 'penguine', individuals: []},
        {type: 'elephant', individuals: []},
        {type: 'panda', individuals: []},
        {type: 'chimpanzee', individuals: []},
        {type: 'aligator', individuals: []}
      ],
      money: 1000,
      income: 100,
    }
    this.buyAnimal = this.buyAnimal.bind(this);
  }
  static defaultProps = {
    //put types in default props, qty and individuals in state
    animalTypes: {
      tiger: {
        foodConsumption: 20,
        hungerIncreaseRate: 4,
        hungerDecreasePerFeed: 40,
        price: 300,
      }
    }
  }

  buyAnimal(type) {
    const newIndividuals = [...this.state.animals[0].individuals, {name:'new tiger', hungerMeter:'70'}]
    this.setState({
      //need to change the state to add a new element to animals.individuals
      animals: [
        {type: 'tiger', individuals: [
          {name: 'new', hungerMeter: 65}
        ]},
        {type: 'penguine', individuals: []},
        {type: 'elephant', individuals: []},
        {type: 'panda', individuals: []},
        {type: 'chimpanzee', individuals: []},
        {type: 'aligator', individuals: []}
      ]
    })
  }
  //pass animalTypes to AnimalTypesTop
  render() {
    const getAnimalType = props => {
      let animal = props.match.params.animal;
      let currentAnimal = this.state.animals.find(
        type => type.type === animal
      )
      return <AnimalType info={currentAnimal} />
    }
    return(
      <div className="Zoo">
        <MainDisplay money={this.state.money} income={this.state.income}/>
        <Route path='/animals' render={() => 
        <AnimalTypesTop 
          animals={this.state.animals}
          buyAnimal={this.buyAnimal}
        />} />
        <Route path='/animals/:animal' render={getAnimalType} />
        <Route path='/construction' render={() => <ConstructionTop />} />
      </div>
    )
  }
}

export default Zoo;