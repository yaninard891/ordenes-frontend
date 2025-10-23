import React from "react";
import { TextField, MenuItem } from "@mui/material";

const opcionesEstado = ["Pendiente", "Entregada", "En transito"];

export default function EstadoField({ value, onChange, error, helperText }) {
  return (
    <TextField
      select
      label="Estado"
      name="estado"
      value={value}
      onChange={onChange}
      error={error}
      helperText={helperText}
      fullWidth
    >
      {opcionesEstado.map((estado) => (
        <MenuItem key={estado} value={estado}>
          {estado}
        </MenuItem>
      ))}
    </TextField>
  );
}
