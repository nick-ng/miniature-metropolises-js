# miniature-metropolises-js

(m7e m10s) A way to play Tiny Towns online, JavaScript edition

## Building Blueprint Shapes

https://docs.google.com/spreadsheets/d/1GDSNe-IIiIBfKvkbsz_oXphl8n-mcJEDoOasDYmFC_o/edit

## Game State

```json
{
  "players": [
    {
      "id": 1,
      "name": "player 1",
      "board": [null, "grey", "special", "blue", null, ... "yellow"],
      "specialBuilding": "library"
    },
    {
      "id": 2,
      "name": "player 2",
      "board": [null, "house", "red", "blue", null, ..., "yellow"],
      "specialBuilding": "tower"
    }
  ],
  "gamePhase": "placing_tile",
  "phaseInfo": "red",
  "activePlayer": 2,
  "finishedPlayers": [1],
  "buildings": {
    "well": "well",
    "industrial": "factory",
  }
}
```

Other players `specialBuilding` is hidden unless they've already constructed it.

## Idea

- &lt;game started&gt;
- Game state: `choosing_tile, 1`,
- Player 1 sends

```json
{
  "phase": "choosing_tile",
  "color": "red"
}
```

- Receive new game state: `placing_tile, 1, red`
- Player 2 sends

```json
{
  "phase": "placing_tile",
  "position": 7
}
```

- Don't re-broadcast updated state until everyone has placed?
