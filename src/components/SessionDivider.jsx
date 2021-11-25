import styled from "@emotion/styled";
import { Divider, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";

const RowWrapper = styled("div")(({ theme }) => ({
  width: "90%",
  display: "flex",
  alignItems: "center",
  margin: "20px auto",
  "&> *": {
    color: grey[700],
  },
}));

const Line = styled("span")(({ theme }) => ({
  flexGrow: 1,
  width: "100%",
  border: `0.5px solid ${grey[500]}`,
  margin: "0 10px",
}));

export default function SessionDivider({ title }) {
  return (
    <RowWrapper>
      <Line />
      <Typography variant="h5">{title}</Typography>
      <Line />
    </RowWrapper>
  );
}
