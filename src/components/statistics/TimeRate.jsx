import React from 'react'
import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
import { BaseOptionChart } from '../charts';
import { styled } from '@mui/system';
import { Box, Card, CardHeader } from '@mui/material';
import { grey } from '@mui/material/colors';

const CHART_DATA = [
    {
      name: 'Tempo focado',
      type: 'line',
      data: [25, 0, 25, 0, 25,50, 0, 30, 1, 20, 0]
    },
    {
        name: 'Tempo em pausa curta',
        type: 'line',
        data: [0, 10, 0, 5, 0, 1, 1, 25, 2, 22, 1]
    },
    {
        name: 'Tempo em pausa longa',
        type: 'line',
        data: [0, 0, 0, 0, 10, 0, 0, 0, 12, 22, 50]
      },
  ];

  const RootStyled = styled(Card)(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    padding: '10px',
    borderRadius: theme.shape.borderRadiusSm,
    boxShadow: theme.customShadows.z20,
    border:`${theme.spacing(0.2)} solid ${grey[300]}`
 }));


export default function TimeRate() {
    const chartOptions = merge(BaseOptionChart(), {
        plotOptions: { bar: { columnWidth: '11%', borderRadius: 4 } },
        labels: [
          '06:00',
          '08:00',
          '10:00',
          '12:00',
          '14:00',
          '16:00',
          '18:00',
          '20:00',
          '22:00',
          '00:00',
          '02:00'
        ],
        tooltip: {
          shared: true,
          intersect: false,
          y: {
            formatter: (y) => {
              if (typeof y !== 'undefined') {
                return `${y.toFixed(0)} Minutos`;
              }
              return y;
            }
          }
        }
      });
    

    
    return (
        <RootStyled>
             <CardHeader title="Tempo focado" subheader="Hoje: 25/11" />
             <Box sx={{ p: 3, pb: 1 }} dir="ltr">
                <ReactApexChart type="line" series={CHART_DATA} options={chartOptions} height={364} />
            </Box>
        </RootStyled>
    )
}
 