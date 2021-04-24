import React, { Component } from 'react';
import './MainDisplay.css';
import MenuSelect from './MenuSelect';
import Time from './Time';
import Food from './Food';


class MainDisplay extends Component{
  render() {
    return(
      <div className="MainDisplay mt-3">
        <div className='row'>
          <div className='col-3'>
            <div className='col col-lg-8'>
              <Time newDay = {this.props.newDay} />
            </div>
          </div>
            {/*
            <div className='col-6 col-lg-5 offset-lg-1'>
              <p>MainDisplay</p>
            </div>
            */}
          <div className=' money col-5 row'>
            <div className='text-left col-12 col-lg-6'>
              <h6>Money: ${this.props.money}</h6>
            </div>
            <div className='text-left income-display col-12 col-lg-6'>
              <h6>Income: ${this.props.income}</h6>
            </div>
          </div>
          <div className='food col-4'>
          <Food
            foodQty={this.props.foodQty}
            foodCost={this.props.foodCost}
            buyFood={this.props.buyFood}
          />
        </div>

      </div>

            <div className='my-3'>------------------------------------------</div>
            <div>
              Placeholder
            </div>
            <div className='my-3'>------------------------------------------</div>
        <MenuSelect />
      </div>
    )
  }
}

export default MainDisplay;