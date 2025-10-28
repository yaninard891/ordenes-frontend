import React from "react";
import { Drawer, Box, Typography, Button, Stack } from "@mui/material";

export function OrdenDetailDrawer({ isOpen, onClose, orden }) {
  if (!orden) return null;

  return (
    <Drawer
      anchor="right"
      open={isOpen}
      onClose={onClose}
      PaperProps={{ sx: { width: 350, p: 3 } }}
    >
      
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h6">Detalle de Orden</Typography>
        <Button variant="outlined" size="small" onClick={onClose}>
          Cerrar
        </Button>
      </Stack>

      
      <Box mb={3}>
        <Typography variant="subtitle1" fontWeight="bold">Destino:</Typography>
        <Typography variant="body1" mb={2}>{orden.destino}</Typography>

        <Typography variant="subtitle1" fontWeight="bold">Contenido:</Typography>
        <Typography variant="body1" mb={2}>{orden.contenido}</Typography>

        <Typography variant="subtitle1" fontWeight="bold">Estado:</Typography>
        <Typography variant="body1">{orden.estado}</Typography>
      </Box>

     
      <Stack direction="row" spacing={2} mt="auto">
        <Button variant="contained" color="primary" onClick={() => console.log("Acción")}>
          Acción
        </Button>
        <Button variant="outlined" onClick={onClose}>
          Cerrar
        </Button>
      </Stack>
    </Drawer>
  );
}
