import React from "react";
import { TextField, MenuItem } from "@mui/material";

export default function EstadoField({ value, onChange, error }) {
  const opcionesEstado = ["Pendiente", "En transito", "Entregado", "Otros"];

  return (
    <TextField
      select
      label="Estado"
      name="estado"
      value={value}
      onChange={onChange}
      error={!!error}
      helperText={error || ""}
      fullWidth
    >
      <MenuItem value="">Seleccioná un estado</MenuItem>
      {opcionesEstado.map((estado) => (
        <MenuItem key={estado} value={estado}>
          {estado}
        </MenuItem>
      ))}
    </TextField>
  );
}
