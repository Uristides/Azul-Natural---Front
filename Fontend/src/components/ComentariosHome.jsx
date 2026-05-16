import React from "react";
import Testimonials from "../data/Comentarios.json";
import "../css/ComentariosHome.css";

export default function CommentExperience() {
  return (
    <div className="comment-wrapper">
      <div className="comment-card">
        <h2 className="comment-title">
          Reacciones 🎉 (Beta)
        </h2>

        <div className="comment-scroll-viewport">
          <div className="comment-scroll-track">

            {/* BLOCK 1 */}
            <div className="comment-list">
              {Testimonials.map((comment) => (
                <TestimonialItem key={`a-${comment.id}`} comment={comment} />
              ))}
            </div>

            {/* BLOCK 2 (duplicate for seamless loop) */}
            <div className="comment-list" aria-hidden="true">
              {Testimonials.map((comment) => (
                <TestimonialItem key={`b-${comment.id}`} comment={comment} />
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Reusable Item Component ---------- */

function TestimonialItem({ comment }) {
  return (
    <div className="comment-item">

      <div className="comment-avatar">
        <img
          src={comment.Imagen}
          alt={`${comment.Nombre} Imagen`}
          className="comment-avatar-img"
          loading="lazy"
        />
      </div>

      <div className="comment-content">

        <div className="comment-header">
          <h3 className="comment-name">
            {comment.Nombre}
          </h3>

          <span className="comment-rating">
            {"⭐".repeat(comment.Calificacion)}
          </span>
        </div>

        <p className="comment-text">
          “{comment.Comentario}”
        </p>

      </div>
    </div>
  );
}