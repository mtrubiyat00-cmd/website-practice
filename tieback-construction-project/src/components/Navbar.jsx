
import { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Facebook,
  Instagram,
} from "lucide-react";

function Logo() {
  return (
    <Link
      className="brand"
      to="/"
      aria-label="Tieback Construction home"
    >
      <img
        src="/images/tieback-logo.png"
        alt="Tieback Construction logo"
      />
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const location = useLocation();
  const isServicesPage = location.pathname.startsWith("/services");

  const close = () => {
    setOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className="site-header">
      <div className="container nav-wrap tb-header-layout">

        {/* LOGO */}
        <Logo />

        {/* MOBILE MENU */}
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

        {/* NAVIGATION */}
        <nav
          id="primary-navigation"
          className={open ? "main-nav is-open" : "main-nav"}
          aria-label="Main navigation"
        >
          <NavLink to="/" end onClick={close}>
            Home
          </NavLink>

          <div
            className={`nav-dropdown ${servicesOpen ? "is-open" : ""}`}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <NavLink
              to="/services"
              className={`nav-dropdown-link ${isServicesPage ? "active" : ""}`}
              onClick={close}
            >
              Services
            </NavLink>

            <button
              type="button"
              className="nav-dropdown-toggle"
              onClick={() => setServicesOpen((value) => !value)}
              aria-label="Toggle Services submenu"
              aria-expanded={servicesOpen}
            >
              <ChevronDown size={15} />
            </button>

            <div className="nav-dropdown-menu">
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

        {/* SOCIAL ICONS */}
        <div className="tb-header-socials">
          <span aria-label="Facebook">
            <Facebook size={19} />
          </span>
          <span aria-label="Instagram">
            <Instagram size={19} />
          </span>
        </div>

        {/* CALL NOW */}
        <a
          href="tel:+15165187361"
          className="tb-call-button"
          aria-label="Call Tieback Construction at 516-518-7361"
        >
          <Phone size={17} />
          <span>CALL NOW</span>
        </a>

      </div>
    </header>
  );
}
