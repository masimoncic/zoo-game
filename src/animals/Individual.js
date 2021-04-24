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
    const meter = (alive) => {
      if (alive){
        return (<span>{this.props.info.hungerMeter}</span>);
      } else {
        return(<span>Dead</span>)
      }
    }
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
          {this.props.info.alive && 
            <span>placeholder for picture</span>
          }
        </div>
        <div className='individualFoodMeter'>
          {meter(this.props.info.alive)}
        </div> 
        <button className='btn btn-info mb-1' onClick={this.handleFeed}>Feed ({this.props.foodConsumption})</button>
      </div>
    )
  }
}

export default Individual;