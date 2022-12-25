import type { NextPage } from 'next';
import { Box } from '@mui/material';
import Dashboard from './dashboard';
import { SectionSignIn } from 'src/section/unauthenticated/SectionLogin';

const Home: NextPage = () => {
  return (
    <Box>
      <SectionSignIn />
    </Box>
  );
};

export default Home;
