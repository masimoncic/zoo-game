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
        tigers: [],
        penguines: [],
        elephants: [],
        pandas: [],
        chimpanzees: [],
        aligators: [],
      },
      money: 5000,
      income: 100,
      foodQty: 100,
      foodCost: 200,
    }
    this.buyAnimal = this.buyAnimal.bind(this);
    this.setMoney = this.setMoney.bind(this);
    this.setIncome = this.setIncome.bind(this);
  }
  static defaultProps = {
    //put types in default props, qty and individuals in state
    animalSpecies: {
      tigers: {
        foodConsumption: 20,
        guageIncreaseRate: 4,
        guageDecreasePerFeed: 40,
        price: 300,
        value: 100,
      },
      penguines: {
        foodConsumption: 20,
        guageIncreaseRate: 4,
        guageDecreasePerFeed: 40,
        price: 300,
        value: 100,
      },
      elephants: {
        foodConsumption: 20,
        guageIncreaseRate: 4,
        guageDecreasePerFeed: 40,
        price: 300,
        value: 100,
      },
      pandas: {
        foodConsumption: 20,
        guageIncreaseRate: 4,
        guageDecreasePerFeed: 40,
        price: 300,
        value: 100,
      },
      chimpanzees: {
        foodConsumption: 20,
        guageIncreaseRate: 4,
        guageDecreasePerFeed: 40,
        price: 300,
        value: 100,
      },
      aligators: {
        foodConsumption: 20,
        guageIncreaseRate: 4,
        guageDecreasePerFeed: 40,
        price: 300,
        value: 100,
      },
    }
  }
  calculateMoney(st){
    let newMoney = st.money + st.income;
    return { money: newMoney }
  }
  setMoney() {
    this.setState(this.calculateMoney);
  }
  calculateIncome(st) {
    let newIncome = st.income;
    return { income: newIncome }
  }
  setIncome(){
    this.setState(this.calculateIncome);
  }

  buyAnimal(species) { 
    if (this.state.money >= this.props.animalSpecies[species].price) {
      const newAnimals = {...this.state.animals}
      const newIndividuals = [...this.state.animals[species], {name: species.substr(0, species.length-1), hungerMeter:'70'}]
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
  //pass animalTypes to AnimalTypesTop
  render() {
    const getAnimalSpecies = props => {
      let species = props.match.params.species;
      let individuals = this.state.animals[species];
      return <AnimalContainer animal={species} individuals={individuals} />
    }
    return(
      <div className="Zoo">
        <MainDisplay 
        money={this.state.money} 
        income={this.state.income} 
        foodQty={this.state.foodQty} 
        foodCost={this.state.foodCost}
        setMoney={this.setMoney}
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