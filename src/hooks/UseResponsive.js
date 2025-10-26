import { useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";

export function useResponsiveOrderDetail() {
  const [isOpen, setIsOpen] = useState(false);

  // Detecta si es desktop usando MUI
  const isDesktop = useMediaQuery("(min-width: 860px)");

  const navigate = useNavigate();

  const openDetail = useCallback(
    (order) => {
      if (isDesktop) {
        setIsOpen(true); // Abrir drawer en desktop
      } else {
        navigate(`/order/${order._id}`); // Ir a la página de detalle en móvil
      }
    },
    [isDesktop, navigate]
  );

  const onClose = useCallback(() => setIsOpen(false), []);

  return { isOpen, onClose, openDetail, isDesktop };
}
