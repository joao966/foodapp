import { Box, Container, styled } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import React from 'react';
import DashboardLayout from 'src/layouts';
import { SectionProdutos } from 'src/section/authenticated/dashboard/produtos/SectionProdutos';
import { SectionVenda } from 'src/section/authenticated/dashboard/venda/SectionVenda';

PageProdutos.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout title={'Produtos'}>{page}</DashboardLayout>;
};

const Grid2Style = styled(Grid2)({
  display: 'flex',
  flexFlow: 'column',
  height: '100%',
});

export default function PageProdutos() {
  return (
    <Grid2Style container sx={{ margin: { xs: 0, sm: 2 } }} disableEqualOverflow>
      <SectionVenda />
    </Grid2Style>
  );
}
