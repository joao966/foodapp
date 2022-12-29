import { Box, Container } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import React from 'react';
import DashboardLayout from 'src/layouts';
import { SectionProdutos } from 'src/section/authenticated/dashboard/produtos/SectionProdutos';

PageProdutos.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout title={'Novo Produto'}>{page}</DashboardLayout>;
};

export default function PageProdutos() {
  return (
    <Grid2 container disableEqualOverflow>
      <Grid2 xs={12}>{/* <SectionProdutos /> */}</Grid2>
    </Grid2>
  );
}
