import { Box, Card, Container, Paper, styled, useTheme } from '@mui/material';
import { Area, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';
import DashboardLayout from 'src/layouts';
import dynamic from 'next/dynamic';
import { AreaChart } from '@Components/charts';
import Grid2 from '@mui/material/Unstable_Grid2';
import { SectionInicioChart } from './@Components/SectionCharts';
import { SectionCards } from './@Components/SectionCards';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const BoxGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridGap: '10px',
  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: 'repeat(4, 1fr)',
  },
}));

const SectionInicio = () => {
  const isSSR = typeof window !== 'undefined';
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <BoxGrid>
      <Grid2>
        <SectionCards title={'Entrada'} />
      </Grid2>
      <Grid2>
        <SectionCards title={'Saída'} />
      </Grid2>
      <Grid2>
        <SectionCards title={'Vencimento'} />
      </Grid2>
      <Grid2>
        <SectionCards title={'Estoque'} />
      </Grid2>
      <Grid2
        sx={{
          borderRadius: '4px',
          background: isDark ? '#1E1E1E' : '#FFFFFF',
          boxShadow:
            '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
        }}
        gridColumn={'span 2 / auto'}
      >
        {isSSR ? <SectionInicioChart /> : null}
      </Grid2>
      <Grid2 /* overflow="auto" */>
        <SectionCards title={'Example'} />
      </Grid2>
      <Grid2>
        <SectionCards title={'Example'} />
      </Grid2>
      <Grid2>
        <SectionCards title={'Example'} />
      </Grid2>
    </BoxGrid>
  );
};

export { SectionInicio };
