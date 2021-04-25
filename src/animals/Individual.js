import React, { Component } from 'react';
import './Individual.css';


class Individual extends Component{
  constructor(props) {
    super(props)
    this.state = {
      rename: false
    }
    this.handleFeed = this.handleFeed.bind(this);
  }
  componentDidUpdate() {
    console.log(!this.state.rename);
  }
  handleFeed() {
    this.props.feedAnimal(this.props.info, this.props.species);
  }
  render() {
    const living = (alive) => {
      if (alive) {
        return(
          <div className='alive'>
            {renameDisplay(this.props.rename)}
            <div className='individual-food-meter'>
              <div>{this.props.info.hungerMeter}</div>
              <button className='btn btn-info' onClick={this.handleFeed}>Feed ({this.props.foodConsumption})</button>
            </div>
          </div>
        )
      } else {
        return (
          <div className='dead'>
            <h4>Dead</h4>
            <div>
              <button className='btn btn-warning'>Remove Body</button>
            </div>
          </div>
        )
      }
    }
    const renameDisplay = (rename) => {
      if (!rename) {
        return (
          <div className='renameDisplay'>
            <div className='changeIndividualName'>
              <button className='btn btn-sm btn-secondary'>Rename</button>
            </div>
            <div className='imgDisplay'>
              <img src={this.props.imgUrl} className='imgDisplay' alt={`${this.props.species} picture`}/>
            </div>
         </div> 
        )
      }
    }
    return(
      <div className="Individual my-1">
        <div className='individual-name'>
          <h6>{this.props.info.name}</h6>
        </div>
        {living(this.props.info.alive)}
      </div>
    )
  }
}

export default Individual;