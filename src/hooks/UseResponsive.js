import { useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";

export function useResponsiveOrderDetail() {
  const [isOpen, setIsOpen] = useState(false);

 
  const isDesktop = useMediaQuery("(min-width: 860px)");

  const navigate = useNavigate();

  const openDetail = useCallback(
    (order) => {
      if (isDesktop) {
        setIsOpen(true); 
      } else {
        navigate(`/order/${order._id}`); 
      }
    },
    [isDesktop, navigate]
  );

  const onClose = useCallback(() => setIsOpen(false), []);

  return { isOpen, onClose, openDetail, isDesktop };
}
