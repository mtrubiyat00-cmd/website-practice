import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-about">
          <Link className="brand brand-light" to="/">
            <span className="brand-mark"><span /></span>
            <span className="brand-copy"><strong>TIEBACK</strong><small>CONSTRUCTION</small></span>
          </Link>
          <p>Property maintenance and preservation solutions that help keep properties safe, functional, and well-maintained.</p>
          <div className="socials" aria-label="Social media profiles not yet provided">
            <span title="Facebook profile not provided"><Facebook size={17} /></span>
            <span title="Instagram profile not provided"><Instagram size={17} /></span>
            <span title="LinkedIn profile not provided"><Linkedin size={17} /></span>
          </div>
        </div>
        <div className="footer-links">
          <h3>Explore</h3>
          <Link to="/">Home</Link><Link to="/about">About Us</Link><Link to="/contact">Contact Us</Link>
        </div>
        <div className="footer-contact">
          <h3>Contact</h3>
          <a href="mailto:support@tiebackconstruction.com"><Mail size={16} /> support@tiebackconstruction.com</a>
          <a href="tel:+15165187361"><Phone size={16} /> +1 (516) 518-7361</a>
          <p><MapPin size={16} /> Serving New York City and surrounding areas</p>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 Tieback Construction. All Rights Reserved.</span>
        <Link to="/contact">Start a conversation <ArrowUpRight size={14} /></Link>
      </div>
    </footer>
  );
}