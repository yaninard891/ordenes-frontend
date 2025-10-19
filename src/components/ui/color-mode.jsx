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

  // Creamos el tema con base en el modo actual
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

// Hook para consumir el contexto y obtener toggle y modo actual
export function useColorMode() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  return {
    colorMode: theme.palette.mode,
    toggleColorMode: colorMode.toggleColorMode,
  };
}

// Componente para mostrar el icono de modo actual
export function ColorModeIcon() {
  const { colorMode } = useColorMode();
  return colorMode === 'dark' ? <Brightness4Icon /> : <Brightness7Icon />;
}

// Botón para alternar el modo de color
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
