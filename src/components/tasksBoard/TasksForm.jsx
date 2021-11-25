import styled from '@emotion/styled';
import { Icon } from '@iconify/react';
import { Button,  IconButton, OutlinedInput, TextField, Toolbar } from '@mui/material';
import React from 'react'
import plusFill from '@iconify/icons-eva/plus-fill';
const RootStyle = styled(Toolbar)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: 'center',
    margin:'10px 0',
  
  }));

  const InputStyle = styled(TextField)(({ theme }) => ({
    width: '90%',
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
                label='Digite uma tarefa'
                value={value}
                onChange={handleChangeText}
                variant='outlined'
            />
           <ButtonSave
            onClick={handleSave}
           >
            <Icon icon={plusFill} />
           </ButtonSave>
        </RootStyle>
    )
}
