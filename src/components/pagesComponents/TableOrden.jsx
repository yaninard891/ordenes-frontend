import React from "react";
import { useMediaQuery } from "@mui/material";
import { OrdenesTableDesktop } from "./DesktopTable/OrdenesDesktopTable";
import { OrdenMobileTable } from "./MobileTable/OrdenMobileTable";

export function TableOrden({ ordenes = [], onEdit, onDelete }) {
  // Detecta si es escritorio
  const isDesktop = useMediaQuery("(min-width:900px)");

  if (isDesktop) {
    return (
      <OrdenesTableDesktop
        ordenes={ordenes}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    );
  }

  return (
    <OrdenMobileTable
      ordenes={ordenes}
      onEdit={onEdit}
      onDelete={onDelete}
    />
  );
}
