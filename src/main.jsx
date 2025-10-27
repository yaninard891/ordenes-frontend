import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";


import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";


import { OrdersProvider } from "./context/OrdenContext";
import { OrderDetailProvider } from "./context/OrdenDetailContext";


const theme = createTheme({
  palette: {
    primary: { main: "#1976d2" },
    secondary: { main: "#9c27b0" },
    background: {
      default: "#f5f5f5",
      paper: "#fff",
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
  },
  components: {
    MuiButton: {
      defaultProps: { variant: "contained" },
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>

      <CssBaseline />
     
      <OrdersProvider>
        <OrderDetailProvider>
          
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </OrderDetailProvider>
      </OrdersProvider>
    </ThemeProvider>
  </StrictMode>
);
