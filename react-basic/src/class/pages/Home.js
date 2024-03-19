// Home.js

import React, { Component } from 'react';

class Home extends Component {
  state = {
    list: [],
    value:''
  };

  onChangeHandle = (e) => {
    e.stopPropagation()  
    this.setState({
          value:e.target.value
    });
  }; 

  formHandler= (e)=>{
    e.preventDefault()
    this.setState({
      value:'',
      list:[...this.state.list,this.state.value]
    });
  }
  removeHandler = (id)=>{
    const filter = this.state.list.filter((ele,ind)=>ind!==id)
    this.setState({
      list:filter
    });
  }

  render() {
    return (
        <>
          <form onSubmit={this.formHandler}>
            <input type='text' value={this.state.value} onChange={(e)=>this.onChangeHandle(e)} />
            <button type='submit' >Submit</button>
          </form>
          <ul>
            {this.state.list?.map((ele,ind)=>{
               return <li key={ind} >{ele} 
                 <button onClick={()=>this.removeHandler(ind)}>REM</button>
                 <button onClick={()=>this.updateHandler(ind)}>UPDATE</button>
               </li>
            })}
          </ul>
        </> 
    );
  }
}

export default Home;
