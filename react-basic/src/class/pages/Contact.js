// Contact.js

import React, { Component,createRef  } from 'react';
class Contact extends Component {
  inputRef = createRef();
  handleClick = () => {
    this.inputRef.current.focus();
  }

  render() {
    return (
        <>
          <input ref={this.inputRef} />
          <button onClick={this.handleClick}>
            Focus the input
          </button>
          
        </>
    );
  }
}

export default Contact;