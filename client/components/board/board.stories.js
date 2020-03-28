import React from "react";
import { withKnobs, array } from "@storybook/addon-knobs";

import Board from "./";

export default {
  title: "Board",
  decorators: [withKnobs],
};

export const normal = () => (
  <Board
    boardState={array("Board State", [
      null,
      null,
      "red",
      null,
      null,
      "brown",
      "teal",
      null,
      null,
      null,
      null,
      "yellow",
      null,
      "grey",
      null,
      null,
    ])}
  />
);
