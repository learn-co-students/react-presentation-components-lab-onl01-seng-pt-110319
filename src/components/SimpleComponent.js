// Code SimpleComponent Here
import React from 'react';

export default class SimpleComponent extends React.Component {

	constructor(props) {
		super()
		this.state = {
			mood: "happy"
		}
	}

	handleClick = () => {
		this.setState({
			mood: "sad"
		})
	}

	render() {
		return (
			<div className="mood" 
			onClick={this.handleClick}>
			{this.state.mood}
			</div>
		)
	}

}