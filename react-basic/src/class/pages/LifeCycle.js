import React, { Component } from 'react'
import UnMount from '../components/UnMount'

export default class LifeCycle extends Component {
  constructor(props){
      super(props)
      this.state = {
            counter:0,
            toggle:true,
            ignoreProps:0,
            value:''
      }
      this.handleInput = this.handleInput.bind(this)
      this.increment = ()=>this.setState({counter:this.state.counter+1})
      this.decrement = ()=>this.setState({counter:this.state.counter-1})
      this.toggle = ()=>this.setState({toggle:!this.state.toggle})  
      this.ignoreProps = ()=>this.setState({ignoreProps:Math.floor(Math.random() * 3)})
}
  handleInput(e){
       this.setState({value:e.target.value})
  }
  render() {
    return (
      <>
      <h3>Life Cycle Method</h3>
      <div className="container">
            <div className="row">
                  <div className="col-sm border m-1 p-1">
                        <div className="d-flex">
                            <button className='btn btn-primary' onClick={this.increment} >Plus</button> 
                              <p className='m-2'>{this.state.counter}</p> 
                            <button className='btn btn-danger' onClick={this.decrement}>Minus</button>  
                        </div>
                        <button className='btn btn-warning my-2' onClick={this.ignoreProps}>Ignore Props:{this.state.ignoreProps}</button>
                  </div>
                  <div className="col-sm border m-1">
                        <button className='btn btn-primary' onClick={this.toggle}>Toggle Show</button> 
                              {this.state.toggle ? <UnMount ignoreProps={this.state.ignoreProps} />:null}
                        </div>
                 </div>
                  <div className="col-sm border m-1">
                        <div className='form-group'>
                         <label>Input Field</label>
                         <input className='form-control' value={this.state.value} onChange={this.handleInput} />
                        </div>
                        
                 </div>
      </div>
      </>
    )
  }
  /* componentDidUpdate(prevProps,prevState,snapShot){
     console.log('Update',prevProps,prevState,snapShot)
  } */
}
