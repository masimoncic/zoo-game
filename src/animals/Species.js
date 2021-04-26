import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Species.css';


class Species extends Component {
  constructor(props) {
    super(props);
    this.handleBuyAnimal = this.handleBuyAnimal.bind(this);
    this.handleFeedAll = this.handleFeedAll.bind(this);
  }
  handleBuyAnimal() {
    this.props.buyAnimal(this.props.species);
  }
  handleFeedAll() {
    this.props.feedAll(this.props.species)
  }
  render() {
    return(
      <div className='Species col-4 col-md'>
        <Link to={`/animals/${this.props.species}`}> {this.props.species} </Link>
        <div className='mb-1'>
          <span>Owned: {this.props.quantity}</span>
        </div>
        <div className='row col-lg-8 offset-lg-2 col-10 offset-1'>
          <Link to={`/animals/${this.props.species}`} className='buy-btn btn btn-success' onClick={this.handleBuyAnimal}>Buy ${this.props.price}</Link>
        </div>
        <div className='my-2 row col-lg-8 offset-lg-2 col-10 offset-1'>
          <Link to={`/animals/${this.props.species}`} className='feed-btn btn btn-info feed-btn' onClick={this.handleFeedAll}>Feed all</Link>
        </div>
      </div>
    )
  }
}

export default Species;