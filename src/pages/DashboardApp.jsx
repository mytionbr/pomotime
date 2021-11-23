import { Box, Grid, Container, Typography } from '@mui/material';
import Page from '../components/Page';
import Timer from '../components/Timer';

export default function DashboardApp() {
    return (
      <Page title="Dashboard | Pomotime">
        <Container maxWidth="xl">
          <Grid container  sx={{ pt: 5 }}spacing={3}>
            <Timer />
          </Grid>
        </Container>
      </Page>
    );
  }