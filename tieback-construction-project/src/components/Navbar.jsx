
import React from "react";

const links = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="tb-navbar">
      <div className="tb-navbar-inner">
        <a
          className="tb-brand"
          href="/"
          aria-label="Tieback Construction home"
        >
          <span className="tb-brand-mark" aria-hidden="true">
            T
          </span>

          <span className="tb-brand-wording">
            <span className="tb-brand-name">TIEBACK</span>
            <span className="tb-brand-subtitle">CONSTRUCTION</span>
          </span>
        </a>

        <nav className="tb-nav-links" aria-label="Main navigation">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
