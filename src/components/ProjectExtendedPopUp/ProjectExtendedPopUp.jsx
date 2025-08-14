import React, { useState } from "react";
import {
  Link,
  Dialog,
  DialogTitle,
} from "@mui/material";

import { DebugReportingApp } from "./DebugReportingApp";
import { FundTracker } from "./FundTracker";



export function ProjectExtendedPopUp({ project }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Link component="button" variant="body2" onClick={handleOpen}>
        Read more...
      </Link>

      {project.title === "Debug Reporting App - internal" ? (
        <DebugReportingApp open={open} onClose={handleClose} />
        
        ) : project.title === "Fund Tracker" ? (
          <FundTracker open={open} onClose={handleClose} />
      ) : (
        <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
          <DialogTitle>{project.title}</DialogTitle>
        </Dialog>
      )}
    </div>
  );
}
