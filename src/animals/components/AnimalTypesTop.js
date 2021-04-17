import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/AnimalTypesTop.css';


class AnimalTypesTop extends Component{
  render() {
    return(
      <div className="AnimalTypesTop row mb-3">
        <div className='row'>
        {this.props.animalTypes.map(type =>
          <div className='col-4 col-md'>
            <Link to={`/animals/${type.type}`}> {type.type}s </Link>
            <div className='mb-1'>
              <span>Owned: {type.quantity}</span>
            </div>
            <div className='row col-lg-8 offset-lg-2 col-10 offset-1'>
             <btn className='btn btn-success'>Buy 1</btn>
            </div>
            <div className='mt-2 row col-lg-8 offset-lg-2 col-10 offset-1'>
              <btn className='btn btn-info mb-4 feed-btn'>Feed all</btn>
            </div>


          </div>
        )}
        </div>
      </div>
    )
  }
}

export default AnimalTypesTop;