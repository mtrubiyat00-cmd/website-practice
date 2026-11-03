
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

function Logo() {
  return (
    <Link className="brand" to="/" aria-label="Tieback Construction home">
      <img
        src="/tieback-logo.png"
        alt="Tieback Construction"
        className="header-logo-img"
      />
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const close = () => {
    setOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Logo />

        <button
          className="menu-toggle"
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={
            open ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={open}
          aria-controls="primary-navigation"
        >
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>

        <nav
          id="primary-navigation"
          className={open ? "main-nav is-open" : "main-nav"}
          aria-label="Main navigation"
        >
          <NavLink to="/" end onClick={close}>
            Home
          </NavLink>

          <div
            className={`nav-dropdown ${
              servicesOpen ? "is-submenu-open" : ""
            }`}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <div className="nav-dropdown-top">
              <NavLink to="/services" onClick={close}>
                Services
              </NavLink>

              <button
                type="button"
                className="nav-dropdown-toggle"
                aria-label="Toggle Services submenu"
                aria-expanded={servicesOpen}
                onClick={() => setServicesOpen((value) => !value)}
              >
                <ChevronDown size={15} />
              </button>
            </div>

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
      </div>
    </header>
  );
}
