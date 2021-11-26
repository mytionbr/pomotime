import { CardHeader, Divider } from "@mui/material";
import React from "react";
import CardStyled from "../common/CardStyled";
import CartContentStyled from "../common/CartContentStyled";
import SwitchStyled from "../common/SwitchStyled";

export default function ApplicationForm() {
  const [darkMode, setDarkMode] = React.useState(false);

  const handleChangeDarkMode = (event) => {
    const { value } = event.target;
    setDarkMode(value);
};

  return (
    <CardStyled>
      <CardHeader title="Aplicação" subheader="Defina o estilo da aplicação" />
      <Divider />
      <CartContentStyled>
        <SwitchStyled
          id="dark-mode"
          label="Dark Mode"
          value={darkMode}
          handleChange={handleChangeDarkMode}
        />
      </CartContentStyled>
    </CardStyled>
  );
}
