import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './AnimalTypesTop.css';


class AnimalTypesTop extends Component{
  constructor(props) {
    super(props);
    this.handleBuy = this.handleBuy.bind(this);
  }
  handleBuy() {
    this.props.buyAnimal();
  }
  render() {
    return(
      <div className="AnimalTypesTop row mb-3">
        <div className='row'>
        {this.props.animals.map(type =>
          <div className='col-4 col-md'>
            <Link to={`/animals/${type.type}`}> {type.type}s </Link>
            <div className='mb-1'>
              <span>Owned: {type.quantity}</span>
            </div>
            <div className='row col-lg-8 offset-lg-2 col-10 offset-1'>
             <button className='btn btn-success' onClick={this.handleBuy} >Buy 1</button>
            </div>
            <div className='mt-2 row col-lg-8 offset-lg-2 col-10 offset-1'>
              <button className='btn btn-info mb-4 feed-btn'>Feed all</button>
            </div>


          </div>
        )}
        </div>
      </div>
    )
  }
}

export default AnimalTypesTop;