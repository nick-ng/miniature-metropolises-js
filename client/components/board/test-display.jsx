import React from 'react';

import Board from './';

const DEFAULT_BOARD_STATE = [
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
];

export default class BoardDisplayTest extends React.Component {
  state = {
    boardStateString: JSON.stringify(DEFAULT_BOARD_STATE),
    boardState: DEFAULT_BOARD_STATE,
  };

  textChangeHandler = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  submitHandler = (event) => {
    event.preventDefault();
    const { boardStateString } = this.state;

    try {
      const boardState = JSON.parse(boardStateString);

      this.setState({
        boardState,
      });
    } catch (e) {
      console.log('Error when parsing board state', e);
    }
  };

  render() {
    const { boardStateString, boardState } = this.state;

    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <label>
            Board State
            <input
              type="text"
              name="boardStateString"
              onChange={this.textChangeHandler}
              value={boardStateString}
            />
          </label>
          <button type="submit">Update Board State</button>
        </form>
        <Board boardState={boardState} />
      </div>
    );
  }
}
