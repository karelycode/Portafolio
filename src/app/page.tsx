import Image from "next/image";
import { Banner, AcercaDe, Contacto, HTecnicas } from "@/components";

export default function Home() {
  return (
    <>
      <Banner />
      <AcercaDe />
      <HTecnicas />
      <Contacto />
    </>
  );
}
