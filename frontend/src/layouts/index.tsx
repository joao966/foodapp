import React, { ReactNode } from 'react';
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
    <React.Fragment>
      <ComponentNavbar pages={configNavbarTabs} />
      <Box>
        <MainStyle>{children}</MainStyle>
      </Box>
      {/* <Box sx={{ bottom: 0, left: 0, position: 'fixed', width: '100%' }}>
        <Footer />
      </Box> */}
      <Box sx={{ position: 'absolute', bottom: 0, width: '100%' }}>
        <Footer />
      </Box>
    </React.Fragment>
  );
}
