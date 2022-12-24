import { useContext } from 'react';
import { ThemeContext } from 'src/contexts/ThemeContext';

const useConfigTheme = () => useContext(ThemeContext);

export default useConfigTheme;
