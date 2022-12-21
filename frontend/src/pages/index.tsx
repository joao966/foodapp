import type { NextPage } from 'next';
import { Box } from '@mui/material';
import Dashboard from './dashboard';

const Home: NextPage = () => {
  return (
    <Box>
      <Dashboard />
    </Box>
  );
};

export default Home;
