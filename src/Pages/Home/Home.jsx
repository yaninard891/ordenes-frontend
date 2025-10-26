import React, { useState } from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Drawer,
  CircularProgress,
  Chip,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import EditOrdenModal from "../UpdateOrden/Components/EditOrdenModal";
import { updateOrden } from "../../services/updateOrden";
import { useHome } from "./Hooks/useHome";

export default function Home() {
  const {
    ordenesFiltradas,
    loading,
    error,
    estadosDisponibles,
    estadoSeleccionado,
    setEstadoSeleccionado,
  } = useHome();

  const [selected, setSelected] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  const getColor = (estado) => {
    switch (estado) {
      case "Pendiente": return "warning";
      case "En transito": return "info";
      case "Entregado": return "success";
      default: return "default";
    }
  };

  const handleOpenDrawer = (orden) => { setSelected(orden); setDrawerOpen(true); };
  const handleEdit = (orden) => { setSelected(orden); setEditModalOpen(true); };

  const handleSubmit = async (data) => {
    if (!selected) return;
    try {
      const res = await updateOrden(data, selected._id);
      if (res?._id) alert("Orden actualizada correctamente");
    } catch (err) {
      console.error("Error al actualizar orden:", err);
    } finally {
      setEditModalOpen(false);
    }
  };

  if (loading) return <Box display="flex" justifyContent="center" mt={10}><CircularProgress /></Box>;
  if (error) return <Box display="flex" justifyContent="center" mt={10}><Typography color="error">{error}</Typography></Box>;

  return (
    <Box p={4}>
      <Typography variant="h4" mb={4}>Órdenes</Typography>

      {/* Filtro por estado */}
      <FormControl sx={{ minWidth: 200, mb: 3 }}>
        <InputLabel>Filtrar por estado</InputLabel>
        <Select
          value={estadoSeleccionado}
          label="Filtrar por estado"
          onChange={(e) => setEstadoSeleccionado(e.target.value)}
        >
          {estadosDisponibles.map((est) => (
            <MenuItem key={est} value={est}>
              <Chip label={est} color={getColor(est)} size="small" />
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {ordenesFiltradas.length === 0 ? (
        <Typography>No hay órdenes disponibles.</Typography>
      ) : (
        <Grid container spacing={3}>
          {ordenesFiltradas.map((orden) => (
            <Grid item xs={12} sm={6} md={4} key={orden._id}>
              <Card
                sx={{
                  cursor: "pointer",
                  ":hover": { boxShadow: 6, transform: "translateY(-2px)", transition: "0.2s" },
                }}
                onClick={() => handleOpenDrawer(orden)}
              >
                <CardContent>
                  <Typography variant="h6">{orden.destino}</Typography>
                  <Typography variant="body2">{orden.contenido}</Typography>
                  <Chip label={orden.estado} color={getColor(orden.estado)} sx={{ mt: 1 }} />
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={() => handleEdit(orden)}>Editar</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      {/* Drawer de detalle */}
      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        {selected && (
          <Box p={4} width={300}>
            <Typography variant="h6">Detalle de Orden</Typography>
            <Typography><b>Destino:</b> {selected.destino}</Typography>
            <Typography><b>Contenido:</b> {selected.contenido}</Typography>
            <Typography><b>Estado:</b> {selected.estado}</Typography>
          </Box>
        )}
      </Drawer>

      {/* Modal de edición */}
      {selected && (
        <EditOrdenModal
          isOpen={editModalOpen}
          onClose={() => setEditModalOpen(false)}
          orden={selected}
          onSubmit={handleSubmit}
        />
      )}
    </Box>
  );
}
