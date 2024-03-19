import React, { Component } from 'react';
import Pure from '../components/Pure';

class About extends Component {
  constructor(props){
    super(props)
    this.state = {
          counter:0
    }
    this.counter = this.counter.bind(this);
  }
  counter(){
    this.setState((state) => ({
          counter: state.counter+1,
    }));
  }
  render() {
    return (
        <>
          <button className='btn' onClick={this.counter}>Counter {this.state.counter}</button>
          <Pure />
        </>
    );
  }
}

export default About;