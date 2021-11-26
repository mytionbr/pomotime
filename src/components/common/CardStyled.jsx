import { Card } from '@mui/material';
import { grey } from '@mui/material/colors';
import { styled } from '@mui/system';
import React from 'react'

const RootStyled = styled(Card)(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    padding: '10px',
    "&>*":{
        margin: '5px'
    },
    borderRadius: theme.shape.borderRadiusSm,
    boxShadow: theme.customShadows.z20,
    margin: '0 auto',
    border:`${theme.spacing(0.2)} solid ${grey[300]}`
 }));

export default function CardStyled({children}) {
    console.log(children)
    return (
    <RootStyled>
        {children}    
    </RootStyled>
    )
}
