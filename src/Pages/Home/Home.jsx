import React, { useState } from "react";
import { Box, Grid, Card, CardContent, Typography, Chip, CircularProgress, FormControl, InputLabel, Select, MenuItem, Divider, IconButton, Drawer, } from "@mui/material";
import { useHome } from "./Hooks/useHome";
import { EditOrdenModal } from "../UpdateOrden/Components/EditOrdenModal";
import { updateOrden } from "../../services/updateOrden";
import CloseIcon from "@mui/icons-material/Close";


const getColor = (estado) => {
  switch (estado) {
    case "Pendiente":
      return "warning";
    case "En transito":
      return "info";
    case "Entregado":
      return "success";
    default:
      return "default"; }
};

export default function Home() {
  const {
    ordenesFiltradas,
    loading,
    error,
    estadosDisponibles,
    estadoSeleccionado,
    setEstadoSeleccionado,
  } = useHome();

  const [selectedDetail, setSelectedDetail] = useState(null); 
  const [selectedForEdit] = useState(null); 
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  
  const handleOpenDrawer = (orden) => {
    setSelectedDetail(orden);
    setDrawerOpen(true);
  };

  
  const handleSubmit = async (data) => {
    if (!selectedForEdit) return;
    try {
      const res = await updateOrden(data, selectedForEdit._id);
      if (res?._id) alert("Orden actualizada correctamente");
    } catch (err) {
      console.error("Error al actualizar orden:", err);
      alert("Error al actualizar la orden.");
    } finally {
      setEditModalOpen(false);
    }
  };


  if (loading)
    return (
      <Box display="flex" justifyContent="center" mt={10}>
        <CircularProgress size={60} thickness={5} />
      </Box>
    );

  if (error)
    return (
      <Box display="flex" justifyContent="center" mt={10}>
        <Typography color="error">{error}</Typography>
      </Box>
    );


    return (
    <Box p={4}>
      <Typography variant="h4" mb={4} fontWeight="bold">
        Gestión de Órdenes
      </Typography>

      
      <FormControl sx={{ minWidth: 220, mb: 4 }}>
        <InputLabel>Filtrar por estado</InputLabel>
        <Select
          value={estadoSeleccionado}
          label="Filtrar por estado"
          onChange={(e) => setEstadoSeleccionado(e.target.value)}
        >
          <MenuItem value="">Todas</MenuItem>
          {estadosDisponibles.map((est) => (
            <MenuItem key={est} value={est}>
              <Chip label={est} color={getColor(est)} size="small" />
            </MenuItem>
          ))}
        </Select>
      </FormControl>


      {ordenesFiltradas.length === 0 ? (
       <Typography>No hay órdenes disponibles.</Typography>
      ):(

      <Grid container spacing={4}>
  {ordenesFiltradas.map((orden) => (
    <Grid item key={orden._id} sx={{ width: { xs: '100%', sm: '50%', md: '33.33%' } }}>
      <Card
        sx={{
          cursor: "pointer",
          transition: "0.3s ease",
          ":hover": { boxShadow: 8, transform: "translateY(-4px)" },
        }}
        onClick={() => handleOpenDrawer(orden)}
      >
        <CardContent>
          <Typography variant="h6" noWrap sx={{ fontWeight: "bold", mb: 1 }}>
            {orden.destino}
          </Typography>
          <Typography variant="body2" color="text.secondary" noWrap sx={{ mb: 1 }}>
            {orden.contenido}
          </Typography>
          <Chip
            label={orden.estado}
            color={getColor(orden.estado)}
            size="small"
          />
        </CardContent>
      </Card>
    </Grid>
  ))}
</Grid>

  )}

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: { width: { xs: "90%", sm: 350 }, p: 3, bgcolor: "background.paper" },
        }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">Detalle de la Orden</Typography>
          <IconButton onClick={() => setDrawerOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider sx={{ my: 2 }} />
        {selectedDetail && (
          <Box>
            <Typography variant="body1">
              <b>Destino:</b> {selectedDetail.destino}
            </Typography>
            <Typography variant="body1" mt={1}>
              <b>Contenido:</b> {selectedDetail.contenido}
            </Typography>
            <Typography variant="body1" mt={1}>
              <b>Estado:</b>{" "}
              <Chip label={selectedDetail.estado} color={getColor(selectedDetail.estado)} />
            </Typography>
            <Typography variant="body2" color="text.secondary" mt={2}>
              <b>ID:</b> {selectedDetail._id}
            </Typography>
          </Box>
        )}
      </Drawer>

     
      {selectedForEdit && (
        <EditOrdenModal
          isOpen={editModalOpen}
          onClose={() => setEditModalOpen(false)}
          orden={selectedForEdit}
          onSubmit={handleSubmit}
        />
      )}
    </Box>
  );
}
