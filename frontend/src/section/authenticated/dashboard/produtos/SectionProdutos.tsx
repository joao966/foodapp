import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { SectionTabItem } from './SectionTabItem';
import Grid2 from '@mui/material/Unstable_Grid2';
import { Button } from '@mui/material';
import { useRouter } from 'next/router';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export function SectionProdutos() {
  const { push } = useRouter();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handlerClickNewProduct = () => {
    push('/dashboard/produtos/novo');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid2 container sx={{ margin: { xs: 0, sm: 2 } }} disableEqualOverflow>
        <Grid2 container xs={12} disableEqualOverflow>
          <Grid2 xs={12} sm={6}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Itens" {...a11yProps(0)} />
                <Tab label="Estoque" {...a11yProps(1)} />
              </Tabs>
            </Box>
          </Grid2>
          <Grid2
            xs={12}
            sm={6}
            display={'flex'}
            alignContent={'end'}
            justifyContent={'end'}
            sx={{ justifyContent: { xs: 'start', sm: 'end' } }}
          >
            <Button onClick={handlerClickNewProduct}>Novo Produto</Button>
          </Grid2>
        </Grid2>
        <Grid2 xs={12}>
          {value === 0 ? (
            <SectionTabItem />
          ) : (
            <Box>
              <Box>lk</Box>
            </Box>
          )}
        </Grid2>
      </Grid2>
    </Box>
  );
}
