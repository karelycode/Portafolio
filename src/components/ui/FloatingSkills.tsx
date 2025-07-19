"use client";
import React from "react";
import { motion } from "framer-motion";
import { BackgroundGradient } from "../ui/background-gradient";

// Datos de cada habilidad: título y color de fondo
const skills = [
  { title: "Liderazgo", color: "bg-[#18162a]" },
  { title: "Adaptabilidad", color: "bg-[#18162a]" },
  { title: "Responsabilidad", color: "bg-[#18162a]" },
  { title: "Empatía", color: "bg-[#18162a]" },
  { title: "Creatividad", color: "bg-[#18162a]" },
  { title: "Comunicación", color: "bg-[#18162a]" },
  { title: "Resolución de problemas", color: "bg-[#18162a]" },
];

// Posiciones en grid 7x2 para un acomodo intercalado
const positions = [
  { col: 1, row: 1 }, // Liderazgo
  { col: 3, row: 1 }, // Adaptabilidad
  { col: 5, row: 1 }, // Responsabilidad
  { col: 7, row: 1 }, // Empatía
  { col: 2, row: 2 }, // Creatividad
  { col: 4, row: 2 }, // Comunicación
  { col: 6, row: 2 }, // Resolución
];

export const FloatingSkills: React.FC = () => {
  return (
    <div className="w-full py-16 justify-center mx-auto">
      <div className="grid grid-cols-7 grid-rows-2 gap-y-12 justify-items-center px-4 sm:px-0">
        {skills.map((skill, idx) => (
          <motion.div
            key={skill.title}
            style={{
              gridColumn: positions[idx].col,
              gridRow: positions[idx].row,
            }}
            initial={{ y: 0 }}
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: idx * 0.2,
            }}
          >
            <BackgroundGradient
              key={idx}
              className="bg-[#18162a] rounded-3xl p-4  w-full h-full flex flex-col"
            >
              <span className="text-white text-xs sm:text-sm text-center px-1">
                {skill.title}
              </span>
            </BackgroundGradient>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
