import React, { useState, useEffect } from "react";
import { Container, Typography, TextField, Button, Box, Grid, Paper, Dialog, DialogTitle, DialogContent, DialogActions, Snackbar, Alert,} from "@mui/material";
import { getOrderByState } from "../../services/getOrderByState";
import { DeleteOrden } from "../../services/DeleteOrden";

export default function OrdenDeletePage() {
  const [ordenes, setOrdenes] = useState([]);
  const [query, setQuery] = useState("");
  const [toDelete, setToDelete] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });
  const [refresh, setRefresh] = useState(false);

 
  useEffect(() => {
    const fetchOrdenes = async () => {
      try {
        const data = await getOrderByState(); 
        setOrdenes(data);
      } catch {
        setSnackbar({ open: true, message: "Error al cargar órdenes", severity: "error" });
      }
    };
    fetchOrdenes();
  }, [refresh]);

 
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
      await DeleteOrden(toDelete._id);
      
        setSnackbar({ open: true, message: "Orden eliminada exitosamente", severity: "success" });
        setRefresh((prev) => !prev); 
     
    } catch (error) {
    console.error(error);
  
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
          <Grid item key={orden._id } sx={{ width: { xs: '100%', sm: '50%', md: '33%'  }}}>

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

     
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Confirmar eliminación</DialogTitle>
       
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