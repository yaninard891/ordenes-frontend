import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  Paper,
  Snackbar,
} from "@mui/material";
import { useAddOrdenForm } from "./Hooks/useAddOrdenForm";

export default function AddOrden() {
  const {
    form,
    errors,
    onChange,
    onSubmit,
    snackbar,
    setSnackbar,
  } = useAddOrdenForm();

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
          <TextField
            label="Destino"
            name="destino"
            value={form.destino}
            onChange={onChange}
            error={!!errors.destino}
            helperText={errors.destino}
            fullWidth
          />

          <TextField
            label="Contenido"
            name="contenido"
            value={form.contenido}
            onChange={onChange}
            error={!!errors.contenido}
            helperText={errors.contenido}
            fullWidth
          />

          <TextField
            label="Fecha de creación"
            name="fecha_creacion"
            type="date"
            value={form.fecha_creacion}
            onChange={onChange}
            error={!!errors.fecha_creacion}
            helperText={errors.fecha_creacion}
            fullWidth
            InputLabelProps={{ shrink: true }}
          />

          <TextField
            label="Estado"
            name="estado"
            value={form.estado}
            onChange={onChange}
            error={!!errors.estado}
            helperText={errors.estado}
            fullWidth
          />
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
