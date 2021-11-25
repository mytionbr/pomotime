import styled from "@emotion/styled";
import { FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import { values } from "lodash";
import React from "react";

const RootStyled = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  margin: '10px 22px'
}));

const SelectInput = ({sessionsAmount,handleChange,values})=>{
    console.log(values,sessionsAmount)
    return (
        <FormControl sx={{
            width: '60%',
            mr: '5px'
        }}>
        <InputLabel id="sessions-select-label">Sessões</InputLabel>
        <Select
          labelId="sessions-select-label"
          id="simple-select"
          value={sessionsAmount}
          label="Quantidade de Sessões"
          onChange={handleChange}
        >
            {
                values.map((value=>
                    <MenuItem value={value}>{value}</MenuItem>
                ))
            }
        </Select>
      </FormControl>
    )
}

const getValues = ()=>{
    return Array.from(Array(50).keys())
}

const getTime = (amount, currentSessionTime)=>{
    let minutes = amount * currentSessionTime;
    let result = {
        time: minutes,
        formatted: ''
    }
    if(minutes < 60){
        result.formatted = `${minutes} minutos`
    } else
    if(minutes % 60 === 0){
        let hour = Math.floor(minutes / 60)
        result.formatted = 
            hour > 1 
             ?  `${hour} horas`
             : `${hour} hora`
      
    } else {
        result.formatted = `${Math.floor(minutes / 60)} horas e ${minutes % 60} minutos`
    }

    return result

}

export default function SessionsSelect() {
  const [sessionsAmount,setSessionsAmount] = React.useState(1);
  const values = [...getValues()]
  const currentTime = 25

  const [time, setTime] = React.useState({
      time: 0,
      formatted:''
  })
  const handleChange = (event)=>{
    const {value} = event.target 
    setSessionsAmount(value)
  }

  React.useEffect(()=>{
    setTime(getTime(sessionsAmount,currentTime))
  },[sessionsAmount])
  
  return (
    <RootStyled>
        <SelectInput
            sessionsAmount={sessionsAmount}
            handleChange={handleChange}
            values={values}
        />

        <Typography variant="body1">
            {time.formatted}
        </Typography> 
    </RootStyled>
  );
}
