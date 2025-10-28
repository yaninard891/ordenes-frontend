import React from "react";
import { Box, Stack, Typography, Chip, Button } from "@mui/material";

export function OrderDetailContent({ orden }) {
  if (!orden) return null;

  return (
    <Stack spacing={3} alignItems="flex-start">
     
   
      
      <Stack direction="row" justifyContent="space-between" width="100%">
        <Typography variant="h6" fontWeight="bold">
          Destino: {orden.destino}
        </Typography>
        <Chip
          label={orden.estado || "Pendiente"}
          color={orden.estado === "Entregado" ? "success" : "warning"}
          variant="outlined"
        />
      </Stack>

      <Box sx={{ height: 1, bgcolor: "grey.300", width: "100%" }} />

      <Stack spacing={1} alignItems="flex-start">
        <Typography variant="body1">
          Contenido: {orden.contenido || "-"}
        </Typography>

        {orden?.fecha && (
          <Typography variant="body2" color="text.secondary">
            Fecha: {new Date(orden.fecha).toLocaleDateString()}
          </Typography>
        )}
      </Stack>

     
      <Stack direction="row" spacing={1} sx={{ pt: 1 }}>
        <Button variant="outlined">Compartir</Button>
      </Stack>
    </Stack>
  );
}
