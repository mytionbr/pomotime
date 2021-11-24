import styled from '@emotion/styled';
import { Icon } from '@iconify/react';
import { Button,  IconButton, OutlinedInput, Toolbar } from '@mui/material';
import React from 'react'
import plusFill from '@iconify/icons-eva/plus-fill';
const RootStyle = styled(Toolbar)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: 'center',
    margin:'10px 0',
  
  }));

  const InputStyle = styled(OutlinedInput)(({ theme }) => ({
    width: '90%',
    transition: theme.transitions.create(["box-shadow"], {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.shorter,
    }),
    "&.Mui-focused": {  boxShadow: theme.customShadows.z8 },
    "& fieldset": {
      borderWidth: `1px !important`,
      borderColor: `${theme.palette.grey[500_32]} !important`,
    },
  }));

  const ButtonSave = styled(IconButton)(({ theme }) => ({
    fontSize: "3rem",
    borderRadius: theme.shape.borderRadiusMd,
    color: theme.palette.primary.main
  }));

export default function TasksForm({handleAddTask}) {
    const [value, setValue] = React.useState('')  

    const handleSave = ()=>{
      handleAddTask({
        id: String(Math.floor(Math.random() * 1000)),
        name: value,
        tempo: 240,
        sessionsTotal: 10,
        done: false
      })
      setValue('')
    } 
    
    const handleChangeText = (event)=>{
      const {value} = event.target 
      setValue(value)
    }

    return (
        <RootStyle>
            <InputStyle
                placeholder='Digite uma tarefa'
                value={value}
                onChange={handleChangeText}
            />
           <ButtonSave
            onClick={handleSave}
           >
            <Icon icon={plusFill} />
           </ButtonSave>
        </RootStyle>
    )
}
