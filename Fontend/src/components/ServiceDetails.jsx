import React from "react";
import ServiceOffer from "./ServiceOffer";
import bannerImg from "/assets/blog-img.jpg";
import Testimonials from "./Testimonials";
import Certifications from "./Certifications";
import Faq from "./Faq";

export default function ServiceDetails() {
  return (
    <div className="col-span-2 bg-[var(--card)]
                border border-[var(--border)]
                text-[var(--text)] rounded-xl p-7 flex flex-col gap-10">
      <div className="">
        <div className="flex items-start flex-col-reverse gap-5 lg:flex-row justify-between lg:items-center">
          <h2 className="text-4xl font-semibold">
          Proximas Fechas...  
          </h2>
        </div>
  
      </div>
      <p className="text-lg lg:w-[50%] lg:text-2xl">
        Contenido de Fechas
      </p>

      <div className="flex flex-col gap-10">
        <ServiceOffer />
        <Testimonials />
        <Certifications />
        <Faq />
      </div>
    </div>
  );
}
