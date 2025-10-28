import React from "react";
import { Box, Badge, IconButton, Stack, Typography, Grid } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";

export function OrdenMobileTable({ ordenes = [], onEdit, onDelete }) {
  return (
    <Stack gap={3}>
      {ordenes?.map((orden) => (
        <Box key={orden._id} border={1} borderRadius="12px" bgcolor="white" p={2} boxShadow={1}>
          <Stack gap={1}>
            <Grid container justifyContent="space-between">
              <Grid item xs={8}>
                <Typography variant="body1" fontWeight="bold" noWrap>
                  {orden.destino}
                </Typography>
              </Grid>
              <Grid item xs={4} container justifyContent="flex-end">
          
                <Badge
                  color={orden.estado === "Pendiente" ? "warning" : orden.estado === "En transito" ? "info" : "success"}
                  variant="outlined"
                  sx={{ padding: 0.5 }}
                >
                  {orden.estado || "Desconocido"}
                </Badge>
              </Grid>
            </Grid>

           
            <Typography variant="body2" color="textSecondary" mt={1}>
              Descripción: {orden.descripcion}
            </Typography>

            
            {(onEdit || onDelete) && (
              <Stack direction="row" justifyContent="flex-end" gap={2} mt={2}>
                {onEdit && (
                  <IconButton
                    aria-label="Editar"
                    size="small"
                    color="primary"
                    onClick={() => onEdit(orden)}
                  >
                    <EditIcon />
                  </IconButton>
                )}
                {onDelete && (
                  <IconButton
                    aria-label="Eliminar"
                    size="small"
                    color="error"
                    onClick={() => onDelete(orden)}
                  >
                    <DeleteIcon />
                  </IconButton>
                )}
              </Stack>
            )}
          </Stack>
        </Box>
      ))}
    </Stack>
  );
}
