import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/MenuSelect.css';


class MenuSelect extends Component{
  render() {
    return(
        <div className="MenuSelect mb-3 row">
          <div className='col py-2'>
            <Link to='/animals'>Animals</Link>
          </div>
          <div className='col py-2'>
            <Link to='/construction'>construction</Link>
          </div>
          <div className='col py-2'>
            <Link to='/#'>placeholder</Link>
          </div>
          <div className='col py-2'>
            <Link to='/#'>placeholder</Link>
          </div>
        </div>
    )
  }
}

export default MenuSelect;