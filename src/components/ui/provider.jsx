"use client";

import React from "react";
import { ColorModeProvider } from "./color-mode"; // el que definimos antes
// importamos ThemeProvider de MUI en color-mode, no acá
// import tu tema base, si tenés uno personalizado:


export function Provider(props) {
  return (
    <ColorModeProvider {...props}>
      {props.children}
    </ColorModeProvider>
  );
}
