import React from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  Stack,
  AppBar,
  Toolbar,
} from "@mui/material";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { NavButton } from "./NavButton"; // Asumo que este lo tienes y funciona bien

export function Layout({
  title = "Inventario",
  subtitle = "Lista de productos",
  children,
}) {
  const location = useLocation();

  return (
    <Box
      sx={{
        background: "linear-gradient(to bottom, #f9fafb, #f0f0f0)", // Ajusta colores similares a sand.50, sand.100
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <AppBar
        position="static"
        color="default"
        elevation={1}
        sx={{ borderBottom: 1, borderColor: "divider" }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ gap: 3 }}>
            <Typography
              variant="h6"
              component="h1"
              color="primary.main"
              noWrap
              sx={{ flexShrink: 0 }}
            >
              {title}
            </Typography>

            <Stack direction="row" spacing={2} sx={{ ml: 3 }}>
              <NavButton to="/" active={location.pathname === "/"}>
                Inicio
              </NavButton>
              <NavButton
                to="/addProducts"
                active={location.pathname === "/addProducts"}
              >
                Agregar Productos
              </NavButton>
            </Stack>

            <Box sx={{ flexGrow: 1 }} />
          </Toolbar>
        </Container>
      </AppBar>

      <Container maxWidth="lg" sx={{ py: 4, flexGrow: 1 }}>
        <Outlet />
      </Container>

      <Box
        component="footer"
        sx={{
          mt: "auto",
          borderTop: 1,
          borderColor: "divider",
          bgcolor: "background.paper",
          py: 2,
          position: "relative",
          width: "100%",
        }}
      >
        <Container maxWidth="lg">
          <Stack direction="row" alignItems="center" spacing={2}>
            <Typography color="text.secondary" variant="body2" flexGrow={1}>
              © {new Date().getFullYear()} Inventario
            </Typography>
            <Button
              component={NavLink}
              to="/addProducts"
              variant="text"
              size="small"
              sx={{
                "&:hover": {
                  bgcolor: "grey.100",
                },
              }}
            >
              Agregar productos
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
