import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './AnimalType.css';


class AnimalType extends Component {
  constructor(props) {
    super(props);
    this.handleBuyAnimal = this.handleBuyAnimal.bind(this);
  }
  handleBuyAnimal() {
    this.props.buyAnimal(this.props.type);
  }
  render() {
    return(
      <div className='AnimalType col-4 col-md'>
        <Link to={`/animals/${this.props.type}`}> {this.props.type} </Link>
        <div className='mb-1'>
          <span>Owned: placeholder</span>
        </div>
        <div className='row col-lg-8 offset-lg-2 col-10 offset-1'>
          <button className='btn btn-success' onClick={this.handleBuyAnimal}>Buy</button>
        </div>
        <div className='mt-2 row col-lg-8 offset-lg-2 col-10 offset-1'>
          <button className='btn btn-info mb-4 feed-btn'>Feed all</button>
        </div>
      </div>
    )
  }
}

export default AnimalType;