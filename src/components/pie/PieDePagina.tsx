import { titleFont } from "@/config/fonts";
import React from "react";

export const PieDePagina = () => {
  return (
    <footer
      className={`${titleFont.className} bg-[#13132A] backdrop-blur-sm shadow-sm text-white py-4 text-center`}
    >
      © 2025 Karely Durán. Todos los derechos reservados.
    </footer>
  );
};
