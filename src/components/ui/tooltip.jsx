import React from "react";
import Tooltip from "@mui/material/Tooltip";

export const TooltipWrapper = React.forwardRef(function TooltipWrapper(props, ref) {
  const {
    showArrow, 
    disabled,
    content,
    children,
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
