import React, { Component, Fragment } from 'react'

export default class extends Component {
    state = {
        roll: 0
    };

    handleCLick = () => {
        this.setState({ roll: Math.floor(Math.random() * this.props.numSides + 1)})
    };

    // Show the Roll Value*
    // Show the Number of Sides*
    // Display a button to roll die

    render () {
        return (
            <Fragment>
                <p>Roll: {this.state.roll}</p>
                <p>Sides: {this.props.numSides}</p>
                <button type="button" onClick={this.handleCLick}>Roll Die</button>
            </Fragment>
        )
    }
}