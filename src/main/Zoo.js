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
        chimpanzees: [],
        tigers: [],
        penguines: [],
        aligators: [],
        pandas: [],
        elephants: [],
      },
      money: 5000,
      income: 500,
      baseIncome: 500,
      foodQty: 10,
      foodCost: 100,
    }
    this.setIncome = this.setIncome.bind(this);
    this.hungerTick = this.hungerTick.bind(this);
    this.newDay = this.newDay.bind(this);
    this.buyFood = this.buyFood.bind(this);
    this.buyAnimal = this.buyAnimal.bind(this);
    this.feedAnimal = this.feedAnimal.bind(this);
    this.renameAnimal = this.renameAnimal.bind(this);
    this.countLiving = this.countLiving.bind(this);
    this.feedAll = this.feedAll.bind(this);
  }
  static defaultProps = {
    //put types in default props, qty and individuals in state
    speciesData: {
      chimpanzees: {
        foodConsumption: 4,
        guageDecreaseRate: 1,
        guageIncreasePerFeed: 40,
        price: 300,
        value: 300,
        imgUrl: 'https://images.unsplash.com/photo-1594068304148-3e33049a2651?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      },
      tigers: {
        foodConsumption: 10,
        guageDecreaseRate: 3,
        guageIncreasePerFeed: 60,
        price: 1000,
        value: 3000,
        imgUrl: 'https://images.unsplash.com/photo-1549480017-d76466a4b7e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1038&q=80',
      },
      penguines: {
        foodConsumption: 1,
        guageDecreaseRate: 1,
        guageIncreasePerFeed: 60,
        price: 3000,
        value: 1000,
        imgUrl: 'https://images.unsplash.com/photo-1518734040184-adad8323b124?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1889&q=80',
      },
      aligators: {
        foodConsumption: 10,
        guageDecreaseRate: 3,
        guageIncreasePerFeed: 40,
        price: 5000,
        value: 10000,
        imgUrl: 'https://images.unsplash.com/photo-1520542099817-0d19524eccca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
      },
      pandas: {
        foodConsumption: 1,
        guageDecreaseRate: 1,
        guageIncreasePerFeed: 30,
        price: 50000,
        value: 20000,
        imgUrl: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80',
      },
      elephants: {
        foodConsumption: 30,
        guageDecreaseRate: 3,
        guageIncreasePerFeed: 30,
        price: 80000,
        value: 150000,
        imgUrl: 'https://images.unsplash.com/photo-1581852017103-68ac65514cf7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80',
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
  countLiving(species) {
    let living = 0;
    for (let individual of this.state.animals[species]) {
      if (individual.alive) {
        living ++;
      }
    }
    return living;
  }
  feedAll(species) {
    const living = this.countLiving(species);
    const foodConsumed = this.props.speciesData[species].foodConsumption * living;
    if (this.state.foodQty >= foodConsumed) {
      const newFoodQty = this.state.foodQty - foodConsumed;
      const newIndividuals = this.state.animals[species].map(el => (
        el.alive ? {...el, hungerMeter: Math.min(el.hungerMeter + this.props.speciesData[species].guageIncreasePerFeed, 100)} : el
      ));
      const newAnimals = {...this.state.animals, [species]: newIndividuals};
      this.setState({
        animals: newAnimals,
        foodQty: newFoodQty
      })
    }
  }
  feedAnimal(individual, species) {
    const foodConsumed = this.props.speciesData[species].foodConsumption;
    if (this.state.foodQty >= foodConsumed && individual.alive) {
      const newFoodQty = this.state.foodQty - this.props.speciesData[species].foodConsumption
      const newIndividual = {...individual, hungerMeter: Math.min(individual.hungerMeter + this.props.speciesData[species].guageIncreasePerFeed, 100)}
      const newIndividuals= this.state.animals[species].map(el => (el.id === individual.id ? newIndividual : el))
      const newAnimals = {...this.state.animals, [species]: newIndividuals};
      this.setState({
        animals: newAnimals,
        foodQty: newFoodQty
      })
    }
  }
  renameAnimal(individual, species, newName) {
    const newIndividual = {...individual, name: newName}
    const newIndividuals = this.state.animals[species].map(el => (el.id === individual.id? newIndividual : el));
    const newAnimals = {...this.state.animals, [species]: newIndividuals};
    this.setState({
      animals: newAnimals
    })
  }

  //pass animalTypes to AnimalTypesTop
  render() {
    const getAnimalSpecies = props => {
      let species = props.match.params.species;
      let individuals = this.state.animals[species];
      return <IndividualContainer 
        speciesData={this.props.speciesData}
        species={species} 
        individuals={individuals} 
        feedAnimal={this.feedAnimal}
        renameAnimal={this.renameAnimal}

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
          feedAll={this.feedAll}
          speciesData = {this.props.speciesData}
        />} />
        <Route path='/animals/:species' render={getAnimalSpecies} />
        <Route path='/construction' render={() => <ConstructionTop />} />
      </div>
    )
  }
}

export default Zoo;