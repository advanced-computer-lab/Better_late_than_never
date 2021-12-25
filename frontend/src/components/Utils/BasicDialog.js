import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function BasicDialog({ open, close, children }) {
  return (
    <div>
      <Dialog open={open} onClose={close} fullWidth maxWidth="md">
        {close ? (
          <IconButton
            aria-label="close"
            onClick={close}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              zIndex: 9999,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
        <DialogContent>{children}</DialogContent>
      </Dialog>
    </div>
  );
}
