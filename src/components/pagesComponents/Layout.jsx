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
import { NavLink, useLocation, Outlet } from "react-router-dom";
import { NavButton } from "./NavButton";

export function Layout({
  title = "Gestión de Órdenes",
  subtitle = "Lista de órdenes",
}) {
  const location = useLocation();

  return (
    <Box
      sx={{
        background: "linear-gradient(to bottom, #f9fafb, #f0f0f0)",
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
                to="/addOrden"
                active={location.pathname === "/addOrden"}
              >
                Agregar
              </NavButton>
              <NavButton
                to="/orders/edit"
                active={location.pathname.startsWith("/orders/edit")}
              >
                Editar
              </NavButton>
              <NavButton
                to="/orders/delete"
                active={location.pathname.startsWith("/orders/delete")}
              >
                Eliminar
              </NavButton>
            </Stack>

            <Box sx={{ flexGrow: 1 }} />
          </Toolbar>
        </Container>
      </AppBar>

      <Container maxWidth="lg" sx={{ py: 4, flexGrow: 1 }}>
        {subtitle && (
          <Typography variant="h5" color="text.secondary" gutterBottom>
            {subtitle}
          </Typography>
        )}

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
        }}
      >
        <Container maxWidth="lg">
          <Stack direction="row" alignItems="center" spacing={2}>
            <Typography color="text.secondary" variant="body2" flexGrow={1}>
              © {new Date().getFullYear()} Órdenes
            </Typography>
            <Button
              component={NavLink}
              to="/addOrden"
              variant="text"
              size="small"
              sx={{ "&:hover": { bgcolor: "grey.100" } }}
            >
              Agregar órdenes
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
