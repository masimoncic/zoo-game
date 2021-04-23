import React, { Component } from 'react';
import './Money.css';

class Money extends Component {

  render() {
    return(
      <div className='Money'>
        <p>Money: {this.props.money}</p> 
        <p>Income: {this.props.income}</p>
        <p>Food Owned: {this.props.foodQty}</p>
        <p>Food Cost: {this.props.foodCost}</p>
      </div>
    )
  }
}

export default Money;