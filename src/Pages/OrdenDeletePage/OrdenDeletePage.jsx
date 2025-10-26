import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Grid,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Snackbar,
  Alert,
} from "@mui/material";
import { getOrderByState } from "../../services/getOrderByState";
import { DeleteOrden } from "../../services/DeleteOrden";

export default function OrdenDeletePage() {
  const [ordenes, setOrdenes] = useState([]);
  const [query, setQuery] = useState("");
  const [toDelete, setToDelete] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });
  const [refresh, setRefresh] = useState(false);

  // Traer órdenes
  useEffect(() => {
    const fetchOrdenes = async () => {
      try {
        const data = await getOrderByState ();
        setOrdenes(data);
      } catch {
        setSnackbar({ open: true, message: "Error al cargar órdenes", severity: "error" });
      }
    };
    fetchOrdenes();
  }, [refresh]);

  // Filtrar órdenes según query
  const filteredOrdenes = ordenes.filter((o) => {
    const q = query.toLowerCase();
    return (
      String(o._id).toLowerCase().includes(q) ||
      String(o.destino).toLowerCase().includes(q)
    );
  });

  const handleDeleteClick = (orden) => {
    setToDelete(orden);
    setOpenDialog(true);
  };

  const confirmDelete = async () => {
    try {
      const res = await DeleteOrden (toDelete._id);
      if (res?.message === "Orden eliminada") {
        setSnackbar({ open: true, message: "Orden eliminada exitosamente", severity: "success" });
        setRefresh((prev) => !prev);
      } else {
        setSnackbar({ open: true, message: "Error al eliminar orden", severity: "error" });
      }
    } catch {
      setSnackbar({ open: true, message: "Error al eliminar orden", severity: "error" });
    }
    setOpenDialog(false);
  };

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" mb={4}>
        Eliminar Órdenes
      </Typography>

      <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
        <TextField
          fullWidth
          label="Buscar por ID o destino..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button variant="outlined" onClick={() => setQuery("")}>
          Limpiar
        </Button>
      </Box>

      <Grid container spacing={2}>
        {filteredOrdenes.map((orden) => (
          <Grid item xs={12} sm={6} md={4} key={orden._id}>
            <Paper sx={{ p: 2 }}>
              <Typography><b>Destino:</b> {orden.destino}</Typography>
              <Typography><b>Contenido:</b> {orden.contenido}</Typography>
              <Typography><b>Estado:</b> {orden.estado}</Typography>
              <Button
                variant="contained"
                color="error"
                sx={{ mt: 1 }}
                onClick={() => handleDeleteClick(orden)}
              >
                Eliminar
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Dialogo de confirmación */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Confirmar eliminación</DialogTitle>
        <DialogContent>
          <Typography>
            ¿Seguro que quieres eliminar <b>{toDelete?.destino}</b> (ID: {toDelete?._id})?
            Esta acción no se puede deshacer.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancelar</Button>
          <Button color="error" onClick={confirmDelete}>Eliminar</Button>
        </DialogActions>
      </Dialog>

     
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
