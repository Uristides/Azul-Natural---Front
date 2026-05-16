import React, { useEffect, useRef, useState, useMemo } from "react";
import data from "../data/Comentarios.json";
import "../css/Testimonials.css";

export default function Testimonials({
  interval = 5000,
  loop = true,
  ariaLabel = "Client testimonials",
}) {
  const testimonials = useMemo(() => data ?? [], []);
  const count = testimonials.length;

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const timerRef = useRef(null);
  const touchStartX = useRef(null);
  const touchDeltaX = useRef(0);

  const clamp = (i) => {
    if (count === 0) return 0;
    return loop ? (i + count) % count : Math.max(0, Math.min(count - 1, i));
  };

  const goTo = (i) => setIndex(clamp(i));
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  useEffect(() => {
    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(!!mq?.matches);
    update();
    mq?.addEventListener?.("change", update);
    return () => mq?.removeEventListener?.("change", update);
  }, []);

  useEffect(() => {
    if (count <= 1 || paused || reducedMotion) return;
    timerRef.current = setInterval(next, interval);
    return () => clearInterval(timerRef.current);
  }, [index, paused, interval, count, reducedMotion]);

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
    setPaused(true);
  };

  const onTouchMove = (e) => {
    if (touchStartX.current == null) return;
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };

  const onTouchEnd = () => {
    if (touchStartX.current == null) return;
    const threshold = 40;
    if (touchDeltaX.current <= -threshold) next();
    else if (touchDeltaX.current >= threshold) prev();
    touchStartX.current = null;
    touchDeltaX.current = 0;
    setPaused(false);
  };

  if (count === 0) {
    return (
      <section className="testimonials">
        <h2 className="testimonials__heading">Trusted By Clients</h2>
        <p>No testimonials yet.</p>
      </section>
    );
  }

  return (
    <section className="testimonials" aria-label={ariaLabel}>
      <div className="testimonials__header">
        <div>
          <h2 className="testimonials__heading">
            Aprobado Por Más De X Clientes (Beta)
          </h2>
          <p className="testimonials__subheading">Algunas reseñas</p>
        </div>

        <div className="testimonials__controls-desktop">
          <button onClick={prev} className="testimonials__button">
            ← Prev
          </button>
          <button onClick={next} className="testimonials__button">
            Next →
          </button>
        </div>
      </div>

      <div
        className="testimonials__carousel"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <ul
          className={`testimonials__track ${
            reducedMotion ? "" : "testimonials__track--animated"
          }`}
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {testimonials.map((t, i) => (
            <li key={t.id} className="testimonials__slide">
              <article className="testimonials__card">
                <figure className="testimonials__avatar">
                  <img
                    src={t.Imagen}
                    alt={`Avatar of ${t.Nombre}`}
                    loading={i === 0 ? "eager" : "lazy"}
                  />
                </figure>

                <div className="testimonials__content">
                  <blockquote className="testimonials__quote">
                    “{t.Comentario}”
                  </blockquote>

                  <footer className="testimonials__footer">
                    <p className="testimonials__name">{t.Nombre}</p>
                    <p className="testimonials__role">{t.role}</p>
                  </footer>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <div className="testimonials__controls-mobile">
          <button onClick={prev} className="testimonials__button">
            ← Prev
          </button>
          <button onClick={next} className="testimonials__button">
            Next →
          </button>
        </div>

        <div className="testimonials__dots">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`testimonials__dot ${
                i === index ? "testimonials__dot--active" : ""
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}