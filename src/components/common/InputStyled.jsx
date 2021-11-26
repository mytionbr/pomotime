import { OutlinedInput } from "@mui/material";
import { styled } from "@mui/system";

const InputStyled = styled(OutlinedInput)(({ theme }) => ({
    width: "90%",
    fontWeight: 700,
    color: theme.palette.grey[700],
    transition: theme.transitions.create(["box-shadow", "width"], {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.shorter,
    }),
    "&.Mui-focused": { width: "100%", boxShadow: theme.customShadows.z8 },
    "& fieldset": {
      borderWidth: `1px !important`,
      borderColor: `${theme.palette.grey[500_32]} !important`,
    },
  }));

export default InputStyled

