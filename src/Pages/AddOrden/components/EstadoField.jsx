import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  FormHelperText,
} from "@mui/material";

export default function EstadoField({
  estados,              // Lista de opciones para estado (antes categorias)
  estadoControl,        // Valor seleccionado
  onChangeEstado,       // Función para manejar cambios
  nuevoEstado,          // Nuevo estado para añadir (opcional)
  setNuevoEstado,       // Setter para nuevo estado
  errorEstado,          // Error para estadoControl
  errorNuevoEstado,     // Error para nuevoEstado
}) {
  const hasErr = !!errorEstado || !!errorNuevoEstado;

  return (
    <>
      <FormControl fullWidth margin="normal" error={hasErr}>
        <InputLabel id="estado-label">Estado</InputLabel>
        <Select
          labelId="estado-label"
          name="estadoControl"
          value={estadoControl}
          label="Estado"
          onChange={onChangeEstado}
        >
          <MenuItem value="">Seleccioná un estado o añadí otro</MenuItem>

          {estados.map((est) => (
            <MenuItem key={est} value={est}>
              {est}
            </MenuItem>
          ))}

          <MenuItem value="añadir">➕ Añadir nuevo estado</MenuItem>
        </Select>

        {errorEstado && <FormHelperText>{errorEstado}</FormHelperText>}
      </FormControl>

      {estadoControl === "añadir" && (
        <FormControl fullWidth margin="normal" error={!!errorNuevoEstado}>
          <TextField
            name="nuevoEstado"
            label="Nuevo estado"
            placeholder="Ingresá un nuevo estado..."
            value={nuevoEstado}
            onChange={(e) => setNuevoEstado(e.target.value)}
            error={!!errorNuevoEstado}
          />
          {errorNuevoEstado && (
            <FormHelperText>{errorNuevoEstado}</FormHelperText>
          )}
        </FormControl>
      )}
    </>
  );
}
