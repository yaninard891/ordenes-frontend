import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  Select,
  MenuItem,
  Button,
  FormControl,
  InputLabel,
  Box,
  Typography,
  Stack,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";

export function FilterDrawer ({ categories = [], onApply }) {
  const [selected, setSelected] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setIsOpen(open);
  };

  const handleApply = () => {
    onApply(selected);
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
            Filtrar por categoría
          </Typography>

          <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel id="categoria-label">Categoría</InputLabel>
            <Select
              labelId="categoria-label"
              value={selected}
              label="Categoría"
              onChange={(e) => setSelected(e.target.value)}
            >
              {categories.map((c, index) => (
                <MenuItem key={`${c}-${index}`} value={c}>
                  {c}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

       
          <Stack direction="row" justifyContent="flex-end" spacing={2} mt={4}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleApply}
              disabled={!selected}
            >
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