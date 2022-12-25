import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardHeader } from '@mui/material';

interface Props {
  title: string;
}

export function SectionCards({ title }: Props) {
  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2">R$ </Typography>
      </CardContent>
      <CardActions sx={{ diplay: 'flex', justifyContent: 'center' }}>
        <Button size="small">+</Button>
      </CardActions>
    </Card>
  );
}
