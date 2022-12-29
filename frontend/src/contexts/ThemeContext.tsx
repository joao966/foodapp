import { createContext, ReactNode, useState } from 'react';

// ----------------------------------------------------------------------

export const defaultSettings: SettingsValueProps = {
  themeMode: 'light',
};

const initialState = {
  ...defaultSettings,
  onToggleMode: () => {},
};

const ThemeContext = createContext(initialState);

type SettingsProviderProps = {
  children: ReactNode;
};

export type ThemeMode = 'light' | 'dark';

export type SettingsValueProps = {
  themeMode: ThemeMode;
};

function ConfigProvider({ children }: SettingsProviderProps) {
  const [settings, setSettings] = useState<SettingsValueProps>({
    themeMode: 'light',
  });

  const toggleColorMode = () => {
    setSettings({
      ...settings,
      themeMode: settings.themeMode === 'light' ? 'dark' : 'light',
    });
  };

  return (
    <ThemeContext.Provider
      value={{
        ...settings,
        onToggleMode: toggleColorMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export { ConfigProvider, ThemeContext };
