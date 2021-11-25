import { Box, Card, CardHeader, useTheme } from "@mui/material";
import { grey } from "@mui/material/colors";
import { styled } from "@mui/system";
import { merge } from "lodash";
import React from "react";
import { BaseOptionChart } from "../charts";
import ReactApexChart from 'react-apexcharts';
const RootStyled = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: "10px",
  borderRadius: theme.shape.borderRadiusSm,
  boxShadow: theme.customShadows.z20,
  border: `${theme.spacing(0.2)} solid ${grey[300]}`,
}));

function generateData (count, yrange){
    let i = 0;
    let series = [];
    let categories = [
        "Jan",
        "Fev",
        "Mar",
        "Abr",
        "Mai",
        "Jun",
        "Jul",
        "Ago",
        "Set",
        "Out",
        "Nov",
        "Dez",
      ]
    while (i < count) {
      var x = (i + 1).toString();
      var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
  
      series.push({
        x: categories[i],
        y: y
      });
      i++;
    }
    return series;
  }

const CHART_DATA = [
    {
    name: 'Seg',
    data: generateData(12, {
      min: 0,
      max: 20
    })
  },
  {
    name: 'Ter',
    data: generateData(12, {
      min: 0,
      max: 20
    })
  },
  {
    name: 'Qua',
    data: generateData(12, {
      min: 0,
      max: 20
    })
  },
  {
    name: 'Qui',
    data: generateData(12, {
      min: 0,
      max: 20
    })
  },
  {
    name: 'Sex',
    data: generateData(12, {
      min: 0,
      max: 20
    })
  },
  {
    name: 'Sab',
    data: generateData(12, {
      min: 0,
      max: 20
    })
  },
  {
    name: 'Dom',
    data: generateData(12, {
      min: 0,
      max: 20
    })
  },
  ]

export default function ActivityChart() {
  const theme = useTheme();

  const chartOptions = merge(BaseOptionChart(), {
    options: {
      chart: {
        height: 350,
        type: "heatmap",
      },
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        heatmap: {
          colorScale: {
            inverse: true,
          },
        },
      },
     
    },
  });

  return (
    <RootStyled>
      <CardHeader title="Taxa de atividade" />
      <Box sx={{ mx: 3 }} dir="ltr">
        <ReactApexChart
        type="heatmap" 
          series={CHART_DATA}
          options={chartOptions}
          height={280}
        />
      </Box>
    </RootStyled>
  );
}
