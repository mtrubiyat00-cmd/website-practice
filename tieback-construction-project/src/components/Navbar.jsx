import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";

function Logo() {
  return (
    <Link className="brand" to="/" aria-label="Tieback Construction home">
      <span className="brand-mark"><span /></span>
      <span className="brand-copy"><strong>TIEBACK</strong><small>CONSTRUCTION</small></span>
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Logo />
        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
        <nav className={open ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
          <NavLink to="/" end onClick={close}>Home</NavLink>
          <NavLink to="/about" onClick={close}>About Us</NavLink>
          <NavLink to="/contact" onClick={close}>Contact Us</NavLink>
          <Link className="button button-primary nav-cta" to="/contact" onClick={close}>Get in Touch <ArrowUpRight size={16} /></Link>
        </nav>
      </div>
    </header>
  );
}