import React, { Component } from 'react';
import './Animal.css';


class Animal extends Component{
  render() {
    return(
      <div className="Animal my-2">
        <div className='row'>
          <div className='animalName'>
            <span>{this.props.info.name}</span>
          </div>
          <div className='changeAnimalName'>
            <button className='btn btn-sm btn-secondary'>Rename</button>
          </div>
        </div>
          <div className='animalFoodMeter'>
            <span>{this.props.info.hungerMeter}</span>
          </div> 
          <button className='btn btn-info mb-1'>Feed</button>
      </div>
    )
  }
}

export default Animal;