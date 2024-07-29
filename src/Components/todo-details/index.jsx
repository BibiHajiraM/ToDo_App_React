import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import { Fragment } from "react";

export function TodoDetails({
  todoDetails,
  openDialogue,
  setOpenDialogue,
  setTodoDetails,
}) {
  return (
    <Fragment>
      <Dialog onClose={() => setOpenDialogue(false)} open={openDialogue}>
        <DialogTitle>{todoDetails?.todo}</DialogTitle>
        <DialogActions>
          <Button
            onClick={() => {
              setTodoDetails(null);
              setOpenDialogue(false);
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}
