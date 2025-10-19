import React from "react";
import Tooltip from "@mui/material/Tooltip";

export const TooltipWrapper = React.forwardRef(function TooltipWrapper(props, ref) {
  const {
    showArrow, // Material UI siempre muestra la flecha si enabled
    children,
    disabled,
    content,
    ...rest
  } = props;

  if (disabled) return children;

  return (
    <Tooltip
      title={content}
      arrow={showArrow}
      {...rest}
      ref={ref}
    >
      {children}
    </Tooltip>
  );
});
