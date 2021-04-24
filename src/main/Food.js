import React, { Component } from 'react';
import './Food.css';
import BuyFood from './BuyFood';

class Food extends Component {
  render() {
    return(
      <div className='Food'>
        <h6>Food Owned: {this.props.foodQty}</h6>
        <h6>Food Cost: {this.props.foodCost}</h6>
        <BuyFood foodCost = {this.props.foodCost} numToBuy={1} buyFood={this.props.buyFood}/>
        <BuyFood foodCost = {this.props.foodCost} numToBuy={10} buyFood={this.props.buyFood}/>
        {/*
        <BuyFood foodCost = {this.props.foodCost} numToBuy={50} buyFood={this.props.buyFood}/>
        */}
      </div>
    )
  }
}

export default Food;