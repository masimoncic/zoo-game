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
      animals: {
        tigers: [],
        penguines: [],
        elephants: [],
        pandas: [],
        chimpanzees: [],
        aligators: [],
      },
      money: 50000,
      income: 500,
      baseIncome: 500,
      foodQty: 100,
      foodCost: 200,
    }
    this.setIncome = this.setIncome.bind(this);
    this.hungerTick = this.hungerTick.bind(this);
    this.newDay = this.newDay.bind(this);
    this.buyFood = this.buyFood.bind(this);
    this.buyAnimal = this.buyAnimal.bind(this);
    this.feedAnimal = this.feedAnimal.bind(this);

  }
  static defaultProps = {
    //put types in default props, qty and individuals in state
    speciesData: {
      tigers: {
        foodConsumption: 2,
        guageDecreaseRate: 4,
        guageIncreasePerFeed: 20,
        price: 500,
        value: 100,
      },
      penguines: {
        foodConsumption: 6,
        guageDecreaseRate: 4,
        guageIncreasePerFeed: 40,
        price: 1000,
        value: 100,
      },
      elephants: {
        foodConsumption: 20,
        guageDecreaseRate: 4,
        guageIncreasePerFeed: 40,
        price: 5000,
        value: 100,
      },
      pandas: {
        foodConsumption: 20,
        guageDecreaseRate: 4,
        guageIncreasePerFeed: 40,
        price: 10000,
        value: 100,
      },
      chimpanzees: {
        foodConsumption: 20,
        guageDecreaseRate: 4,
        guageIncreasePerFeed: 40,
        price: 100,
        value: 100,
      },
      aligators: {
        foodConsumption: 20,
        guageDecreaseRate: 4,
        guageIncreasePerFeed: 40,
        price: 30000,
        value: 100,
      },
    }
  }
  //methods for multipe components

  //methods for MainDisplay
  setIncome(){
    let newIncome = 0;
    for (let species in this.state.animals) {
      newIncome += this.state.animals[species].length * this.props.speciesData[species].value;
    }
    newIncome += this.state.baseIncome;
    this.setState({
      income: newIncome
    });
  } 
  hungerTick() {
    let newAnimals = {
    };
    for (let species in this.state.animals) {
      let decrease = this.props.speciesData[species].guageDecreaseRate;
      let newSpecies = this.state.animals[species].map(individual => ({...individual, hungerMeter: Math.max(0, individual.hungerMeter - decrease)}))
      let newIndividuals = [];
      for (let individual of this.state.animals[species]) {
        let meter = individual.hungerMeter - decrease;
        if (meter > 0) {
          newIndividuals.push({...individual, hungerMeter: meter});
        }
        else {
          newIndividuals.push({...individual, alive: false})
        }
      }
      newAnimals[species] = newIndividuals;
    }
    this.setState({ animals: newAnimals });
  }
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
    if (this.state.money >= this.props.speciesData[species].price) {
      const newAnimals = {...this.state.animals}
      const newIndividuals = [...this.state.animals[species], {name: species.substr(0, species.length-1), hungerMeter:70, alive: true, id: uuidv4()}]
      newAnimals[species] = newIndividuals;
      let newMoney = this.state.money - this.props.speciesData[species].price;
      //newIncome = this.calculateIncome
      this.setState({
        animals: newAnimals,
        money: newMoney,
      })
    }
  }
  feedAnimal(individual, species) {
    const newIndividual = {...individual, hungerMeter: Math.min(individual.hungerMeter + this.props.speciesData[species].guageIncreasePerFeed, 100)}
    
    const newIndividuals= this.state.animals[species].map(el => (el.id === individual.id ? newIndividual : el))
    const newAnimals = {...this.state.animals, [species]: newIndividuals};
    const newFoodQty = this.state.foodQty - this.props.speciesData[species].foodConsumption
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
        speciesData={this.props.speciesData}
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
        setIncome={this.setIncome}
        hungerTick={this.hungerTick}
        buyFood={this.buyFood}

        />
        <Route path='/animals' render={() => 
        <SpeciesContainer 
          animals={this.state.animals}
          buyAnimal={this.buyAnimal}
          speciesData = {this.props.speciesData}
        />} />
        <Route path='/animals/:species' render={getAnimalSpecies} />
        <Route path='/construction' render={() => <ConstructionTop />} />
      </div>
    )
  }
}

export default Zoo;