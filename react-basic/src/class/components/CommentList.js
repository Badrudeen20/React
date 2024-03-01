import React, { Component } from 'react'

export default class CommentList extends Component {
      constructor(props) {
            super(props);
            this.handleChange = this.handleChange.bind(this);
            this.state = {
                  comments: [{
                        name:'nadru',
                        comment:'Nice'
                  }]
            };
      }
      // componentDidMount() {
      //    // Subscribe to changes
      //    DataSource.addChangeListener(this.handleChange);
      // }
        
      // componentWillUnmount() {
      // // Clean up listener
      // DataSource.removeChangeListener(this.handleChange);
      // }
      
      handleChange() {
            this.setState((state) => ({
                  comments: [...state.comments, {name:'rrr',comment:'Good'}],
            }));
      }
      render() {
      return (
            <div className='container'>
                  <button className='btn btn-primary' onClick={()=>this.handleChange()} >Add Item</button>
                  <ul>
                        {this.state.comments.map((l,i) => (
                          <li key={i}>{l.comment}</li>
                        ))}
                  </ul>
            </div>
           
      )
      }
}
