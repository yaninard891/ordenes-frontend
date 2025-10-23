import React, { createContext, useContext, useMemo, useState } from 'react';
import { ThemeProvider, createTheme, useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';


const ColorModeContext = createContext({ toggleColorMode: () => {} });

export function ColorModeProvider({ children }) {
  const [mode, setMode] = useState('light');

  const colorMode = useMemo(() => ({
    toggleColorMode: () => {
      setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    },
  }), []);

  
  const theme = useMemo(() => createTheme({
    palette: {
      mode,
    },
  }), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}


export function useColorMode() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  return {
    colorMode: theme.palette.mode,
    toggleColorMode: colorMode.toggleColorMode,
  };
}


export function ColorModeIcon() {
  const { colorMode } = useColorMode();
  return colorMode === 'dark' ? <Brightness4Icon /> : <Brightness7Icon />;
}


export const ColorModeButton = React.forwardRef(function ColorModeButton(props, ref) {
  const { toggleColorMode } = useColorMode();

  return (
    <IconButton
      onClick={toggleColorMode}
      aria-label="Toggle color mode"
      ref={ref}
      {...props}
    >
      <ColorModeIcon />
    </IconButton>
  );
});
