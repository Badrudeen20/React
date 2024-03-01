import React, { Component } from 'react'

export default class TodoList extends Component {
      constructor(props) {
            super(props);
        
            this.state = {
              items: [],
              newItem: '',
            };
        
            // Bind event handlers
            this.handleInputChange = this.handleInputChange.bind(this);
            this.handleAddItem = this.handleAddItem.bind(this);
            this.handleUpdateItem = this.handleUpdateItem.bind(this);
            this.handleDeleteItem = this.handleDeleteItem.bind(this);
      }
        
      // Lifecycle method: componentDidMount
      componentDidMount() {
      // Fetch initial data or set initial state
      // For simplicity, let's initialize with some dummy data
      this.setState({
            items: ['Item 1', 'Item 2', 'Item 3'],
      });
      }
      
      // Event handler for input change
      handleInputChange(event) {
      this.setState({ newItem: event.target.value });
      }
      
      // Event handler for adding a new item
      handleAddItem() {
      this.setState((prevState) => ({
            items: [...prevState.items, prevState.newItem],
            newItem: '',
      }));
      }
      
      // Event handler for updating an item
      handleUpdateItem(index) {
      const updatedItem = prompt('Enter the updated value:', this.state.items[index]);
      
      if (updatedItem !== null) {
            this.setState((prevState) => {
            const updatedItems = [...prevState.items];
            updatedItems[index] = updatedItem;
            return { items: updatedItems };
            });
      }
      }
      
      // Event handler for deleting an item
      handleDeleteItem(index) {
      if (window.confirm('Are you sure you want to delete this item?')) {
            this.setState((prevState) => ({
            items: prevState.items.filter((_, i) => i !== index),
            }));
      }
      }
        
      render() {
      return (
            <div>
            <ul>
            {this.state.items.map((item, index) => (
                  <li key={index}>
                  {item}{' '}
                  <button onClick={() => this.handleUpdateItem(index)}>Update</button>
                  <button onClick={() => this.handleDeleteItem(index)}>Delete</button>
                  </li>
            ))}
            </ul>
            <input
            type="text"
            value={this.state.newItem}
            onChange={this.handleInputChange}
            />
            <button onClick={this.handleAddItem}>Add Item</button>
            </div>
      )
      }
}
