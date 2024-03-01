import React, { Component } from 'react'

export default class UnMount extends Component {
  constructor(props){
      super(props)
      this.state = {
            speed:3
      }
  }
  static getDerivedStateFromProps(props, state) { 
      console.log('Derived',props,state)
      if(props.ignoreProps !== state.speed){ 
          return{ 
            speed: props.ignoreProps 
          }; 
      } 
      return null; // No change to state 
  } 
  getSnapshotBeforeUpdate(prevProps,prevState){
      console.log('SnapShot',prevProps,prevState)
      return null
  }
  shouldComponentUpdate(nextProps,nextState){
      console.log('Should Component')
      console.log(nextProps.ignoreProps,this.props.ignoreProps)
      if(nextProps.ignoreProps && this.props.ignoreProps == nextProps.ignoreProps){
         console.log('Not Render')
         return false
      }
      console.log('Render')
      return true
  }
  render() {
    return (
      <div>UnMount</div>
    )
  }
  componentDidMount(){console.log('Mount')}
  componentDidUpdate(prevProps,prevState,snapShot){}
  componentWillUnmount(){}
  componentDidCatch(error,info){}
  componentWillMount(){}
  componentWillReceiveProps(){}
  componentWillUpdate(){}
  
}
