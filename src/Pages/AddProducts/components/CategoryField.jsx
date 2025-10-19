import React from "react";
import {FormControl, InputLabel, Select, MenuItem, TextField, FormHelperText} from "@mui/material";

export default function CategoryField({
  categorias,
  categoriaControl,
  onChangeCategoria,
  nuevaCategoria,
  setNuevaCategoria,
  errorCategoria,
  errorNuevaCategoria,
}) {
  const hasErr = !!errorCategoria || !!errorNuevaCategoria;

  return (
    <>
      <FormControl fullWidth margin="normal" error={hasErr}>
        <InputLabel id="categoria-label">Categoría</InputLabel>
        <Select
          labelId="categoria-label"
          name="categoriaControl"
          value={categoriaControl}
          label="Categoría"
          onChange={onChangeCategoria}
        >
          <MenuItem value="">Seleccioná una categoría o añadí otra</MenuItem>

          {categorias.map((cat) => (
            <MenuItem key={cat} value={cat}>
              {cat}
            </MenuItem>
          ))}

          <MenuItem value="añadir">➕ Añadir nueva categoría</MenuItem>
        </Select>

        {errorCategoria && (
          <FormHelperText>{errorCategoria}</FormHelperText>
        )}
      </FormControl>

      {categoriaControl === "añadir" && (
        <FormControl fullWidth margin="normal" error={!!errorNuevaCategoria}>
          <TextField
            name="nuevaCategoria"
            label="Nueva categoría"
            placeholder="Ingresá una nueva categoría..."
            value={nuevaCategoria}
            onChange={(e) => setNuevaCategoria(e.target.value)}
            error={!!errorNuevaCategoria}
          />
          {errorNuevaCategoria && (
            <FormHelperText>{errorNuevaCategoria}</FormHelperText>
          )}
        </FormControl>
      )}
    </>
  );
}
