import React, { Component } from "react";

class Counter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			counter: 0
		};
	}

	render() {
		return (
			<button
				onClick={() =>
					this.setState(prev => ({ counter: prev.counter + 1 }))
				}
			>
				Click me! - {this.state.counter}
			</button>
		);
	}
}

export default Counter;
