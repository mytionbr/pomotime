import { Button, CardActions, CardContent, CardHeader, Divider, Grid, TextField } from '@mui/material'
import React from 'react'
import account from '../../_mocks_/account'
import CardStyled from '../common/CardStyled'

export default function ProfileInfoCard() {
    const [name,setName] = React.useState(account.displayName)
    const [email,setEmail] = React.useState(account.email)
    const [password,setPassword] = React.useState('')
    
    const handleChangeName = (event)=>{
        const {value} = event.target 
        setName(value)
    }
    const handleChangeEmail = (event)=>{
        const {value} = event.target 
        setEmail(value)
    }

    const handleChangePassword = (event)=>{
        const {value} = event.target 
        setPassword(value)
    }

    return (
        <CardStyled
        sx={{
            padding: '0'
        }}
        >
            <CardHeader 
                title="Informações"
                subtitle="As informações podem ser modificadas"
            />
            <Divider />
            <CardContent>           
            <Grid container spacing={3}>
                <Grid item sm={12} md={6}>
                    <TextField 
                        value={name}
                        onChange={handleChangeName}
                        label="Nome do Usuário"
                        fullWidth
                    />
                </Grid>
                <Grid item sm={12} md={6}>
                    <TextField 
                        value={email}
                        onChange={handleChangeEmail}
                        label="Email"
                        fullWidth
                    />
                </Grid>
                <Grid item sm={12} md={6}>
                    <TextField 
                        value={password}
                        onChange={handleChangePassword}
                        label="Senha"
                        fullWidth
                        type="password"
                        helperText="Caso não queira mudar de senha, não modifique esse campo"
                    />
                </Grid>
            </Grid>
            </CardContent>
            <CardActions
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end'
                }}
            >
                <Button variant="contained">
                    Salvar
                </Button>
            </CardActions>
        </CardStyled>
    )
}
