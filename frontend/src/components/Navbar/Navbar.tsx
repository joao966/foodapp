import MenuIcon from '@mui/icons-material/Menu';
import { Button, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { styled, useTheme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Link from 'next/link';
import { TypesConfigNavbar } from 'src/@types/dashboard';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useContext } from 'react';
import useConfigTheme from 'src/hooks/useTheme';

interface Props {
  pages: TypesConfigNavbar[];
  title?: string;
}

const BootstrapButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  margin: '0 5px',
  fontSize: 16,
  height: 35,
  padding: '0px 0px !important',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: '#1976d2',
  color: 'black',
  borderColor: '#1976d2',
  '&:hover': {
    backgroundColor: '#0069d9',
    borderColor: '#0062cc',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#0062cc',
    borderColor: '#005cbf',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});

const RootStyle = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isCollapse' && prop !== 'isOffset' && prop !== 'verticalLayout',
})(({ theme }) => ({
  boxShadow: 'none',
  height: 45,
  background: theme.palette.primary.dark,
  zIndex: theme.zIndex.appBar + 1,
  transition: theme.transitions.create(['width', 'height'], {
    duration: theme.transitions.duration.shorter,
  }),
}));

const ComponentNavbar = ({ pages, title }: Props) => {
  const theme = useTheme();
  const { onToggleMode } = useConfigTheme();

  return (
    <RootStyle sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
      </Box>
      <Box>
        <Typography variant="h5" ml={2}>
          {title}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex' }}>
        <Box
          sx={{
            flexGrow: 1,
            mr: 2,
            justifyContent: 'end',
            display: { xs: 'none', md: 'flex' },
            alignItems: 'center',
          }}
        >
          {pages.map((page: TypesConfigNavbar) => (
            <Link key={page?.href} href={page?.href}>
              <BootstrapButton>{page?.text}</BootstrapButton>
            </Link>
          ))}
        </Box>
        <IconButton sx={{ ml: 1 }} onClick={onToggleMode} color="inherit">
          {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Box>
    </RootStyle>
  );
};

export { ComponentNavbar };
