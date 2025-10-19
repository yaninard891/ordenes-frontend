import React from "react";
import {
  Box,
  Grid,
  Stack,
  CircularProgress,
  Typography,
  Paper,
} from "@mui/material";
import { useHome } from "./Hooks/useHome";
import FilterDrawer from "./Components/FilterDrawers";


export default function Home() {
  const { categories, setCat, products, loading } = useHome();

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
        <CircularProgress size={40} />
      </Box>
    );
  }

  return (
    <>
      <Stack direction="row" justifyContent="flex-end" mb={4}>
        <FilterDrawer categories={categories} onApply={setCat} />
      </Stack>

      <Grid container spacing={2}>
        {products?.map((item) => (
          <Grid item xs={12} sm={6} lg={4} key={item._id}>
            <Paper
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
              }}
              onClick={() => console.log("Ver detalle de", item.nombre)}
            >
              <Typography variant="subtitle1" fontWeight="bold">
                {item.nombre}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.categoria}
              </Typography>
              <Typography variant="body1" color="primary">
                ${item.precio}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
