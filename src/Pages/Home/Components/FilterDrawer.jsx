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

export function FilterDrawer({ options = [], onApply, label = "Filtro" }) {
  const [selected, setSelected] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open) => () => setIsOpen(open);

  const handleApply = () => {
    onApply(selected || null); // pasa null si no hay filtro
    setIsOpen(false);
  };

  const handleClear = () => {
    setSelected("");
    onApply(null);
    setIsOpen(false);
  };

  return (
    <>
      {/* Botón para abrir el drawer */}
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

      {/* Drawer lateral */}
      <Drawer anchor="right" open={isOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 300, p: 3 }}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            {label}
          </Typography>

          <FormControl fullWidth sx={{ mt: 3 }}>
