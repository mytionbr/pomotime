import { CardHeader, Divider } from "@mui/material";

import React from "react";
import CardStyled from "../common/CardStyled";
import CartContentStyled from "../common/CartContentStyled";
import InputFildStyled from "../common/InputFildStyled";
import SwitchStyled from "../common/SwitchStyled";

export default function TimerSettingsForm() {
  const [pomodoro, setPomodoro] = React.useState(25);
  const [shortBreak, setShortBreak] = React.useState(5);
  const [longBreak, setLongBreak] = React.useState(10);
  const [delayBreak, setDelayBreak] = React.useState(4);
  const [autoStartPomodoro, setAutoStartPomodoro] = React.useState(false);
  const [autoStartBreak, setAutoStartBreak] = React.useState(false);

  const handleChangePomodoro = (event) => {
    const { value } = event.target;
    setPomodoro(value);
  };

  const handleChangeShortBreak = (event) => {
    const { value } = event.target;
    setShortBreak(value);
  };
  const handleChangeLongBreak = (event) => {
    const { value } = event.target;
    setLongBreak(value);
  };

  const handleChangeDelayBreak = (event) => {
    const { value } = event.target;
    setDelayBreak(value);
  };

  const handleChangeAutoStartPomodoro = (event) => {
    const { value } = event.target;
    setAutoStartPomodoro(value);
  };

  const handleChangeAutoStartBreak = (event) => {
    const { value } = event.target;
    setAutoStartBreak(value);
  };

  return (
    <CardStyled>
      <CardHeader
        title="Cronômetro"
        subheader="Defina o tempo do cronômetro. (Unidade em minutos)"
      />
      <Divider />
      <CartContentStyled>
        <InputFildStyled
          id="pomodoro-setting"
          label="Pomodoro"
          value={pomodoro}
          handleChange={handleChangePomodoro}
          type="number"
        />
        <InputFildStyled
          id="short-break-setting"
          label="Pausa curta"
          value={shortBreak}
          handleChange={handleChangeShortBreak}
          type="number"
        />
        <InputFildStyled
          id="long-break-setting"
          label="Pausa longa"
          value={longBreak}
          handleChange={handleChangeLongBreak}
          type="number"
        />
        <InputFildStyled
          id="delay-break-setting"
          label="Atraso da pausa longa"
          value={delayBreak}
          handleChange={handleChangeDelayBreak}
          type="number"
        />
        <SwitchStyled
          id="auto-start-pomodoro"
          label="Iniciar sessões automaticamente"
          value={autoStartPomodoro}
          handleChange={handleChangeAutoStartPomodoro}
        />
        <SwitchStyled
          id="auto-start-break"
          label="Iniciar pausas automaticamente"
          value={autoStartBreak}
          handleChange={handleChangeAutoStartBreak}
        />
      </CartContentStyled>
    </CardStyled>
  );
}
