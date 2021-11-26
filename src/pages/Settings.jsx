import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Page from "../components/Page";
import ApplicationForm from "../components/settings/ApplicationForm";
import NotificationsForm from "../components/settings/NotificationsForm";
import TimerSettingsForm from "../components/settings/TimerSettingsForm";

export default function Settings() {
  return (
    <Page title="Configurações | Pomotime">
      <Container maxWidth="xl">
        <Box sx={{ pb: 3 }}>
          <Typography variant="h4">Configurações</Typography>
        </Box>
        <Grid container sx={{ pt: 5 }} justifyContent={"center"} spacing={3}>
          <Grid item md={10} sm={12}>
            <TimerSettingsForm />
          </Grid>
          <Grid item md={10} sm={12}>
            <NotificationsForm />
          </Grid>
          <Grid item md={10} sm={12}>
            <ApplicationForm />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
