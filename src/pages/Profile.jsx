import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Page from "../components/Page";
import ProfileInfoCard from "../components/profile/ProfileInfoCard";
import ProfilePresentationCard from "../components/profile/ProfilePresentationCard";

export default function Profile() {
  return (
    <Page title="Perfil | Pomotime">
      <Container maxWidth="xl">
        <Box sx={{ pb: 3 }}>
          <Typography variant="h4">Perfil</Typography>
        </Box>
        <Grid container sx={{ pt: 5 }} justifyContent={"center"} spacing={3}>
          <Grid item md={4} sm={12}>
            <ProfilePresentationCard />
          </Grid>
          <Grid item md={8} sm={12}>
            <ProfileInfoCard />
          </Grid>
          </Grid>
      </Container>
    </Page>
  );
}
