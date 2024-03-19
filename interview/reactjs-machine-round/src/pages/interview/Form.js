import React, { Component } from 'react'
import Field from './Field';

export default class Form extends Component {
state = {
      name: '',
      value:''
};
        
onChangeHandle = ({name,value}) => {
      this.setState({
            name: name,
            value:value
      });
};

  render() {
    return (
      <>
          <p>Subject:{this.state.name}</p>
          <p>body:{this.state.value}</p>
          <Field name="subject" onChangeHandle={this.onChangeHandle} />
          <Field name="body" onChangeHandle={this.onChangeHandle} />
      </>
    )
  }
}



