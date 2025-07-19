import React from "react";
import { FloatingSkills } from "../ui/FloatingSkills";

export const HBlandas = () => {
  return (
    <section className=" w-full py-12 mb-12">
      <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold gradient-text mb-4 text-center">
        Habilidades Blandas
      </h1>
      <div>
        <FloatingSkills />
      </div>
    </section>
  );
};
