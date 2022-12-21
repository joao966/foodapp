import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Link from 'next/link';
import { TypesConfigNavbar } from 'src/@types/dashboard';

interface Props {
  pages: TypesConfigNavbar[];
}

const BootstrapButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  margin: '0 5px',
  fontSize: 16,
  padding: '6px 12px',
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

const RootStyle = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'isCollapse' && prop !== 'isOffset' && prop !== 'verticalLayout',
})(({ theme }) => ({
  boxShadow: 'none',
  height: 64,
  zIndex: theme.zIndex.appBar + 1,
  transition: theme.transitions.create(['width', 'height'], {
    duration: theme.transitions.duration.shorter,
  }),
  // [theme.breakpoints.up('lg')]: {
  //   height: HEADER.DASHBOARD_DESKTOP_HEIGHT,
  //   width: `calc(100% - ${NAVBAR.DASHBOARD_WIDTH + 1}px)`,
  //   ...(verticalLayout && {
  //     width: '100%',
  //     height: HEADER.DASHBOARD_DESKTOP_OFFSET_HEIGHT,
  //     backgroundColor: theme.palette.background.default,
  //   }),
  // },
}));

const ComponentNavbar = ({ pages }: Props) => {
  return (
    <AppBar component="nav">
      <Toolbar>
        <Box sx={{ flexGrow: 1, mr: 2, justifyContent: 'end', display: 'flex' }}>
          {pages.map((page: TypesConfigNavbar) => (
            <Link key={page?.href} href={page?.href}>
              <BootstrapButton>{page?.text}</BootstrapButton>
            </Link>
          ))}
        </Box>
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
      </Toolbar>
    </AppBar>
  );
};

export { ComponentNavbar };
