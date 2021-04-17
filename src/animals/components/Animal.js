import React, { Component } from 'react';
import '../styles/Animal.css';


class Animal extends Component{
  render() {
    return(
      <div className="Animal my-2">
          <div className='animalName'>
            <span>{this.props.name}</span>
          </div>
          <div className='animalFoodMeter'>
            <span>food meter</span>
          </div> 
          <button className='btn btn-info mb-1'>Feed</button>
      </div>
    )
  }
}

export default Animal;