import { createTheme, ThemeProvider as TheProvider } from '@mui/material';
import React, { useMemo, useState } from 'react';
import useConfigTheme from 'src/hooks/useTheme';

export function ThemeProvider({ children }: any) {
  const { themeMode } = useConfigTheme();

  const isLight = themeMode === 'light';

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: themeMode,
        },
      }),
    [themeMode],
  );

  return <TheProvider theme={theme}>{children}</TheProvider>;
}
