import React from "react";
import styled from "styled-components";

import BoardSquare from "./board-square";

const BoardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  gap: 1px;
  width: 40em;
  height: 40em;
`;

const Board = ({ boardState }) => (
  <BoardGrid>
    {boardState.map((content, i) => (
      <BoardSquare key={`${content}${i}`} content={content} />
    ))}
  </BoardGrid>
);

export default Board;
