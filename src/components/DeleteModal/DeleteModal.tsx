import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import { DeleteModalProps } from "./DeleteModalProps";

export const DeleteModal = (props: DeleteModalProps) => {
  return (
    <Dialog open={props.open} onClose={props.handleClose}>
      <DialogTitle>Are you sure you want to delete tasks?</DialogTitle>
      <DialogActions>
        <Button onClick={props.handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={props.handleDelete} color="primary" autoFocus>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};
