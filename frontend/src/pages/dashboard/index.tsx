import { Footer } from '@Components/Footer';
import { HeadPage } from '@Components/Head';
import { ComponentNavbar } from '@Components/Navbar';
import { configNavbarTabs } from '@Config/dashboard/index';
import { Box, Container } from '@mui/material';
import Paper from '@mui/material/Paper';
import Grid2 from '@mui/material/Unstable_Grid2';
import DashboardLayout from 'src/layouts';

PageDashboard.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default function PageDashboard() {
  return (
    <Box>
      <HeadPage title={'FoodNas-Dashboard'} content={'dashboard'} />
      <Container maxWidth={false}>
        <Box>
          <ComponentNavbar pages={configNavbarTabs} />
        </Box>
        <Box>
          <Grid2 container spacing={{ mobile: 1, tablet: 2, laptop: 3 }} sx={{ border: '1px solid red' }}>
            <Grid2 mobile={6} tablet={4} laptop={3}>
              <Paper>
                <Box>Entrada</Box>
                <Box>R$</Box>
              </Paper>
            </Grid2>
            <Grid2 mobile={6} tablet={4} laptop={3}>
              <Paper>
                <Box>Saída</Box>
                <Box>R$</Box>
              </Paper>
            </Grid2>

            {/* {Array.from(Array(8)).map((_, index) => (
              <Grid2 mobile={6} tablet={4} laptop={3} key={index}>
                <div>{index + 1}</div>
              </Grid2>
            ))} */}
          </Grid2>
        </Box>
        <Box sx={{ bottom: 0, left: 0, position: 'fixed', width: '100%' }}>
          <Footer />
        </Box>
      </Container>
    </Box>
  );
}

// export default PageDashboard;
