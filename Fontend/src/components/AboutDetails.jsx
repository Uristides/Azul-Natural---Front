import React from "react";
import Testimonials from "./Testimonials";
import Certifications from "./Certifications";
import "../css/AboutDetails.css";

export default function AboutDetails() {
  const workProof = [
    { id: 1, title: "Años de Experiencia", details: "10+" },
    { id: 2, title: "Experiencias Realizadas", details: "20+" },
    { id: 3, title: "Terapias que manejamos", details: "40+" },
  ];

  return (
    <div className="about-details">
      
      <div className="about-details-header">
        <div className="about-details-header-top">
          <h2 className="about-details-title">
            Hola Somos <span className="highlight">Spa Tzintzuni</span>
          </h2>

          <p className="about-details-badge">
            Available For Hire
          </p>
        </div>

        <span className="about-details-emoji">👋</span>
      </div>

      <p className="about-details-description">
        Somos <strong>Spa Tzintzuni</strong>, un{" "}
        <strong>Spa Holistico</strong> con gran repertorio para darle paz a todos tus cuerpos:
        <br /> Fisico, Sentimental, Mental y Espiritual. <br />
        Estamos aqui para darte un tiempo para ti, con avances y relajacion.
        <strong> Ven ya!, te estamos esperando</strong>
      </p>

      <h2 className="about-details-slogan">
        <span className="highlight">Spa Tzintzuni.</span> Equilibrio en ti ✨
      </h2>

      <div className="about-details-stats">
        {workProof.map((work) => (
          <div key={work.id} className="about-details-stat">
            <p className="about-details-stat-number">{work.details}</p>
            <p className="about-details-stat-title">{work.title}</p>
          </div>
        ))}
      </div>

      <Testimonials />
      <Certifications />

      <h2 id="certs-heading" className="about-details-location-title">
        Encuentranos aqui
      </h2>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3737.8630793533025!2d-103.4868919241379!3d20.470816106706764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842f5427b5a23125%3A0x308d010768e35a01!2sPaseo%20Los%20Veneros%203a!5e0!3m2!1ses!2smx!4v1777278512279!5m2!1ses!2smx"
        height="400"
        loading="lazy"
        className="about-details-map"
        title="Ubicación Spa Tzintzuni"
      ></iframe>

    </div>
  );
}