import React from "react";
import { Box, CircularProgress } from "@mui/material";
import { grey } from "@mui/material/colors";

export default function Level() {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ position: "relative" }}>
        <CircularProgress
          size={68}
          value={60}
          variant="determinate"
          sx={{
            position: "absolute",
            top: -32,
            left: 1,
            zIndex: 1,
            color: (theme) => theme.palette.success.main,
          }}
        />
        <CircularProgress
          size={68}
          value={100}
          variant="determinate"
          sx={{
            position: "absolute",
            top: -32,
            left: 1,
            zIndex: -1,
            color: grey[500],
          }}
        />
      </Box>
      <Box
        sx={{
          position: "relative",
          top: 3,
          left: 5,
          borderRadius: "50%",
          backgroundColor: (theme) => theme.palette.primary.main,
          padding: 1.6,
          zIndex: -2,
        }}
      >
        <i className="ra  ra-feather-wing"></i>
      </Box>
    </Box>
  );
}
