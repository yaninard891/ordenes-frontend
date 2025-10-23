import React from "react";
import { Box, Button, Container, Typography, Stack, AppBar, Toolbar,} from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import { NavButton } from "./NavButton";

export function Layout({
  title = "Ordenes",
  subtitle = "Lista de ordenes",
  children,
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
                Agregar Ordenes
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

        
        {children}
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
              © {new Date().getFullYear()} Inventario
            </Typography>
            <Button
              component={NavLink}
              to="/addOrden"
              variant="text"
              size="small"
              sx={{
                "&:hover": {
                  bgcolor: "grey.100",
                },
              }}
            >
              Agregar ordenes
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
