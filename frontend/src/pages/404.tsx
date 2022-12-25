import React from 'react';
import { Box, Typography } from '@mui/material';
import { purple } from '@mui/material/colors';
import DashboardLayout from 'src/layouts';

Error.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default function Error() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant="h1" style={{ color: 'white' }}>
        404
      </Typography>
      <Typography variant="h4" style={{ color: 'white' }}>
        Página não existe
      </Typography>
    </Box>
  );
}
