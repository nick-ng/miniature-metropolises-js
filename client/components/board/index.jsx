import React from 'react';

import css from './styles.css';

import BoardSquare from './board-square';

const Board = ({ boardState }) => (
  <div className={css.board}>
    {boardState.map((content) => (
      <BoardSquare content={content} />
    ))}
  </div>
);

export default Board;
