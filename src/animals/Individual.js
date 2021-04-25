import React, { Component } from 'react';
import './Individual.css';


class Individual extends Component{
  constructor(props) {
    super(props)
    this.state = {
      newName : '',
      rename: false
    }
    this.handleRename = this.handleRename.bind(this);
    this.handleFeed = this.handleFeed.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleNameSubmit = this.handleNameSubmit.bind(this);
  }
  handleRename() {
    this.setState({
      rename: true
    });
  }
  handleCancel() {
    this.setState({
      newName: '',
      rename: false
    })
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }
  handleNameSubmit(evt) {
    evt.preventDefault();
    this.props.renameAnimal(this.props.info, this.props.species, this.state.newName)
    this.setState({
      newName: '',
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
            <form onSubmit={this.handleNameSubmit}>
              <label htmlFor='newName' className='form-label'>Enter Name</label>
              <input name='newName' value={this.state.newName} onChange={this.handleChange}/>
              <div className='rename-button'>
                <button className='btn btn-success'>Confirm</button>
              </div>
            </form>
            <div className='rename-button'>
              <button className='btn btn-warning cancel-btn' onClick={this.handleCancel}>Cancel</button>
            </div>
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