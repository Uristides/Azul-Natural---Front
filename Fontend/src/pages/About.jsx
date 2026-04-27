import React from "react";
import AboutCard from "../components/AboutCard";
import AboutDetails from "../components/AboutDetails";
import Head from "../lib/Head";
import '../css/About.css';

const SITE_URL = "https://priscy-orcin.vercel.app";
const COVER_URL = "https://priscy-orcin.vercel.app/og-cover.jpg";
const LOGO_URL = "https://priscy-orcin.vercel.app/logo.png";
const TITLE = "Azul Natural";
const DESCRIPTION =
  "Explore UI/UX, full-stack development, branding, and product design projects.";

export default function About() {
  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: TITLE,
    url: `${SITE_URL}/nosotros`,
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

      <section className="about-section">
        <div className="about-container">
          <div className="about-grid">

            <div className="about-left">
              <div className="about-sticky">
                <AboutCard />
              </div>
            </div>

            <div className="about-right">
              <AboutDetails />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}