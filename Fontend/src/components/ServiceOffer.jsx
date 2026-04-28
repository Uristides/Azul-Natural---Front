import React from "react";
import { Link } from "react-router-dom";
import rightArrow from "/assets/arrow-right.svg";
import workData from "../data/work.json";
import ServiceOffer from "../css/ServiceOffer.css";

export default function ServiceOffer() {
  const workLimit = workData.slice(0, 4);

  return (
    <section
      className={styles.section}
      aria-labelledby="services-offer-heading"
    >
      <div className={styles.header}>
        <h2 id="services-offer-heading" className="text-2xl font-semibold">
          Proximas Fechas
        </h2>

        <nav aria-label="All services">
          <Link
            to="/fechas"
            className={styles.link}
            aria-label="See all services"
          >
            <span>Ver mas</span>
            <img
              src={rightArrow}
              alt=""
              aria-hidden="true"
              className="w-4 h-4"
              loading="lazy"
              decoding="async"
            />
          </Link>
          <hr className="text-gray-400" />
        </nav>
      </div>

      <ul className="grid grid-cols-2 lg:grid-cols-4 gap-5" role="list">
        {workLimit.map((work) => (
          <li key={work.id} className="list-none">
            <article
              className={styles.card}
              aria-labelledby={`service-title-${work.id}`}
            >
              <figure className={styles.figure}>
                <img
                  src="Imagen de proxima fecha"
                  alt="Ejemplo"
                  aria-hidden="true"
                  className={styles.icon}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption className="sr-only">Fecha</figcaption>
              </figure>

              <h3
                id={`service-title-${work.id}`}
                className="text-center text-lg font-semibold"
              >
                Proxima Fecha
              </h3>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
