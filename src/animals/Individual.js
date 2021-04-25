import React, { Component } from 'react';
import './Individual.css';


class Individual extends Component{
  constructor(props) {
    super(props)
    this.state = {
      rename: false
    }
    this.handleRename = this.handleRename.bind(this);
    this.handleFeed = this.handleFeed.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }
  handleRename() {
    this.setState({
      rename: true
    });
  }
  handleCancel() {
    this.setState({
      rename: false
    })
  }
  handleFeed() {
    this.props.feedAnimal(this.props.info, this.props.species);
  }

  render() {
    const living = () => {
      if (this.props.info.alive) {
        return(
          <div className='alive'>
            {renameDisplay()}
            <div className='individual-food-meter'>
              <div className='meter-container'>
                <div className='meter' style={{width: `${this.props.info.hungerMeter}%`}}></div>
                <div className='meter-text'>{this.props.info.hungerMeter}/100</div>
              </div>
              <button className='btn btn-info feed-btn' onClick={this.handleFeed}>Feed ({this.props.foodConsumption})</button>
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
    const renameDisplay = () => {
      if (this.state.rename) {
        return (
          <div className='renaming'>
            <input></input>
            <button>Confirm</button>
            <button className='btn btn-warning' onClick={this.handleCancel}>Cancel</button>
          </div>  
        )
      } else {
        return(
          <div className='name-and-image'>
            <div className='changeIndividualName'>
              <button className='btn btn-sm btn-secondary' onClick={this.handleRename}>Rename</button>
            </div>
            <div className='imgDisplay'>
              <img src={this.props.imgUrl} className='imgDisplay' alt={`${this.props.species}`}/>
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
        {living()}
      </div>
    )
  }
}

export default Individual;