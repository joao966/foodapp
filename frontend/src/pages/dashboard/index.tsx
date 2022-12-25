import { HeadPage } from '@Components/Head';
import { Box, Container } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import DashboardLayout from 'src/layouts';
import { SectionInicio } from 'src/section/authenticated/dashboard/inicio/SectionInicio';

PageDashboard.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout title={'Início'}>{page}</DashboardLayout>;
};

export default function PageDashboard() {
  return (
    <Box>
      <HeadPage title={'FoodNas-Dashboard'} content={'dashboard'} />
      <Container maxWidth={false}>
        <SectionInicio />
      </Container>
    </Box>
  );
}
