import React, { Component, Fragment } from 'react'

import Die from './Die'


// 4,6,8,10,12,20 sided dice
// need array storing number of sides
// need array for dice bag (map?)


export default class extends Component {
    state = {
        bag: [4, 6, 8, 10, 12, 20,]
    };

    // make dice bag

    makeDiceBag = () => {
        // console.log("making bag");
        return this.state.bag.map(sides => <Die numSides = {sides}/>)
    };

    //Set variable of dice bag to use

    render () {
        // const diceBag = this.state.bag.map(sides => <Die numSides = {sides}/>)
        const diceBag = this.makeDiceBag();
        // console.log("diceBag made");
        return (
            <Fragment>
                {diceBag}
            </Fragment>
        )
    }
}