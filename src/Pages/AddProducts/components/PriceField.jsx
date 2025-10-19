import React from "react";
import {
  TextField,
  FormControl,
  FormHelperText
} from "@mui/material";

export default function PriceField({ value, onChange, error }) {
  return (
    <FormControl fullWidth margin="normal" error={!!error}>
      <TextField
        label="Precio"
        name="precio"
        type="number"
        placeholder="Ej: 120000"
        value={value}
        onChange={onChange}
        inputProps={{ min: 0 }}
        error={!!error}
        variant="outlined"
      />
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
}
