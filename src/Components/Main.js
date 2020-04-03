import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Tile } from "./Tile";

const useStyles = makeStyles({
  wrapper: {
    margin: "1rem 5rem",
  },
  canvas: {
    display: "flex",
  },
});

function Main() {
  const classes = useStyles(),
    tileRows = [];

  // snippet to create tiles
  const getItems = (j) => {
    const items = [],
      index = j % 2,
      maxLimit = index + 8;

    for (let i = index; i < maxLimit; i++) {
      items.push(<Tile key={`${j}-${i}`} isOdd={!!(i % 2)} />);
    }

    return items;
  };

  for (let j = 0; j < 8; j++) {
    tileRows.push(
      <div className={classes.canvas} key={`${j}-tile`}>
        {getItems(j)}
      </div>
    );
  }

  return <div className={classes.wrapper}>{tileRows}</div>;
}

export { Main };
