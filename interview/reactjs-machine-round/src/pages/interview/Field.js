import React, { Component } from 'react'

export default class Field extends Component {
  onChangeField = (event) => {
      event.stopPropagation()  
      this.props.onChangeHandle({
            name:event.target.name,
            value:event.target.value
      })   
  };
  render() {
    return (
      <>
      <div className='form-group'>
        <label>{this.props.name}</label>
        <input type='text'onChange={(e)=>this.onChangeField(e)} name={this.props.name} />
      </div>
       
      </>
    )
  }
}
