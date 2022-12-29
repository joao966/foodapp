import { Container } from '@mui/material';
import React from 'react';
import DashboardLayout from 'src/layouts';

PageVenda.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default function PageVenda() {
  return (
    <Container maxWidth={false}>
      <p>1</p>
    </Container>
  );
}
