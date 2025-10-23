import React from "react";
import { TextField, FormControl, FormHelperText } from "@mui/material";

export default function FechaField({ value, onChange, error }) {
  return (
    <FormControl fullWidth margin="normal" error={!!error}>
      <TextField
        label="Fecha"
        name="fecha_creacion"
        type="date"
        value={value}
        onChange={onChange}
        error={!!error}
        variant="outlined"
        InputLabelProps={{
          shrink: true,  // Esto hace que la etiqueta no se superponga al selector de fecha
        }}
      />
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
}
