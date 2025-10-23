import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

export function NavButton({ to, active, children }) {
  return (
    <Button
      component={NavLink}
      to={to}
      variant={active ? "contained" : "text"}  // "solid" ~ "contained", "ghost" ~ "text"
      color="primary"
      size="small"
      sx={{ borderRadius: "12px" }}>
      {children}
    </Button>
  );
}
