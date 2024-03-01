import React, { Component } from 'react';
  
export const LazyLoader = (importComp) => {
	return class extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        LazyComponent: null,
      };
    }

		//loading the component and setting it to state
		componentDidMount() {
			importComp().then((comp) => this.setState({ LazyComponent: comp.default }));
		}

		//rendering the component
		render() {
			const C = this.state.LazyComponent;
			return C ? <C {...this.props} /> : null;
		}
	};
};
