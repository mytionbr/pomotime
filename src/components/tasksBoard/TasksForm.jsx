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

  const ButtonStyled = styled(IconButton)(({ theme }) => ({
    fontSize: "3rem",
    borderRadius: theme.shape.borderRadiusMd,
    color: theme.palette.primary.main
  }));

export default function TasksForm() {
    return (
        <RootStyle>
            <InputStyle
                placeholder='Digite uma tarefa'
            />
           <ButtonStyled>
            <Icon icon={plusFill} />
           </ButtonStyled>
        </RootStyle>
    )
}
