import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      className="container px-0 py-5 text-sm lg:text-lg"
      aria-label="Site footer"
    >
      <p className="text-center">
        <span className="sr-only">Copyright </span>
        <span aria-hidden="true">&copy;</span> Uristides Desarrollador
      </p>
    </footer>
  );
}
