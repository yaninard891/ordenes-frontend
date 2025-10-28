import React, { useEffect, useState } from "react";
import { Box, Container, Typography, Button, Snackbar, Alert, CircularProgress } from "@mui/material";
import { TableOrden } from "../../components/pagesComponents/TableOrden";
import { EditOrdenModal } from "../UpdateOrden/Components/EditOrdenModal";
import { updateOrden } from "../../services/updateOrden";
import { getOrderByState } from "../../services/getOrderByState"; 

export default function UpdateOrdenPages() {
  const [orders, setOrders] = useState([]); 
  const [editingOrder, setEditingOrder] = useState(null); 
  const [openModal, setOpenModal] = useState(false); 
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });
  const [loading, setLoading] = useState(true); 

  
  useEffect(() => {
    getOrderByState()
      .then((data) => {
        setOrders(data);
        setLoading(false);
      })
      .catch((error) => {
        setSnackbar({ open: true, message: "Error al cargar las órdenes", severity: "error" });
        setLoading(false);
      });
  }, []);

 
  const handleEdit = (order) => {
    setEditingOrder(order);
    setOpenModal(true); 
  };

 
  const handleCloseModal = () => setOpenModal(false);

  
  const handleSubmit = async (form) => {
    try {
      const response = await updateOrden (form, editingOrder._id); 
      if (response?.status === 200) {
        setSnackbar({
          open: true,
          message: "Orden actualizada exitosamente",
          severity: "success",
        });
        
        setOrders((prevOrders) =>
          prevOrders.map((order) =>
            order._id === editingOrder._id ? { ...order, ...form } : order
          )
        );
      } else {
        setSnackbar({
          open: true,
          message: "Error al actualizar la orden",
          severity: "error",
        });
      }
    } catch (error) {
      setSnackbar({
        open: true,
        message: "Error al actualizar la orden",
        severity: "error",
      });
    } finally {
      handleCloseModal();
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Editar Órdenes
      </Typography>

      
      {loading ? (
        <Box display="flex" justifyContent="center" mt={10}>
          <CircularProgress size={60} thickness={5} />
        </Box>
      ) : (
        <>
          
          <TableOrden orders={orders} onEdit={handleEdit} />

          
          {editingOrder && (
            <EditOrdenModal
              isOpen={openModal}
              onClose={handleCloseModal}
              order={editingOrder}
              onSubmit={handleSubmit}
            />
          )}
        </>
      )}

      
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert severity={snackbar.severity}>{snackbar.message}</Alert>
      </Snackbar>
    </Container>
  );
}
