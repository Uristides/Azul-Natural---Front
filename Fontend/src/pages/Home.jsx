import React from "react";
import AboutCard from "../components/AboutCard";
import ComentariosHome from "../components/ComentariosHome";
import ExpertArea from "../components/ExpertArea";
import ServiceOffer from "../components/ServiceOffer";
import ProjectCards from "../components/ProjectCards";
import GallerySlider from "../components/GallerySlider";
import Head from "../lib/Head";
import Layoud from "../components/Layoud";

// Hero/gallery images with descriptive alt
const images = [
  {
    src: "https://res.cloudinary.com/dk3wbra6k/image/upload/v1776938925/WhatsApp_Image_2026-04-23_at_4.03.44_AM_vro7rj.jpg",
    alt: "City skyline at dusk with reflections on water",
  },
  {
    src: "https://res.cloudinary.com/dk3wbra6k/image/upload/v1776938925/WhatsApp_Image_2026-04-23_at_4.03.46_AM_msnscw.jpg",
    alt: "Abstract gradient texture in vibrant colors",
  },
  {
    src: "https://res.cloudinary.com/dk3wbra6k/image/upload/v1776938925/WhatsApp_Image_2026-04-23_at_4.03.42_AM_1_d1o2lp.jpg",
    alt: "Snow-capped mountains surrounding a calm lake",
  },
];

const SITE_URL = "https://priscy-orcin.vercel.app";
const COVER_URL = "https://priscy-orcin.vercel.app/og-cover.jpg";
const LOGO_URL = "https://res.cloudinary.com/dk3wbra6k/image/upload/v1776939244/sin_fondo_con_texto_q3omvg.png";
const TITLE = "Azul Natural";
const DESCRIPTION =
  "Explore UI/UX, full-stack development, branding, and product design projects.";

export default function Home() {
  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: TITLE,
    url: SITE_URL,
    description: DESCRIPTION,
    primaryImageOfPage: { "@type": "ImageObject", url: COVER_URL },
    publisher: {
      "@type": "Organization",
      name: "Azul Natural",
      logo: { "@type": "ImageObject", url: LOGO_URL },
    },
  };

  return (
    <>
      <Head
        title={TITLE}
        description={DESCRIPTION}
        canonical={SITE_URL}
        og={{ url: SITE_URL, image: COVER_URL, siteName: "Azul Natural" }}
        twitter={{ image: COVER_URL }}
        jsonLd={jsonLdWebPage}
      />
      {/* Skip link for keyboard users */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:bg-white focus:text-black focus:px-3 focus:py-2 rounded"
      >
        Skip to content
      </a>
  <section className="w-full max-w-none">
    <Layoud />
  </section>
      {/* Main landmark */}
      <main id="main" className="lg:p-0 flex flex-col gap-5 max-w-7xl mx-auto w-full px-5 lg:px-10" role="main">
        {/* Page heading (only one H1 per page) */}
        <header className="p-0 mt-14 lg:mt-16">
          <h1 className="sr-only">Azul Natural — Terapias y Servicios</h1>
        </header>

        {/* Intro grid: About + Featured Projects */}
        <section
          aria-labelledby="featured-projects-heading"
          className="p-0 flex flex-col gap-5"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <aside className="lg:col-span-1" aria-label="About Priscy">
              <div className="sticky top-6">
                <AboutCard />
              </div>
            </aside>

            <div className="col-span-2">
              <h2
                id="featured-projects-heading"
                className="text-2xl font-semibold mb-2"
              >
                Conoce Nuestras Terapias
              </h2>
              {/* 4 items per page? set pagination prop accordingly */}
              <ProjectCards pagination={false} />
            </div>
          </div>
        </section>

        {/* Gallery + Work Experience + Expertise */}
        <section
          aria-labelledby="work-expertise-heading"
          className="grid lg:grid-cols-3 gap-5"
        >
          <h2 id="work-expertise-heading" className="sr-only">
            Work, Expertise, and Gallery
          </h2>

          {/* The slider already has ARIA from earlier; ensure it has a label prop if you add one */}
          <div aria-label="Recent work gallery">
            <GallerySlider images={images} interval={4500} />
          </div>

          <div aria-label="Work experience timeline">
            <ComentariosHome />
          </div>

          <div aria-label="Expert areas">
            <ExpertArea />
          </div>
        </section>

        {/* Services & CTA */}
        <section
          aria-labelledby="services-cta-heading"
          className="flex flex-col lg:grid lg:grid-cols-3 gap-5"
        >
          <ServiceOffer />
        </section>
      </main>
    </>
  );
}
