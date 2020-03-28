import React from 'react';

import css from './styles.css';

const BoardSquare = ({ content }) => {
  let display;
  if (typeof content === 'string' || content === null) {
    display = content;
  } else {
    display = content.display;
  }

  switch (display) {
    case 'red':
      return <div className={css.red}></div>;
    default:
      return <div className={css.empty}></div>;
  }
};

export default BoardSquare;
