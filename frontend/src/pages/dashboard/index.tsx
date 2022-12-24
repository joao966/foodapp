import { Footer } from '@Components/Footer';
import { HeadPage } from '@Components/Head';
import { ComponentNavbar } from '@Components/Navbar';
import { configNavbarTabs } from '@Config/dashboard/index';
import { Box, Container } from '@mui/material';
import Paper from '@mui/material/Paper';
import Grid2 from '@mui/material/Unstable_Grid2';
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';
import DashboardLayout from 'src/layouts';
import { SectionInicio } from 'src/section/authenticated/dashboard/inicio/Home';

PageDashboard.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
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
