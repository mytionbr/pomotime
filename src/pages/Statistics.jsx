import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Page from "../components/Page";
import ActivityProportion from "../components/statistics/ActivityProportion";
import TasksRates from "../components/statistics/TasksRates";
import TimeRate from "../components/statistics/TimeRate";
import TotalTimer from "../components/statistics/TotalTimer";
import ActivityChart from "../components/statistics/ActivityChart";
export default function Statistics() {
  return (
    <Page title="Estatísticas | Pomotime">
      <Container maxWidth="xl">
        <Box sx={{ pb: 3 }}>
          <Typography variant="h4">Estatísticas</Typography>
        </Box>
        <Grid container sx={{ pt: 5, width: "100%" }} spacing={4}>
          <Grid item xs={12} md={6} lg={4}>
            <TotalTimer />
          </Grid>
          <Grid item xs={12} md={6} lg={8}>
            <TimeRate />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <ActivityProportion />
          </Grid>
          <Grid item xs={12} md={6} lg={8}>
            <TasksRates />
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <ActivityChart />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
