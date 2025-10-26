import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Stack,
} from "@mui/material";

export function EditOrdenModal({ isOpen, onClose, orden, onSubmit }) {
  const [form, setForm] = useState({
    estado: "",
    destino: "",
  });

  useEffect(() => {
    if (orden) {
      setForm({
        estado: orden.estado ?? "",
        destino: orden.destino ?? "",
      });
    }
  }, [orden]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.(form);
  };

  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth="sm" fullWidth>
      <form onSubmit={handleSubmit}>
        <DialogTitle>Editar Orden</DialogTitle>
        <DialogContent dividers>
          <Stack spacing={2}>
            <TextField
              label="Destino"
              name="destino"
              value={form.destino}
              onChange={handleChange}
              required
            />
            <TextField
              label="Estado"
              name="estado"
              value={form.estado}
              onChange={handleChange}
              required
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancelar</Button>
          <Button type="submit" variant="contained">
            Guardar cambios
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
