import React, { FC, SyntheticEvent } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

import useStyles from "./Styles";
import { SnackProps } from "../../Types/Types";

const CustomizedSnackbar: FC<SnackProps> = ({ open, setOpen }) => {
  const classes = useStyles();

  const handleClose = (event: SyntheticEvent<Element, Event>) => {
    setOpen(false);

    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <MuiAlert
          onClose={handleClose}
          severity="success"
          elevation={6}
          variant="filled"
        >
          Transaction successfully created.
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default CustomizedSnackbar;
