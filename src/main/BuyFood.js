import React, { Component } from 'react';
import './BuyFood.css';

class BuyFood extends Component {
  constructor(props) {
    super(props);
    this.handleBuyFood = this.handleBuyFood.bind(this);
  }
  handleBuyFood() {
    this.props.buyFood(this.props.numToBuy)
  }
  render() {
    return(
      <div className='BuyFood'>
        <button className='btn btn-success mb-2' onClick={this.handleBuyFood}>Buy {this.props.numToBuy}: ${this.props.numToBuy * this.props.foodCost}</button>
      </div>
    )
  }
}

export default BuyFood;