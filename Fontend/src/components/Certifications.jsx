import React from "react";
import certificateData from "../data/certifications.json";
import { Link } from "react-router-dom";
import chatIcon from "/assets/arrow-up-right.svg";
import "../css/Certifications.css";

function isExternal(href = "") {
  return /^https?:\/\//i.test(href);
}

export default function Certifications() {
  return (
    <section className="certifications" aria-labelledby="certs-heading">
      
      <h2 id="certs-heading" className="certifications-title">
        Nuestras Redes
      </h2>

      <ul className="certifications-list">
        {certificateData.map((data) => {
          const External = isExternal(data.link);
          const Wrapper = External ? "a" : Link;

          const wrapperProps = External
            ? {
                href: data.link,
                target: "_blank",
                rel: "noopener noreferrer",
              }
            : { to: data.link };

          return (
            <li key={data.id} className="certifications-item">
              <article
                className="certifications-card"
                aria-labelledby={`cert-title-${data.id}`}
              >
                {/* Left */}
                <div className="certifications-left">
                  <figure className="certifications-figure">
                    <img
                      src={data.image}
                      alt=""
                      className="certifications-image"
                      loading="lazy"
                      decoding="async"
                    />
                    <figcaption className="sr-only">
                      {data.title}
                    </figcaption>
                  </figure>

                  <div>
                    <h3
                      id={`cert-title-${data.id}`}
                      className="certifications-card-title"
                    >
                      {data.title}
                    </h3>

                    {data.year && (
                      <p className="certifications-year">
                        <span className="sr-only">Year: </span>
                        <time dateTime={`${data.year}-01-01`}>
                          {data.year}
                        </time>
                      </p>
                    )}
                  </div>
                </div>

                {/* Right */}
                <div className="certifications-right">
                  <p className="certifications-status">
                    <span className="sr-only">Status: </span>
                    {data.status}
                  </p>

                  <Wrapper
                    {...wrapperProps}
                    className="certifications-button"
                    aria-label={`View certificate: ${data.title}`}
                  >
                    <span>Ver Mas</span>
                    <img
                      src={chatIcon}
                      alt=""
                      aria-hidden="true"
                      className="certifications-icon"
                      loading="lazy"
                      decoding="async"
                    />
                  </Wrapper>
                </div>
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
}