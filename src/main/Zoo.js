import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import AnimalTypesTop from '../animals/AnimalTypesTop';
import ConstructionTop from '../construction/ConstructionTop';
import './Zoo.css';
import MainDisplay from './MainDisplay';
import AnimalContainer from '../animals/AnimalContainer';


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
      animals: {
        tiger: {type: 'tiger', individuals: [{name: 'tiger1', hungerMeter: 70}]},
        penguine: {type: 'penguine', individuals: []},
        elephant: {type: 'elephant', individuals: []},
        panda: {type: 'panda', individuals: []},
        chimpanzee: {type: 'chimpanzee', individuals: []},
        aligator: {type: 'aligator', individuals: []}
      },

    
       /*
       tiger: [{name: 'tiger1', hungerMeter: 65}],
       penguine: [],
       elephant: [],
       panda: [],
       chimpanzee: [],
       */
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

  buyAnimal(a) { 
    const newIndividuals = [...this.state.animals[a].individuals, {name:`new type is ${a}`, hungerMeter:'70'}]
    this.setState({
      //redo this
      animals: {
        tiger: {type: 'tiger', individuals: newIndividuals},
        penguine: {type: 'penguine', individuals: []},
        elephant: {type: 'elephant', individuals: []},
        panda: {type: 'panda', individuals: []},
        chimpanzee: {type: 'chimpanzee', individuals: []},
        aligator: {type: 'aligator', individuals: []}
      }
    })
  }
  //pass animalTypes to AnimalTypesTop
  render() {
    const getAnimalType = props => {
      let animal = props.match.params.animal;
      let currentAnimal = this.state.animals[animal];
      return <AnimalContainer info={currentAnimal} />
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