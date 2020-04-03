import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useStore } from "../hooks/appState";

// Component that returns tile
function Tile({ isOdd }) {
  const { state } = useStore(),
    useStyles = makeStyles({
      tile: {
        minWidth: state.value,
        height: state.value,
        border: "1px solid black",
        backgroundColor: isOdd ? "white" : "black",
      },
    }),
    classes = useStyles();

  return <div className={classes.tile}></div>;
}

export { Tile };
