import React, { Component } from 'react';
import './Time.css';

class Time extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hour: 5,
      peroid: 'a.m.',
      day: 1,
    }
    this.timer = this.timer.bind(this);
    this.handleSlow = this.handleSlow.bind(this);
  }
  componentDidMount() {
    setInterval(() => {
      this.timer();
    }, 400)
  }
  setTime(st) {
    let newHour = st.hour +1;
    let newPeroid = st.peroid;
    let newDay = st.day;
    //call hungerTick
    if (newHour > 12) {
      newHour = 1;
    } 
    if(newHour === 12) {
      if (st.peroid === 'a.m.') {
        newPeroid = 'p.m.';
      } else {
        newPeroid = 'a.m.'
        newDay = st.day + 1;
      } 
    }
    return { hour: newHour, peroid: newPeroid, day: newDay};
  }
  timer() {
      this.setState(this.setTime);
      console.log('tick');
      if (this.state.hour === 12 && this.state.peroid === 'a.m.') {
        this.props.setMoney();
      }
  }
  handleSlow() {
    clearInterval(this.state.timerId);
    let timerId = setInterval(() => {
      this.timer();
    })
    this.setState(st => {
      return {timerId: timerId}
    })
  }
  render() {
    return(
      <div className="Time">

        <div className="speed-buttons row">
          <div className='offset-1 col-8 col-lg-4 offset-lg-0'>
            <button className="btn btn-secondary" onClick={this.handleSlow}>Slow</button>
          </div>
          <div className='offset-1 col-8 col-lg-4 offset-lg-0'>
            <button className="btn btn-secondary">Medium</button>  
          </div>
          <div className='offset-1 col-8 col-lg-4 offset-lg-0'>
            <button className="btn btn-secondary">Fast</button>
          </div>
        </div>
        <div className="display-time mt-2">
          <h6>{this.state.hour} {this.state.peroid} Day {this.state.day}</h6>
        </div>
      </div>
    )
  }

}

export default Time;