import React from "react";
import { TextField, FormControl, FormHelperText } from "@mui/material";

export default function ContenidoField({ value, onChange, error }) {
  return (
    <FormControl fullWidth margin="normal" error={!!error}>
      <TextField
        label="Contenido"
        name="contenido"
        placeholder="Describí el contenido"
        value={value}
        onChange={onChange}
        variant="outlined"
        multiline
        rows={3}
      />
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
}
