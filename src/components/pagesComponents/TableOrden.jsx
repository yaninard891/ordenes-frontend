import React from "react";
import { Table, TableHead, TableBody, TableRow, TableCell, Button } from "@mui/material";
import { Chip } from "@mui/material";

const TableOrden = ({ orders, onEdit }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "Pendiente":
        return "warning";
      case "En transito":
        return "info";
      case "Entregado":
        return "success";
      default:
        return "default";
    }
  };

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Destino</TableCell>
          <TableCell>Contenido</TableCell>
          <TableCell>Estado</TableCell>
          <TableCell>Acciones</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {orders.map((order) => (
          <TableRow key={order._id}>
            <TableCell>{order.destino}</TableCell>
            <TableCell>{order.contenido}</TableCell>
            <TableCell>
              <Chip label={order.estado} color={getStatusColor(order.estado)} size="small" />
            </TableCell>
            <TableCell>
              <Button
                variant="contained"
                color="primary"
                size="small"
                onClick={() => onEdit(order)}
              >
                Editar
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export { TableOrden };
