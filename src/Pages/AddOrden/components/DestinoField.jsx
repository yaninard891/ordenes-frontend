import React from "react";
import { TextField, FormControl } from "@mui/material";

export default function DestinoField({ value, onChange, error }) {
  return (
    <FormControl fullWidth margin="normal">
      <TextField
        label="Destino"
        name="destino"
        placeholder="Ingresá el destino..."
        value={value}
        onChange={onChange}
        variant="outlined"
        error={!!error}
        helperText={error}
      />
    </FormControl>
  );
}
