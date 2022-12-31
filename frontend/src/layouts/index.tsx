import React, { ReactNode } from 'react';
// @mui
import { Footer } from '@Components/Footer';
import { ComponentNavbar } from '@Components/Navbar';
import { configNavbar } from '@Config/dashboard/Navbar';
import { Box, styled } from '@mui/material';

// ----------------------------------------------------------------------

type Props = {
  children: ReactNode;
  title?: string;
};

const RootStyle = styled('header')(({ theme }) => ({
  display: 'flex',
  flexFlow: 'column',
  height: '100vh',
}));

const MainStyle = styled('main')(({ theme }) => ({
  flexGrow: 1,
  flexBasis: 'auto',
  paddingTop: 10,
  paddingBottom: 40,
  minHeight: 'auto',
}));

const FooterStyle = styled('footer')(({ theme }) => ({
  flexGrow: 0,
  width: '100%',
}));

export default function DashboardLayout({ children, title }: Props) {
  return (
    <RootStyle>
      <Box component={'header'} sx={{ flexGrow: 0, flexBasis: 'auto' }}>
        <ComponentNavbar title={title} pages={configNavbar} />
      </Box>
      <MainStyle>{children}</MainStyle>
      <FooterStyle
        sx={{
          display: { xs: 'none', md: 'block' },
        }}
      >
        <Footer />
      </FooterStyle>
    </RootStyle>
  );
}
