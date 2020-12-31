import React, { Component } from 'react';
import Dice from './Dice';
class RollDice extends Component {
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"]
  }
  constructor(props) {
    super(props);
    this.state = { die1: 'one', die2: 'one'}
    this.roll = this.roll.bind(this);
  }
  roll() {
    const newDice1 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];
    const newDice2 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];
    this.setState({ die1: newDice1, die2: newDice2});
  }
  render() {
    return (
      <div className="RollDice">
        <Dice face={this.state.die1} />
        <Dice face={this.state.die2} />
        <button onClick={this.roll}>Roll Dice!!</button>
      </div>
    )
  }
}

export default RollDice;