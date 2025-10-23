import React, { useState } from "react";
import { Drawer, IconButton, Select, MenuItem, Button, FormControl, InputLabel, Box, Typography, Stack,} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";

export function FilterDrawer({ onApply }) {
  const [selected, setSelected] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open) => () => setIsOpen(open);

  const handleApply = () => {
    onApply(selected || null);
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
          padding: "10px",
        }}
      >
        <FilterListIcon />
      </IconButton>

      <Drawer anchor="right" open={isOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 300, padding: 3 }}>
          <Typography variant="h6" gutterBottom>
            Filtrar por estado
          </Typography>

          <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel id="estado-label">Estado</InputLabel>
            <Select
              labelId="estado-label"
              value={selected}
              label="Estado"
              onChange={(e) => setSelected(e.target.value)}
            >
              <MenuItem value="">Todos</MenuItem>
              <MenuItem value="Pendiente">Pendiente</MenuItem>
              <MenuItem value="En transito ">En transito</MenuItem>
              <MenuItem value="Entregada">Entregada</MenuItem>
            </Select>
          </FormControl>

          <Stack direction="row" justifyContent="flex-end" spacing={2} mt={4}>
            <Button variant="contained" color="primary" onClick={handleApply}>
              Aplicar
            </Button>
            <Button variant="outlined" onClick={toggleDrawer(false)}>
              Cancelar
            </Button>
          </Stack>
        </Box>
      </Drawer>
    </>
  );
}
