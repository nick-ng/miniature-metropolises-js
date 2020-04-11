import React from "react";
import styled from "styled-components";

export const resourceTypes = {
  brown: "brown",
  grey: "grey",
  red: "red",
  teal: "teal",
  yellow: "yellow",
};

const Square = styled.div`
  border: 1px solid black;
`;

const Resource = styled(Square)`
  background-color: ${(props) => props.type};
`;

const BoardSquare = ({ content }) => {
  let display;
  if (typeof content === "string" || content === null) {
    display = content;
  } else {
    display = content.display;
  }

  switch (display) {
    case resourceTypes.brown:
    case resourceTypes.grey:
    case resourceTypes.red:
    case resourceTypes.teal:
    case resourceTypes.yellow:
      return <Resource type={display} />;
    default:
      return <Square />;
  }
};

export default BoardSquare;
