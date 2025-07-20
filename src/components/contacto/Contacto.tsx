import React from "react";
import { IoLogoLinkedin, IoLogoGithub, IoMail } from "react-icons/io5";

export const Contacto = () => {
  return (
    <section id="contacto" className=" w-full py-12 mb-15">
      <div className="flex flex-col items-center justify-center w-full px-4 py-12 md:py-0">
        <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold gradient-text mb-8 text-center">
          ¿Trabajamos juntos?
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-white mb-12 max-w-6xl text-center">
          Estoy siempre interesada en nuevos proyectos y oportunidades. Si
          tienes una idea o necesitas ayuda con desarrollo de software,
          hablemos.
        </p>
        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/in/karelyd-code"
            className="bg-gradient-to-tr from-[#6a5af9] to-[#e254e9] rounded-full p-4 flex items-center justify-center text-white text-2xl shadow-lg transition-transform hover:scale-110"
          >
            <IoLogoLinkedin />
          </a>
          <a
            href="https://github.com/karelycode"
            className="bg-gradient-to-tr from-[#6a5af9] to-[#e254e9] rounded-full p-4 flex items-center justify-center text-white text-2xl shadow-lg transition-transform hover:scale-110"
          >
            <IoLogoGithub />
          </a>
          <a
            href="mailto:karelycode@gmail.com"
            className="bg-gradient-to-tr from-[#6a5af9] to-[#e254e9] rounded-full p-4 flex items-center justify-center text-white text-2xl shadow-lg transition-transform hover:scale-110"
          >
            <IoMail />
          </a>
        </div>
      </div>
    </section>
  );
};
