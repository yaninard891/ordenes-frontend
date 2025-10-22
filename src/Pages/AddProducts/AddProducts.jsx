import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  Paper,
  Snackbar,
} from "@mui/material";
import { useAddProductForm } from "./Hooks/useAddProductForm";
import ProductNameField from "./components/ProductNameField";
import PriceField from "./components/PriceField";
import CategoryField from "./components/CategoryField";
import DescriptionField from "./components/DescriptionField";

export default function AddProducts() {
  const {
    form,
    categorias,
    categoriaControl,
    nuevaCategoria,
    errors,
    onChange,
    onChangeCategoria,
    onSubmit,
    setNuevaCategoria,
    snackbar, setSnackbar,
  } = useAddProductForm();

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") return;
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  return (
    <Paper
      elevation={3}
      sx={{
        maxWidth: 600,
        mx: "auto",
        mt: 4,
        p: 4,
        borderRadius: 3,
        bgcolor: "background.paper",
      }}
    >
      <form id="add-product-form" onSubmit={onSubmit} noValidate>
        <Typography variant="h5" mb={3} color="primary">
          Cargar nuevo producto
        </Typography>

        <Stack spacing={3}>
          <ProductNameField
            value={form.nombre}
            onChange={onChange}
            error={errors.nombre}
          />

          <PriceField
            value={form.precio}
            onChange={onChange}
            error={errors.precio}
          />

          <CategoryField
            categorias={categorias}
            categoriaControl={categoriaControl}
            onChangeCategoria={onChangeCategoria}
            nuevaCategoria={nuevaCategoria}
            setNuevaCategoria={setNuevaCategoria}
            errorCategoria={errors.categoria}
            errorNuevaCategoria={errors.nuevaCategoria}
          />

          <DescriptionField
            value={form.descripcion}
            onChange={onChange}
            error={errors.descripcion}
          />
        </Stack>

        <Button
          type="submit"
          variant="contained"
          size="large"
          color="primary"
          sx={{ mt: 4, borderRadius: 2 }}
        >
          Guardar producto
        </Button>
      </form>

       <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
      
      </Snackbar>
    </Paper>
  );
}

