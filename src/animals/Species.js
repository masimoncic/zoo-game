import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Species.css';


class Species extends Component {
  constructor(props) {
    super(props);
    this.handleBuyAnimal = this.handleBuyAnimal.bind(this);
  }
  handleBuyAnimal() {
    this.props.buyAnimal(this.props.species);
  }
  render() {
    return(
      <div className='Species col-4 col-md'>
        <Link to={`/animals/${this.props.species}`}> {this.props.species} </Link>
        <div className='mb-1'>
          <span>Owned: {this.props.quantity}</span>
        </div>
        <div className='row col-lg-8 offset-lg-2 col-10 offset-1'>
          <button className='buy-btn btn btn-success' onClick={this.handleBuyAnimal}>Buy ${this.props.price}</button>
        </div>
        <div className='my-2 row col-lg-8 offset-lg-2 col-10 offset-1'>
          <button className='feed-btn btn btn-info feed-btn'>Feed all</button>
        </div>
      </div>
    )
  }
}

export default Species;