import React from "react";
import { useParams } from "react-router-dom";
import { Container, Paper, Typography, Stack } from "@mui/material";
import { useHome } from "../Home/Hooks/useHome";
import { OrderDetailContent } from "../../components/pagesComponents/OrderDetailContent";

export default function OrderDetailPage() {
  const { id } = useParams();
  const { ordenes } = useHome();  // Asegúrate de que `useHome` devuelva órdenes

  // Buscar la orden usando el ID
  const orden = ordenes?.find((o) => (o._id || String(o.id)) === id);

  // Si no se encuentra la orden, mostrar mensaje
  if (!orden) {
    return (
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Typography variant="h6" color="text.secondary">
          Orden no encontrada
        </Typography>
      </Container>
    );
  }

  // Renderizar la orden
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Paper elevation={2} sx={{ p: 4, borderRadius: 3 }}>
        {/* Contenido de la orden */}
        <Stack spacing={2}>
          <OrderDetailContent orden={orden} />
        </Stack>
      </Paper>
    </Container>
  );
}
