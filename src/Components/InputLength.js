import React, { useState } from "react";
import {
  Button,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Dialog,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import { useStore } from "../hooks/appState";

const useStyles = makeStyles({
  btn: {
    margin: "0.2em 0.4em",
    fontSize: "0.8em",
    textTransform: "capitalize",
    fontWeight: "bold",
  },
  instruction: {
    fontSize: "0.8em",
    marginBottom: 10,
  },
  error: {
    color: "red",
  },
});

// Weird name yet chose to give developer info
// that input will return length and breadth of tile
function InputLength() {
  const [open, setOpen] = useState(false),
    [inputValue, setInputValue] = useState(""),
    [error, setError] = useState(false),
    classes = useStyles(),
    { state, dispatch } = useStore();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setInputValue("");
    setOpen(false);
    setError(false);
  };

  const handleSubmit = () => {
    if (!!inputValue) {
      dispatch({
        type: "INPUT_SUBMIT",
        payload: inputValue,
      });
      handleClose();
    } else {
      setError(true);
    }
  };

  const handleChange = ({ target: { value } }) => {
    if (!isNaN(value)) {
      setInputValue(value);
    }
  };

  return (
    <div>
      <Button className={classes.btn} color="primary" onClick={handleClickOpen}>
        Click To Change Tile Width
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        onSubmit={handleSubmit}
      >
        <DialogTitle id="form-dialog-title">Set Length</DialogTitle>
        <DialogContent>
          <div className={classes.instruction}>
            Tile in pixel.{" "}
            {error && <span className={classes.error}>Error</span>}
            <br />
            <br />
            Current Width: <strong>{state.value}</strong>
            <br />
            <br />
            Recommended to enter more than 50
          </div>
          <TextField
            autoFocus
            variant="outlined"
            margin="dense"
            id="name"
            label="Length"
            type="email"
            fullWidth
            autoComplete="off"
            onChange={handleChange}
            value={inputValue}
          />
        </DialogContent>
        <DialogActions>
          <Button className={classes.btn} onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            className={classes.btn}
            onClick={handleSubmit}
            color="primary"
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export { InputLength };
