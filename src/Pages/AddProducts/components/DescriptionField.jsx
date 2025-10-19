import React from "react";
import { TextField, FormControl } from "@mui/material";

export default function DescriptionField({ value, onChange }) {
  return (
    <FormControl fullWidth margin="normal">
      <TextField
        label="Descripción"
        name="descripcion"
        placeholder="Detalles del producto..."
        value={value}
        onChange={onChange}
        multiline
        rows={4}
        variant="outlined"
      />
    </FormControl>
  );
}
