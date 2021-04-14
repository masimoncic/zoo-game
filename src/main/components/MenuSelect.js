import React, { Component } from 'react';
import '../styles/MenuSelect.css';
import AnimalTypesTop from '../../animals/components/AnimalTypesTop';


class MenuSelect extends Component{
  render() {
    return(
      <div className="MenuSelect">
        <p>MenuSelect</p>
        <AnimalTypesTop />
      </div>
    )
  }
}

export default MenuSelect;