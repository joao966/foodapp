import { ReactNode } from 'react';
// @mui
import { Footer } from '@Components/Footer';
import { ComponentNavbar } from '@Components/Navbar';
import { configNavbarTabs } from '@Config/dashboard/index';
import { Box, styled } from '@mui/material';

// ----------------------------------------------------------------------

type MainStyleProps = {
  collapseClick: boolean;
};

// ----------------------------------------------------------------------

type Props = {
  children: ReactNode;
};

const MainStyle = styled('main')(({ theme }) => ({
  flexGrow: 1,
  paddingTop: 64,
  paddingBottom: 64,
}));

export default function DashboardLayout({ children }: Props) {
  return (
    <>
      <ComponentNavbar pages={configNavbarTabs} />
      <Box>
        <MainStyle>{children}</MainStyle>
      </Box>
      <Box sx={{ bottom: 0, left: 0, position: 'fixed', width: '100%' }}>
        <Footer />
      </Box>
    </>
  );
}
