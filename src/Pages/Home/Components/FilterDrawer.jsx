import React, { useState } from "react";
import { Drawer, IconButton, Select, MenuItem, Button, FormControl, InputLabel, Box, Typography, Stack, } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";

export function FilterDrawer({onApply}) {
  const [selected, setSelected] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open) => () => setIsOpen(open);

  const handleApply = () => {
    onApply(selected || null); 
    setIsOpen(false);
  };

  const handleClear = () => {
    setSelected("");
    onApply(null);
    setIsOpen(false);
  };

  return (
    <>
     
      <IconButton
        aria-label="Abrir filtro"
        onClick={toggleDrawer(true)}
        sx={{
          bgcolor: "primary.main",
          color: "white",
          borderRadius: "12px",
          p: 1.5,
          ":hover": { bgcolor: "primary.dark" },
        }}
      >
        <FilterListIcon />
      </IconButton>

      <Drawer anchor="right" open={isOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 300, p: 3 }}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Filtro por Estado
          </Typography>

          <FormControl fullWidth sx={{ mt: 3 }}>
            <InputLabel>Estado</InputLabel>
            <Select
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
              label="Estado"
            >
              <MenuItem value="">Todos</MenuItem> 
              <MenuItem value="Pendiente">Pendiente</MenuItem>
              <MenuItem value="En transito">En transito</MenuItem>
              <MenuItem value="Entregado">Entregado</MenuItem>
            </Select>
          </FormControl>

         
         <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
            <Button
              onClick={handleClear}
              variant="outlined"
              color="error"
              sx={{ flex: 1, mr: 1 }}
            >
              Limpiar
            </Button>
            <Button
              onClick={handleApply}
              variant="contained"
              color="primary"
              sx={{ flex: 1 }}
            >
              Aplicar
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
