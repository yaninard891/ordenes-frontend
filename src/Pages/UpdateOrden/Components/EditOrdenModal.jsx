import React, { useState, useEffect } from "react";
import { Modal, Box, TextField, Button, CircularProgress, Alert } from "@mui/material";

export const EditOrdenModal = ({ isOpen, onClose, order, onSubmit }) => {
  const [form, setForm] = useState({ ...order });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(""); 

  useEffect(() => {
    if (order) {
      setForm({ ...order });
    }
  }, [order]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(""); // Restablecer el error al intentar enviar

    // Validación del estado (si existe alguna restricción de valores posibles)
    if (!["Pendiente", "En transito", "Entregado"].includes(form.estado)) {
      setError("Estado no válido. Selecciona un estado válido.");
      setLoading(false);
      return;
    }

    try {
      await onSubmit(form);
      setLoading(false);
      onClose(); 
    } catch (error) {
      setError("Hubo un error al actualizar la orden.");
      setLoading(false);
    }
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          border: "2px solid #000",
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
        }}
      >
        <h2>Editar Orden</h2>

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        <form onSubmit={handleSubmit}>
          <TextField
            label="Destino"
            name="destino"
            value={form.destino}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Contenido"
            name="contenido"
            value={form.contenido}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Estado"
            name="estado"
            value={form.estado}
            onChange={handleChange}
            fullWidth
            margin="normal"
            helperText="Estado debe ser Pendiente, En transito o Entregado"
          />

          <Box mt={2}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={loading}
              fullWidth
            >
              {loading ? <CircularProgress size={24} /> : "Guardar cambios"}
            </Button>
          </Box>
        </form>
      </Box>
    </Modal>
  );
};
