import styled from '@emotion/styled';
import { Card, CardContent, CardHeader, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import React from 'react'

import {
    Timeline,
    TimelineItem,
    TimelineContent,
    TimelineConnector,
    TimelineSeparator,
    TimelineDot
  } from '@mui/lab';

const TIMELINES = [
    {
        title: 'Modo livre, 25 minutos',
        time: '09:55 - 25/11/21',
        type: 'order1',
    },  
    {
        title: 'Modo livre, 25 minutos',
        time: '10:20 - 25/11/21',
        type: 'order4',
    },
    {
        title: 'Trabalho, 25 minutos',
        time: '10:45 - 25/11/21',
        type: 'order2',
    },
    {
        title: 'Espanhol, 25 minutos',
        time: '11:10 - 25/11/21',
        type: 'order3',
    },

]

const RootStyled = styled(Card)(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    padding: '10px',
    borderRadius: theme.shape.borderRadiusSm,
    boxShadow: theme.customShadows.z20,
    border:`${theme.spacing(0.2)} solid ${grey[300]}`
 }));


 function OrderItem({ item, isLast }) {
    const { type, title, time } = item;
    return (
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot
            sx={{
              bgcolor:
                (type === 'order1' && 'primary.main') ||
                (type === 'order2' && 'success.main') ||
                (type === 'order3' && 'info.main') ||
                (type === 'order4' && 'warning.main') ||
                'error.main'
            }}
          />
          {isLast ? null : <TimelineConnector />}
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="subtitle2">{title}</Typography>
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            {time}
          </Typography>
        </TimelineContent>
      </TimelineItem>
    );
  }



export default function SessionTimeline() {
    return (
        <RootStyled>
            <CardHeader 
                title="Linha do tempo"
                subheader={`Total: 1 hora e 40 minutos`}
            />
             <CardContent>
                <Timeline position="alternate">
                {TIMELINES.map((item, index) => (
                    <OrderItem key={item.title} item={item} isLast={index === TIMELINES.length - 1} />
                ))}
                </Timeline>
            </CardContent>
        </RootStyled>
    )
}
