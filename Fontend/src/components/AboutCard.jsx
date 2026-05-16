import React from "react";
import Button from "./Button";
import fbIcon from "/assets/facebook.svg";
import instgramIcon from "/assets/instagram.svg";
import whatsappIcon from "/assets/whatsapp.svg";
import "../css/AboutCard.css";

export default function AboutCard() {
  const socialMedia = [
    { id: 1, name: "Facebook", icon: fbIcon, link: "https://facebook.com" },
    {
      id: 2,
      name: "Instagram",
      icon: instgramIcon,
      link: "https://www.instagram.com/",
    },
    {
      id: 3,
      name: "Whatsapp",
      icon: whatsappIcon,
      link: "https://www.whatsapp.com/",
    },
  ];

  return (
    <section className="about-card" aria-labelledby="about-heading">
      <figure className="about-card-figure">
        <h3 className="about-card-small-title">Proxima Fecha...</h3>

        <img
          src="https://res.cloudinary.com/dq8vglwnz/image/upload/v1778934397/WhatsApp_Image_2026-04-23_at_12.30.58_AM_2_b84lry.jpg"
          alt="Home"
          className="about-card-image"
          loading="lazy"
          decoding="async"
        />

        <figcaption className="sr-only">
          Evento especial para Mamá
        </figcaption>
      </figure>

      <h2 id="about-heading" className="about-card-title">
        Dia de Conexion Con Mama
      </h2>

      <p className="about-card-text">
        Ven a nuestro dia preparado para la Mamá. <br />
        Aprende, relajate y Disfruta!!
      </p>

      <div className="about-card-actions" role="group" aria-label="Event actions">
        <Button
          title="Ver Mas"
          bgColor="bg-blue-500"
          hoverBgColor="hover:bg-blue-600"
          ariaLabel="Ver más sobre el evento"
        />

        <Button
          title="Otras Fechas"
          bgColor="bg-blue-500"
          hoverBgColor="hover:bg-blue-600"
          ariaLabel="Ver otras fechas disponibles"
        />
      </div>

      <nav aria-label="Social links">
        <ul className="about-card-social">
          {socialMedia.map((item) => (
            <li key={item.id}>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="about-card-social-link"
                aria-label={`Open ${item.name} profile in a new tab`}
                title={item.name}
              >
                <img
                  src={item.icon}
                  alt=""
                  className="about-card-social-icon"
                  loading="lazy"
                  decoding="async"
                />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}