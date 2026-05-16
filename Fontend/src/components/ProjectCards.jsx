import React, { useEffect, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import projectsData from "../data/projects.json";
import "../css/ProjectCards.css";

export default function ProjectCards({
  pagination = true,
  perPage = 6,
  prevText = "Ant",
  nextText = "Sig",
}) {
  const [params, setParams] = useSearchParams();

  const pageFromUrl = Number(params.get("page")) || 1;
  const totalPages = Math.max(1, Math.ceil(projectsData.length / (perPage || 1)));
  const page = pagination ? Math.min(Math.max(1, pageFromUrl), totalPages) : 1;

  useEffect(() => {
    if (!pagination) return;
    if (page !== pageFromUrl) {
      setParams({ page: String(page) }, { replace: true });
    }
  }, [pagination, page, pageFromUrl, setParams]);

  const projects = useMemo(() => {
    const start = (page - 1) * perPage;
    return projectsData.slice(start, start + perPage);
  }, [page, perPage]);

  useEffect(() => {
    if (!pagination) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pagination, page]);

  const goto = (p) => setParams({ page: String(p) });

  return (
    <section className="projects-section" aria-labelledby="projects-heading">
      <h2 id="projects-heading" className="sr-only">
        Projects
      </h2>

      <ul className="projects-grid" role="list">
        {projects.map((p, i) => {
          const slug = p.slug ?? p.title.toLowerCase().replace(/\s+/g, "-");
          const key = p.id ?? slug ?? `${p.title}-${i}`;

          return (
            <li key={key} className="projects-item">
              <article
                className="project-card"
                aria-labelledby={`proj-title-${key}`}
              >
                <Link
                  to={`/terapias/${slug}`}
                  className="project-image-link"
                  aria-label={`Open project: ${p.title}`}
                >
                  <figure className="project-figure">
                    <img
                      src={p.coverImage}
                      alt={p.title}
                      className="project-image"
                      loading="lazy"
                      decoding="async"
                    />
                    <figcaption className="sr-only">
                      {p.title}
                    </figcaption>
                  </figure>
                </Link>

                <div className="project-content">
                  <h3
                    id={`proj-title-${key}`}
                    className="project-title"
                  >
                    <Link
                      to={`/terapias/${slug}`}
                      className="project-title-link"
                    >
                      {p.title}
                    </Link>
                  </h3>

                  <Link
                    to={`/terapias/${slug}`}
                    className="project-cta"
                    aria-label={`See project details for ${p.title}`}
                  >
                    Ver Terapia
                  </Link>
                </div>

                {p.category && (
                  <p className="project-category">
                    <span className="sr-only">Category: </span>
                    {p.category}
                  </p>
                )}
              </article>
            </li>
          );
        })}
      </ul>

      {pagination && (
        <nav className="projects-pagination" aria-label="Pagination">
          <button
            type="button"
            onClick={() => goto(page - 1)}
            disabled={page === 1}
            className="pagination-button"
          >
            {prevText}
          </button>

          <span
            className="pagination-info"
            aria-live="polite"
          >
            Page {page} of {totalPages}
          </span>

          <button
            type="button"
            onClick={() => goto(page + 1)}
            disabled={page === totalPages}
            className="pagination-button"
          >
            {nextText}
          </button>
        </nav>
      )}
    </section>
  );
}