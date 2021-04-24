import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import {v4 as uuidv4} from 'uuid';
import SpeciesContainer from '../animals/SpeciesContainer';
import ConstructionTop from '../construction/ConstructionTop';
import './Zoo.css';
import MainDisplay from './MainDisplay';
import IndividualContainer from '../animals/IndividualContainer';


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
        tigers: [],
        penguines: [],
        elephants: [],
        pandas: [],
        chimpanzees: [],
        aligators: [],
      },
      money: 50000,
      income: 100,
      foodQty: 100,
      foodCost: 200,
    }
    this.setIncome = this.setIncome.bind(this);
    this.newDay = this.newDay.bind(this);
    this.buyFood = this.buyFood.bind(this);
    this.buyAnimal = this.buyAnimal.bind(this);
    this.feedAnimal = this.feedAnimal.bind(this);

  }
  static defaultProps = {
    //put types in default props, qty and individuals in state
    animalSpecies: {
      tigers: {
        foodConsumption: 2,
        guageIncreaseRate: 4,
        guageDecreasePerFeed: 40,
        price: 500,
        value: 100,
      },
      penguines: {
        foodConsumption: 6,
        guageIncreaseRate: 4,
        guageDecreasePerFeed: 40,
        price: 1000,
        value: 100,
      },
      elephants: {
        foodConsumption: 20,
        guageIncreaseRate: 4,
        guageDecreasePerFeed: 40,
        price: 5000,
        value: 100,
      },
      pandas: {
        foodConsumption: 20,
        guageIncreaseRate: 4,
        guageDecreasePerFeed: 40,
        price: 10000,
        value: 100,
      },
      chimpanzees: {
        foodConsumption: 20,
        guageIncreaseRate: 4,
        guageDecreasePerFeed: 40,
        price: 100,
        value: 100,
      },
      aligators: {
        foodConsumption: 20,
        guageIncreaseRate: 4,
        guageDecreasePerFeed: 40,
        price: 30000,
        value: 100,
      },
    }
  }
  //methods for multipe components
  setIncome(){
    this.setState(st => {
      let newIncome = st.income;
      return { income: newIncome };
    });
  }
  //methods for MainDisplay
  newDay() {
    this.setState(st => {
      return { money : st.money + st.income, foodCost: Math.floor(st.foodCost * 1.1)}
    });
  }
  buyFood(num) {
    let totalCost = this.state.foodCost * num;
    if (totalCost <= this.state.money) {
      this.setState(st => {
        return { money: st.money - totalCost, foodQty: st.foodQty + num };
      })
    }
  }
  //mehtods for Animals
  buyAnimal(species) { 
    if (this.state.money >= this.props.animalSpecies[species].price) {
      const newAnimals = {...this.state.animals}
      const newIndividuals = [...this.state.animals[species], {name: species.substr(0, species.length-1), hungerMeter:'70', id: uuidv4()}]
      newAnimals[species] = newIndividuals;
      let newMoney = this.state.money - this.props.animalSpecies[species].price;
      //newIncome = this.calculateIncome
      this.setState({
        animals: newAnimals,
        money: newMoney,
        //income: newIncome
      })
    }
  }
  feedAnimal(individual, species) {
    const newIndividual = {...individual, hungerMeter: Math.max(individual.hungerMeter - this.props.animalSpecies[species].guageDecreasePerFeed, 0)}
    const newIndividuals= this.state.animals[species].map(el => (el.id === individual.id ? newIndividual : el))
    const newAnimals = {...this.state.animals, [species]: newIndividuals};
    const newFoodQty = this.state.foodQty - this.props.animalSpecies[species].foodConsumption
    this.setState({
      animals: newAnimals,
      foodQty: newFoodQty
    })

  }
  //pass animalTypes to AnimalTypesTop
  render() {
    const getAnimalSpecies = props => {
      let species = props.match.params.species;
      let individuals = this.state.animals[species];
      return <IndividualContainer 
        species={species} 
        individuals={individuals} 
        feedAnimal={this.feedAnimal}
        animalSpecies={this.props.animalSpecies}
      />
    }
    return(
      <div className="Zoo">
        <MainDisplay 
        money={this.state.money} 
        income={this.state.income} 
        foodQty={this.state.foodQty} 
        foodCost={this.state.foodCost}
        newDay={this.newDay}
        buyFood={this.buyFood}

        />
        <Route path='/animals' render={() => 
        <SpeciesContainer 
          animals={this.state.animals}
          buyAnimal={this.buyAnimal}
          animalSpecies = {this.props.animalSpecies}
        />} />
        <Route path='/animals/:species' render={getAnimalSpecies} />
        <Route path='/construction' render={() => <ConstructionTop />} />
      </div>
    )
  }
}

export default Zoo;