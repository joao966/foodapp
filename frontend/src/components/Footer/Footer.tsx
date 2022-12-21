import { Box, Card, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Card>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box>
          <Typography variant="h6" gutterBottom>
            Feito por Esio Rodrigues da Silva Nascimento - 2022
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

export { Footer };
