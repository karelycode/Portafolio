"use client";
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import AnimatedSection from "../common/AnimatedSection";

const info = [
  {
    titulo: "Comunity Manager y UX/UI Specialist",
    lugar: <span className="text-[#6a5af9] ">Fortune Acoustics</span>,
    period: (
      <span className="bg-[#6a5af9] rounded-2xl p-3 mr-3 flex items-center justify-center">
        Presente
      </span>
    ),
    content: (
      <div>
        En Fortune Acoustics, mi trabajo es hacer que la experiencia digital sea
        más amable y efectiva para las personas. Actualmente estoy renovando
        nuestra tienda online para que la interfaz de usuario sea más intuitiva
        y atractiva. También estoy creando constantemente landing pages para
        mejorar la conversión.
        <br />
        Al igual, me encargo de la gestión de redes sociales, creando contenido
        atractivo y relevante para nuestra audiencia, lo que nos ayuda a
        aumentar nuestro alcance y engagement.
      </div>
    ),
  },
  {
    titulo: "Project Manager y desarrolladora",
    lugar: <span className="text-[#B514C6]">Clarify</span>,
    period: (
      <span className="bg-[#B514C6] rounded-2xl p-3 mr-3 flex items-center justify-center">
        2024
      </span>
    ),
    content: (
      <div>
        Premiada en ‘Innovatec 2024’, esta app en Flutter empodera a personas
        con discapacidad visual mediante un asistente de IA que ‘ve’ por ellos.
        Mi rol: diseñar una experiencia intuitiva con voz clara, vibraciones
        orientativas y colores de alto contraste, además de liderar el equipo
        técnico y convencer al jurado con una narrativa humana sobre inclusión.
      </div>
    ),
  },
];

export const Experiencia = () => {
  return (
    <AnimatedSection>
      <section className=" w-full py-12 mb-12">
        <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold gradient-text mb-10 text-center">
          Experiencia
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6 max-w-7xl mx-auto items-stretch">
          {info.map((item, idx) => (
            <BackgroundGradient
              key={idx}
              className="bg-[#18162a] rounded-3xl p-4  w-full h-full flex flex-col"
            >
              <div className="flex items-center mb-2">{item.period}</div>
              <div>
                <h2 className="text-lg font-semibold text-white mb-2">
                  {item.titulo}
                </h2>
              </div>
              <div className="flex items-center mb-2">
                <span>{item.lugar}</span>
              </div>
              <div className="text-white text-sm">{item.content}</div>
            </BackgroundGradient>
          ))}
        </div>
      </section>
    </AnimatedSection>
  );
};
