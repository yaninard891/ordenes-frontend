import React from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  IconButton,
  Typography,
  Paper,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export function OrdenesTableDesktop({ ordenes = [], onEdit, onDelete }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 800 }} size="small">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Destino</TableCell>
            <TableCell>Contenido</TableCell>
            <TableCell>Estado</TableCell>
            <TableCell align="right">Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ordenes.map((orden) => (
            <TableRow key={orden._id}>
              <TableCell>{orden._id}</TableCell>
              <TableCell>
                <Typography noWrap>{orden.destino}</Typography>
              </TableCell>
              <TableCell>
                <Typography noWrap>{orden.contenido}</Typography>
              </TableCell>
              <TableCell>
                <Chip label={orden.estado} color="primary" size="small" />
              </TableCell>
              <TableCell align="right">
                {onEdit && (
                  <IconButton
                    size="small"
                    color="primary"
                    onClick={() => onEdit(orden)}
                  >
                    <EditIcon fontSize="small" />
                  </IconButton>
                )}
                {onDelete && (
                  <IconButton
                    size="small"
                    color="error"
                    onClick={() => onDelete(orden)}
                  >
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
