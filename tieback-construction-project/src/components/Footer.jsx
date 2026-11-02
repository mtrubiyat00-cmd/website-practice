
import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">

        {/* COMPANY LOGO AND DESCRIPTION */}
        <div className="footer-about">
          <Link
            className="brand brand-light"
            to="/"
            aria-label="Tieback Construction home"
          >
            <img
              src="/images/tieback-logo.png"
              alt="Tieback Construction logo"
              style={{
                height: "60px",
                width: "auto",
                maxWidth: "220px",
                objectFit: "contain",
                display: "block",
                background: "#FFFFFF",
                padding: "6px 9px",
              }}
            />
          </Link>

          <p>
            Property maintenance and preservation services supporting
            residential properties and the people responsible for them.
          </p>
        </div>

        {/* EXPLORE LINKS */}
        <div className="footer-links">
          <h3>Explore</h3>

          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        {/* SERVICE LINKS */}
        <div className="footer-links">
          <h3>Our Services</h3>

          <Link to="/services/property-maintenance">
            Property Maintenance
          </Link>

          <Link to="/services/property-preservation">
            Property Preservation
          </Link>
        </div>

        {/* CONTACT INFORMATION */}
        <div className="footer-contact">
          <h3>Contact</h3>

          <a href="mailto:support@tiebackconstruction.com">
            <Mail size={16} />
            support@tiebackconstruction.com
          </a>

          <a href="tel:+15165187361">
            <Phone size={16} />
            +1 (516) 518-7361
          </a>

          <p>
            <MapPin size={16} />
            New York City and surrounding areas
          </p>
        </div>

      </div>

      {/* FOOTER COPYRIGHT */}
      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} Tieback Construction.
          All Rights Reserved.
        </span>

        <Link to="/contact">
          Start a conversation <ArrowUpRight size={14} />
        </Link>
      </div>
    </footer>
  );
}
