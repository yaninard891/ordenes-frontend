import React from "react";
import { TextField, FormControl, FormHelperText } from "@mui/material";

export default function ProductNameField({ value, onChange, error }) {
  return (
    <FormControl fullWidth margin="normal" error={!!error}>
      <TextField
        label="Nombre del producto"
        name="nombre"
        placeholder="Ej: Notebook HP"
        value={value}
        onChange={onChange}
        error={!!error}
        variant="outlined"
      />
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
}
