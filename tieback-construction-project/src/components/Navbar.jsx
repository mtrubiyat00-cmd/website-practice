
import { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

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
  const [servicesOpen, setServicesOpen] = useState(false);

  const location = useLocation();

  const close = () => {
    setOpen(false);
    setServicesOpen(false);
  };

  const isServicesPage = location.pathname.startsWith("/services");

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Logo />

        {/* MOBILE MENU BUTTON */}
        <button
          className="menu-toggle"
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
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

          {/* SERVICES DROPDOWN */}
          <div
            className={`nav-dropdown ${servicesOpen ? "is-open" : ""}`}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              className={`nav-dropdown-toggle ${isServicesPage ? "active" : ""}`}
              onClick={() => setServicesOpen((value) => !value)}
              aria-expanded={servicesOpen}
            >
              Services
              <ChevronDown size={15} />
            </button>

            <div className="nav-dropdown-menu">
              <NavLink to="/services" end onClick={close}>
                Services
              </NavLink>

              <NavLink
                to="/services/property-maintenance"
                onClick={close}
              >
                Property Maintenance
              </NavLink>

              <NavLink
                to="/services/property-preservation"
                onClick={close}
              >
                Property Preservation
              </NavLink>
            </div>
          </div>

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
