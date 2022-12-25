import { CssBaseline } from '@mui/material';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import { ConfigProvider } from 'src/contexts/ThemeContext';
import { ThemeProvider } from 'src/theme';
import '../../styles/globals.css';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

interface MyAppProps extends AppProps {
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: MyAppProps) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <ConfigProvider>
      <ThemeProvider>
        <CssBaseline />
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </ConfigProvider>
  );
}

export default MyApp;
