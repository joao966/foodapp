import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  TextField,
  Typography,
  styled,
  useTheme,
} from '@mui/material';
import { useState } from 'react';
import { _mockProdutos } from 'src/_mocks/produtos';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';

const BoxGrid = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  display: 'grid',
  gridTemplateColumns: 'repeat(1, 1fr)',
  gridGap: '10px',
  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: 'repeat(12, 1fr)',
  },
}));

const SectionVenda = () => {
  const [produtos, setProdutos] = useState(_mockProdutos);

  return (
    <BoxGrid>
      <Box gridColumn={'span 9 / auto'} sx={{ border: '1px solid red' }}>
        <Box display="flex" alignItems="center">
          <Typography variant="body2" component="div">
            Digite código do produto:{' '}
          </Typography>
          <TextField size={'small'} />
          <Button>Inserir</Button>
          <Button>Ler QR</Button>
        </Box>
        <List dense={true}>
          {produtos?.data?.map((value) => (
            <ListItem
              secondaryAction={
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemAvatar>
                <Avatar>
                  <FolderIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={value.nome} secondary={value?.descricao || null} />
            </ListItem>
          ))}
        </List>
      </Box>
      <Box gridColumn={'span 3 / auto'} sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ flexGrow: 0 }}>
          <Typography variant="h5">Valor: </Typography>
        </Box>
        <Divider />
        <Box sx={{ flexGrow: 1 }}>as</Box>
        <Divider />
        <Box sx={{ flexGrow: 0 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button>Cancelar</Button>
            <Button>Finalizar</Button>
          </Box>
        </Box>
      </Box>
    </BoxGrid>
  );
};

export { SectionVenda };
