import { Card, CardHeader, styled } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Box } from "@mui/system";
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

const CHART_DATA = [
  { data: [20, 10, 30, 22, 2, 16, 15, 6, 43, 10] },
];

export default function TasksRates() {
  const chartOptions = merge(BaseOptionChart(), {
    tooltip: {
      marker: { show: false },
      y: {
        formatter: (seriesName) => `${seriesName}`,
        title: {
          formatter: (seriesName) => `Sessões`,
        },
      },
    },
    plotOptions: {
      bar: { horizontal: true, barHeight: "28%", borderRadius: 2 },
    },
    xaxis: {
      categories: [
        "Relatório",
        "Atividades de espanhol",
        "Atividades de inglês",
        "Projeto do site Minimal",
        "Design do Akira",
        "Prática de piano",
        "Trabalho de Administração",
        "Trabalho de Empreendedorismo",
        "Curso de PowerBI",
        "Curso de Desenho",
      ],
    },
  });

  return (
    <RootStyled>
      <CardHeader title="Tarefas" subheader="Último mês" />
      <Box sx={{ mx: 3 }} dir="ltr">
        <ReactApexChart
          type="bar"
          series={CHART_DATA}
          options={chartOptions}
          height={364}
        />
      </Box>
    </RootStyled>
  );
}
