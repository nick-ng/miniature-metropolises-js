import React from "react";
import styled from "styled-components";

const Square = styled.div`
  border: 1px solid black;
`;

const Brown = styled(Square)`
  background-color: brown;
`;

const Grey = styled(Square)`
  background-color: grey;
`;

const Red = styled(Square)`
  background-color: red;
`;

const Teal = styled(Square)`
  background-color: teal;
`;

const Yellow = styled(Square)`
  background-color: yellow;
`;

const BoardSquare = ({ content }) => {
  let display;
  if (typeof content === "string" || content === null) {
    display = content;
  } else {
    display = content.display;
  }

  console.log("display", display);

  switch (display) {
    case "brown":
      return <Brown />;
    case "grey":
      return <Grey />;
    case "red":
      return <Red />;
    case "teal":
      return <Teal />;
    case "yellow":
      return <Yellow />;
    default:
      return <Square />;
  }
};

export default BoardSquare;
