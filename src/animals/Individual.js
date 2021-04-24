import React, { Component } from 'react';
import './Individual.css';


class Individual extends Component{
  constructor(props) {
    super(props)
    this.handleFeed = this.handleFeed.bind(this);
  }
  handleFeed() {
    this.props.feedAnimal(this.props.info, this.props.species);
  }
  render() {
    return(
      <div className="Individual my-2">
        <div className='row'>
          <div className='individualName'>
            <span>{this.props.info.name}</span>
          </div>
          <div className='changeIndividualName'>
            <button className='btn btn-sm btn-secondary'>Rename</button>
          </div>
        </div>
        <div className='individualPicture'>
          <span>placeholder for picture</span>
        </div>
        <div className='individualFoodMeter'>
          <span>{this.props.info.hungerMeter}</span>
        </div> 
        <button className='btn btn-info mb-1' onClick={this.handleFeed}>Feed ({this.props.foodConsumption})</button>
      </div>
    )
  }
}

export default Individual;