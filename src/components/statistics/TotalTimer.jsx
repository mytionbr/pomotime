import { Icon } from '@iconify/react'
import React from 'react'
import dashboardOutlined from "@iconify/icons-ant-design/dashboard-outlined";
import doneAllFill from "@iconify/icons-eva/done-all-fill";
import coffeeOutlined from "@iconify/icons-ant-design/coffee-outlined";
import clockOutline from "@iconify/icons-eva/clock-outline";
import { Box, Card, CardContent, CardHeader, Grid, Paper, styled, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

const DATA = [
    {
        title: 'Tarefas concluídas',
        value: '64',
        icon: <Icon icon={doneAllFill} color='#54D62C' width={32} height={32} />
    },
    {
        title: 'Sessões concluídas',
        value: '67',
        icon: <Icon icon={clockOutline} color='#8F00FF' width={32} height={32} />
    },
    {
        title: 'Tempo em pausa',
        value: '2 horas e 55 minutos',
        icon: <Icon icon={coffeeOutlined} color='#FFC107' width={32} height={32} />
    },
    {
        title: 'Tempo focado',
        value: '5 horas e 20 minutos',
        icon: <Icon icon={dashboardOutlined} color='#FF4842' width={32} height={32} />
    },
]

const RootCard = styled(Card)(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    padding: '10px',
    borderRadius: theme.shape.borderRadiusSm,
    boxShadow: theme.customShadows.z20,
    border:`${theme.spacing(0.2)} solid ${grey[300]}`
 }));



function SiteItem({ item }) {
    const { icon, value, title } = item;
  
    return (
      <Grid item xs={6}>
        <Paper variant="outlined" sx={{ py: 2.5, textAlign: 'center' }}>
          <Box sx={{ mb: 0.5 }}>{icon}</Box>
          <Typography variant="h6">{value}</Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {title}
          </Typography>
        </Paper>
      </Grid>
    );
  }

export default function TotalTimer() {
    return (
        <RootCard>
        <CardHeader title="Geral" />
        <CardContent>
          <Grid container spacing={2}>
            {DATA.map((item) => (
              <SiteItem key={item.title} item={item} />
            ))}
          </Grid>
        </CardContent>
      </RootCard>
    )
}
