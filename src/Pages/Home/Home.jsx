import React from "react";
import { Box, Stack, CircularProgress, Typography, Paper } from "@mui/material";
import { useHome } from "./Hooks/useHome";

import { FilterDrawer } from "./Components/FilterDrawer";

export default function Home() {
  const { estado, setEstado, products, loading } = useHome();

  return (
    <Box>
     
      <Stack direction="row" justifyContent="flex-end" mb={4}>
        <FilterDrawer onApply={setEstado} />
      </Stack>

    
      {loading && (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
          <CircularProgress size={40} />
        </Box>
      )}

      {/* Texto del estado filtrado */}
      {!loading && (
        <Typography variant="h6" mb={2}>
          {estado
            ? `Mostrando órdenes con estado: ${estado}`
            : "Mostrando todas las órdenes"}
        </Typography>
      )}

      
      {!loading && (
        <>
          {products.length === 0 ? (
            <Typography variant="h6" textAlign="center" color="text.secondary">
              No hay órdenes para el estado seleccionado.
            </Typography>
          ) : (
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 2,
                justifyContent: { xs: "center", sm: "flex-start" },
              }}
            >
              {products.map((item) => (
                <Paper
                  key={item._id}
                  elevation={3}
                  sx={{
                    p: 2,
                    borderRadius: 4,
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      backgroundColor: "rgba(255, 244, 229, 0.6)",
                      transform: "translateY(-3px)",
                    },
                    flex: {
                      xs: "1 1 100%",
                      sm: "1 1 48%",
                      lg: "1 1 30%",
                    },
                    boxSizing: "border-box",
                  }}
                >
                  <Typography variant="subtitle1" fontWeight="bold">
                    Destino: {item.destino}
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    Contenido: {item.contenido}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 500,
                      color:
                        item.estado === "Pendiente"
                          ? "warning.main"
                          : item.estado === "Entregado"
                          ? "success.main"
                          : "info.main",
                    }}
                  >
                    Estado: {item.estado}
                  </Typography>

                  <Typography variant="caption" color="text.secondary">
                    Fecha: {new Date(item.fecha_creacion).toLocaleDateString()}
                  </Typography>
                </Paper>
              ))}
            </Box>
          )}
        </>
      )}
    </Box>
  );
}
