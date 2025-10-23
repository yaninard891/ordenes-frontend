import React from "react";
import { Paper, Typography, Stack, Button, Snackbar } from "@mui/material";
import { useAddOrdenForm } from "./Hooks/useAddOrdenForm";

import DestinoField from "./components/DestinoField";
import ContenidoField from "./components/ContenidoField";
import FechaField from "./components/FechaField";
import EstadoField from "./components/EstadoField";

export default function AddOrden() {
  const { form, errors, onChange, onSubmit, snackbar, setSnackbar } = useAddOrdenForm();

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") return;
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  return (
    <Paper
      elevation={3}
      sx={{
        maxWidth: 600,
        mx: "auto",
        mt: 4,
        p: 4,
        borderRadius: 3,
        bgcolor: "background.paper",
      }}
    >
      <form id="add-orden-form" onSubmit={onSubmit} noValidate>
        <Typography variant="h5" mb={3} color="primary">
          Cargar nueva orden
        </Typography>

        <Stack spacing={3}>
          <DestinoField value={form.destino} onChange={onChange} error={errors.destino} />

          <ContenidoField value={form.contenido} onChange={onChange} error={errors.contenido} />

          <FechaField value={form.fecha_creacion} onChange={onChange} error={errors.fecha_creacion} />

          <EstadoField value={form.estado} onChange={onChange} error={errors.estado} />
        </Stack>

        <Button
          type="submit"
          variant="contained"
          size="large"
          color="primary"
          sx={{ mt: 4, borderRadius: 2 }}
        >
          Guardar orden
        </Button>
      </form>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        message={snackbar.message}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      />
    </Paper>
  );
}
