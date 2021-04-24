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
    const imgDisplay = (alive) => {
      if (alive) {
        return (<img src={this.props.imgUrl} className='imgDisplay'/>)
      } else {
        return (
          <div className='imgDisplay'>
            <button className='btn btn-warning'>Remove Body</button>
          </div>
        )
      }
    }
    return(
      <div className="Individual my-2">
        <div className='row'>
          <div className='individualName'>
            <span>{this.props.info.name}</span>
          </div>
          <div className='changeIndividualName my-1'>
            <button className='btn btn-sm btn-secondary'>Rename</button>
          </div>
        </div>
        <div className='individualImg'>
          {imgDisplay(this.props.info.alive)}
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