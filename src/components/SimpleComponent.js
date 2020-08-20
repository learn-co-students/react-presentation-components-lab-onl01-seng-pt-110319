import React, {Component} from 'react';

class SimpleComponent extends Component {
    state = { mood: "happy" }

    render() {
        return (
            <div onClick={this.handleClick}>
                {this.state.mood}
            </div>
        )
    }

    handleClick = () => {
        this.state.mood === "happy" ? this.setState({ mood: "sad" }) : this.setState({ mood: "happy" })
    }
}

export default SimpleComponent;