import React from "react";
import { IoLogoLinkedin, IoLogoGithub, IoMail } from "react-icons/io5";
import AnimatedSection from "../common/AnimatedSection";
import { Button } from "../ui/moving-border";

export const Contacto = () => {
  return (
    <AnimatedSection>
      <section id="contacto" className=" w-full py-12 mb-15">
        <div className="flex flex-col items-center justify-center w-full px-4 py-12 md:py-0">
          <h1 className="text-5xl sm:text-6xl md:text-6xl font-bold gradient-text mb-8 text-center">
            ¿Trabajamos juntos?
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white mb-12 max-w-6xl text-center">
            Si estás interesado en colaborar conmigo o tienes alguna pregunta,
            no dudes en contactarme. Estoy abierta a nuevas oportunidades y
            emocionada por la posibilidad de trabajar juntos.
          </p>
          <Button as="a" href="/CV-UX Karely Duran.pdf" download>
            Descargar CV
          </Button>
          <div className="flex gap-6 my-8">
            <a
              href="https://www.linkedin.com/in/karelyd-code"
              className="bg-[#18162a]/80 hover:bg-[#a127c1]  rounded-full p-4 flex items-center justify-center text-white text-2xl shadow-lg transition-transform hover:scale-110"
            >
              <IoLogoLinkedin />
            </a>
            <a
              href="https://github.com/karelycode"
              className="bg-[#18162a]/80 hover:bg-[#a127c1]  rounded-full p-4 flex items-center justify-center text-white text-2xl shadow-lg transition-transform hover:scale-110"
            >
              <IoLogoGithub />
            </a>
            <a
              href="mailto:karelycode@gmail.com"
              className="bg-[#18162a]/80 hover:bg-[#a127c1] rounded-full p-4 flex items-center justify-center text-white text-2xl shadow-lg transition-transform hover:scale-110"
            >
              <IoMail />
            </a>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};
