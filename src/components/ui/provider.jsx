"use client";

import React from "react";
import { ColorModeProvider } from "./color-mode"; 


export function Provider(props) {
  return (
    <ColorModeProvider {...props}>
      {props.children}
    </ColorModeProvider>
  );
}