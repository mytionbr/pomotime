import { alpha, styled } from '@mui/material/styles';
import { Box, Button, Card, Typography, useTheme } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { grey } from '@mui/material/colors';
import TimerController from '../../utils/TimerController'
import { useTimer } from 'react-timer-hook';

const RootCard = styled(Card)(({theme}) => ({
    display: 'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItens: 'center',
    padding: '1rem',
    width: theme.breakpoints.values.md,
    height: '20rem',
    margin: '0 auto',
    borderRadius: theme.shape.borderRadiusMd,

}));

const ActionButton = styled(Button)(({theme}) => ({
    display: 'flex',
    justifyContent:'center',
    alignItens: 'center',
    fontSize:'2rem',
    color: '#fff',
    border: '0.2rem solid #fff',
    minWidth:'12rem',
    '&:hover':{
        border: '0.2rem solid #fff',
        backgroundColor: alpha(grey[500], 0.20)
    }
}));

const ButtonContainer = styled(Box)(({theme}) => ({
    display: 'flex',
    justifyContent:'space-evenly',
    alignItens: 'center',
    width:'100%',

}));

const CounterDisplay = styled(Typography)(({theme}) => ({
   color: '#fff',
   fontSize: '7rem',
   display: 'inline-block',
   fontWeight: 500,
}));

const Display = styled(Box)({
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
})

let timerController = new TimerController()

const getDate = () =>{
    const date = new Date()
    date.setSeconds(date.getSeconds() + timerController.getCurrentTime() * 1)
    return date
}

export default function Timer() {

    const theme = useTheme();

    const {
        seconds,
        minutes,
        isRunning,
        start,
        pause,
        resume,
        restart,
      } = useTimer({ expiryTimestamp: getDate(), onExpire: () =>handleEndOfSession()});

    useEffect(()=>{
        pause()
    },[])

   

    const handleEndOfSession = ()=>{
        timerController.endOfSession() 
       
        console.log(timerController.getCurrentSession())
        const date = getDate()

        restart(date);
        pause();
    }

    const changeTheme = ()=>{
        let style = {
            bgColor: '',
            shadow: ''
        }

        switch(timerController.getCurrentSession()){
            case timerController.sessions.POMODORO:
                style.bgColor = theme.palette.sessions.pomodoro;
                style.shadow = theme.customShadows.pomodoro
                break;  
                
            case timerController.sessions.SHORT_BREAK:
                style.bgColor = theme.palette.sessions.shortBreak;
                style.shadow = theme.customShadows.shortBreak;
                style.text = theme.palette.error.main;
                break;
                
            case timerController.sessions.LONG_BREAK:
                style.bgColor = theme.palette.sessions.longBreak;
                style.shadow = theme.customShadows.longBreak
                break;
            default:
                style.bgColor = theme.palette.sessions.pomodoro;
                style.shadow = theme.customShadows.pomodoro
                break;
        }

        return style;
    }

    const handleStart = ()=>{
        resume();
    }

    const handlePause = ()=>{
        pause();
    }

    const handleRestart = ()=>{
        const date = getDate()

        restart(date);
        pause();
    }

   
   
    const timeFormatter = (time)=>{
        return String( "0" +time).slice(-2)
    }


    return (
       <RootCard
       sx={{
        backgroundColor: changeTheme().bgColor,
        boxShadow: changeTheme().shadow,
       }}>
           <Display>
                <CounterDisplay><span>{timeFormatter(minutes)}</span>:<span>{timeFormatter(seconds)}</span> </CounterDisplay>
           </Display>
            <ButtonContainer>
                <ActionButton 
                    variant = 'outlined'
                    onClick={handleStart}>
                    Começar
                </ActionButton>
                {
                    isRunning ? (
                        <ActionButton 
                        variant = 'outlined'
                        onClick={handlePause}>
                        Pausar
                    </ActionButton>
                    ) : (
                        <ActionButton 
                        variant = 'outlined'
                        onClick={handleRestart}>
                        Restaurar
                    </ActionButton>
                    )
                }
                
            </ButtonContainer>
       </RootCard>
    )
}
