import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Grid,
  Paper,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import { EditOrdenModal } from "./Components/EditOrdenModal";
import { updateOrden } from "../../services/updateOrden";
import { getOrderByState } from "../../services/getOrderByState";

export default function UpdateOrdenPages() {
  const [ordenes, setOrdenes] = useState([]);
  const [editing, setEditing] = useState(null);
  const [open, setOpen] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });

  // Traer las órdenes al montar el componente
  useEffect(() => {
    fetchOrdenes();
  }, []);

  const fetchOrdenes = async () => {
    try {
      const data = await getOrderByState();
      setOrdenes(data);
    } catch (error) {
       console.error(error);
      setSnackbar({ open: true, message: "Error al cargar órdenes", severity: "error" });
    }
  };

  const onEdit = (orden) => {
    setEditing(orden);
    setOpen(true);
  };

  const handleSubmit = async (data) => {
    if (!editing) return;

    try {
      const res = await updateOrden(data, editing._id);

      if (res?._id) {
        setOrdenes((prev) => prev.map((o) => (o._id === res._id ? res : o)));
        setSnackbar({ open: true, message: "Orden actualizada con éxito", severity: "success" });
      } else {
        setSnackbar({ open: true, message: "Error al actualizar orden", severity: "error" });
      }
    } catch (error) {
       console.error(error);
      setSnackbar({ open: true, message: "Error al actualizar orden", severity: "error" });
    }

    setOpen(false);
  };

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" mb={4}>
        Editar Órdenes
      </Typography>

      <Grid container spacing={2}>
        {ordenes.map((orden) => (
          <Grid item xs={12} sm={6} md={4} key={orden._id}>
            <Paper sx={{ p: 2 }}>
              <Typography><b>Destino:</b> {orden.destino}</Typography>
              <Typography><b>Contenido:</b> {orden.contenido}</Typography>
              <Typography><b>Estado:</b> {orden.estado}</Typography>
              <Button
                variant="contained"
                sx={{ mt: 1 }}
                onClick={() => onEdit(orden)}
              >
                Editar
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <EditOrdenModal
        isOpen={open}
        onClose={() => setOpen(false)}
        orden={editing}
        onSubmit={handleSubmit}
      />

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert severity={snackbar.severity}>{snackbar.message}</Alert>
      </Snackbar>
    </Container>
  );
}
