// Code SimpleComponent Here
import React from 'react';

class SimpleComponent extends React.Component {
    state = {
            mood: 'happy'
    }

    render() {
        return (
            <div onClick={this.click}>
                {this.state.mood}
            </div>
        )
    }

    click = () => {this.setState({mood: this.state.mood === "happy" ? "sad" : "happy"})}

}
 export default SimpleComponent