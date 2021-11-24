import styled from '@emotion/styled';
import { OutlinedInput, Toolbar } from '@mui/material';
import React from 'react'

const RootStyle = styled(Toolbar)(({ theme }) => ({
    padding: 10
  }));
  
  const InputStyle = styled(OutlinedInput)(({ theme }) => ({
    width: '100%',
  transition: theme.transitions.create(['box-shadow'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter
  }),
  '&.Mui-focused': {  boxShadow: theme.customShadows.z8 },
  '& fieldset': {
    borderWidth: `1px !important`,
    borderColor: `${theme.palette.grey[500_32]} !important`
  }
  }));

export default function TitleForm({title, handleChangeTitle}) {
    
    const [value, setValue] = React.useState(title)

    const handleChange = (event)=>{
        const {value} = event.target 
        setValue(value)
        handleChangeTitle(value)
    }

    return (
        <RootStyle>
            <InputStyle 
                value={value}
                onChange={handleChange}
                placeholder='Titulo..'
            />
        </RootStyle>
    )
}
