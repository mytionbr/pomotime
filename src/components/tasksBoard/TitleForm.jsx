import styled from '@emotion/styled';
import { OutlinedInput, TextField, Toolbar } from '@mui/material';
import React from 'react'

const RootStyle = styled(Toolbar)(({ theme }) => ({
    padding: 10
  }));
  
  const InputStyle = styled(TextField)(({ theme }) => ({
    width: '100%',
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
                variant='outlined'
                label='Titulo'
            />
        </RootStyle>
    )
}
