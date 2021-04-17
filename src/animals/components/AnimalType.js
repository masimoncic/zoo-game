import React, { Component } from 'react';
import '../styles/AnimalType.css';
import Animal from './Animal';

class AnimalType extends Component{

  render() {
    let animals = [];
    for (let i = 0; i < this.props.info.quantity; i++) {
      animals.push(`${this.props.info.type} ${i + 1}`)
    }
    return(
      <div className="AnimalType row mb-2">
        {animals.map(animal =>
          <div className='col-4 col-md-2'>
            <Animal name={animal} />
          </div>
          )}
      </div>
    )
  }
}

export default AnimalType;