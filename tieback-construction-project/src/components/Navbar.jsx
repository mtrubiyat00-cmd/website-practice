
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Logo() {
  return (
    <Link
      className="brand"
      to="/"
      aria-label="Tieback Construction home"
      style={{
        display: "flex",
        alignItems: "center",
        flexShrink: 0,
      }}
    >
      <img
        src="/images/tieback-logo.png"
        alt="Tieback Construction logo"
        style={{
          width: "clamp(140px, 16vw, 190px)",
          height: "auto",
          maxHeight: "82px",
          objectFit: "contain",
          objectPosition: "left center",
          display: "block",
        }}
      />
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="container nav-wrap">

        {/* COMPANY LOGO */}
        <Logo />

        {/* MOBILE MENU BUTTON */}
        <button
          className="menu-toggle"
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={
            open
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={open}
          aria-controls="primary-navigation"
        >
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>

        {/* MAIN NAVIGATION */}
        <nav
          id="primary-navigation"
          className={open ? "main-nav is-open" : "main-nav"}
          aria-label="Main navigation"
        >
          <NavLink to="/" end onClick={close}>
            Home
          </NavLink>

          <NavLink to="/services" onClick={close}>
            Services
          </NavLink>

          <NavLink to="/about" onClick={close}>
            About Us
          </NavLink>

          <NavLink to="/contact" onClick={close}>
            Contact Us
          </NavLink>
        </nav>

      </div>
    </header>
  );
}
