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
    this.getTime = this.getTime.bind(this);
    this.timer = this.timer.bind(this);
    this.handleSlow = this.handleSlow.bind(this);
    this.handleMedium = this.handleMedium.bind(this);
    this.handleFast = this.handleFast.bind(this);
  }
  componentDidMount() {
    this.intervalId = setInterval(this.timer, 1200)
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  getTime(st) {
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
    let time = this.getTime(this.state);
    this.props.setIncome();
    if (time.hour === 12 && time.peroid === 'a.m.') {
      this.props.newDay();
    }
    this.setState(time);
  }
  handleSlow() {
    clearInterval(this.intervalId);
    this.intervalId = setInterval(this.timer, 800)
  }
  handleMedium() {
    clearInterval(this.intervalId);
    this.intervalId = setInterval(this.timer, 400)
  }
  handleFast() {
    clearInterval(this.intervalId);
    this.intervalId = setInterval(this.timer, 50)
  }
  render() {
    return(
      <div className="Time">

        <div className="speed-buttons row">
          <div className='offset-1 col-8 col-lg-4 offset-lg-0'>
            <button className="btn btn-secondary" onClick={this.handleSlow}>Slow</button>
          </div>
          <div className='offset-1 col-8 col-lg-4 offset-lg-0'>
            <button className="btn btn-secondary" onClick={this.handleMedium}>Medium</button>  
          </div>
          <div className='offset-1 col-8 col-lg-4 offset-lg-0'>
            <button className="btn btn-secondary" onClick={this.handleFast}>Fast</button>
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