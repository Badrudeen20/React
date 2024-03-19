import React, { Component } from 'react'

export default class Pure extends React.PureComponent{
  
  render() {
      console.log('re-render')
    return (
      <div>Pure</div>
    )
  }
}
