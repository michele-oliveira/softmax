import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import plastBlack from "../assets/images/clientes/plast_black.jpg";
import jlJuleRepresentacoes from "../assets/images/clientes/jl_jule_representacoes.jpg";
import isaltoHonda from "../assets/images/clientes/isalto_honda.jpg";
import greengoWood from "../assets/images/clientes/greengo_wood.jpg";
import magnataPlasticos from "../assets/images/clientes/magnata_plasticos.jpg";
import masterinjet from "../assets/images/clientes/masterinjet.jpg";
import oppeano from "../assets/images/clientes/oppeano.png";
import neoStampMetalurgica from "../assets/images/clientes/neo_stamp_metalurgica.jpg";
import guainumbi2 from "../assets/images/clientes/guainumbi2.jpg";
import perMobili from "../assets/images/clientes/per_mobili.png";
import rfcAluminios from "../assets/images/clientes/rfc_aluminios.jpg";
import xcores from "../assets/images/clientes/xcores.jpg";
import corso from "../assets/images/clientes/corso.png";
import coreplas from "../assets/images/clientes/coreplas.jpg";
import bigPiscina from "../assets/images/clientes/big_piscina.png";
import marimar from "../assets/images/clientes/marimar.png";
import metaLogisticaIntegrada from "../assets/images/clientes/meta_logistica_integrada.png";
import engekarAutomotive from "../assets/images/clientes/engekar_automotive.jpg";

function Customers() {
  const images = [
    { src: plastBlack, alt: "Plast Black Pigmentos e Compostos' logo" },
    { src: jlJuleRepresentacoes, alt: "JL Jule Representações' logo" },
    { src: isaltoHonda, alt: "Isalto Honda's logo" },
    { src: greengoWood, alt: "GreenGo Wood's logo" },
    { src: magnataPlasticos, alt: "Magnata Plásticos' logo" },
    { src: masterinjet, alt: "Masterinjet's logo" },
    { src: oppeano, alt: "Oppeano's logo" },
    { src: neoStampMetalurgica, alt: "Neo Stamp Metalúrgica's logo" },
    { src: guainumbi2, alt: "Condomínio Guainumbi II's logo" },
    { src: perMobili, alt: "Per Mobili's logo" },
    { src: rfcAluminios, alt: "RFC Alumínios' logo" },
    { src: xcores, alt: "Xcores' logo" },
    { src: corso, alt: "Corso Móveis e Mármore sintético's logo" },
    { src: coreplas, alt: "Coreplas' logo" },
    { src: bigPiscina, alt: "Big Piscina's logo" },
    { src: marimar, alt: "MariMar Indústria Plástica's logo" },
    { src: metaLogisticaIntegrada, alt: "Meta Logística Integrada's logo" },
    { src: engekarAutomotive, alt: "Engekar Automotive's logo" },
  ];

  return (
    <div className="flex flex-col items-center px-4 py-8">
      <h1 className="text-3xl font-semibold text-slate-900 mb-8">Clientes</h1>
      <div className="relative overflow-hidden w-full max-w-6xl">
        <Swiper
          modules={[Autoplay]}
          loop
          speed={3000}
          spaceBetween={10}
          slidesPerView={2}
          autoplay={{
            delay: 0,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 60,
            },
          }}
          className="sample-slider"
        >
          {images.map((img) => (
            <SwiperSlide key={img.alt}>
              <img
                src={img.src}
                alt={img.alt}
                className="w-40 h-40 object-contain"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Customers;
