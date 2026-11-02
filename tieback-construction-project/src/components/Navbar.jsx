import React from "react";

const Navbar = () => {
  return (
    <header className="tb-navbar">
      <div className="tb-navbar-inner">
        <a href="/" className="tb-logo">
          <span className="tb-logo-name">TIEBACK</span>
          <span className="tb-logo-subtitle">CONSTRUCTION</span>
        </a>

        <nav className="tb-nav-links">
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/about">About Us</a>
          <a href="/contact">Contact Us</a>
        </nav>
      </div>

      <style>{`
        .tb-navbar {
          position: relative;
          z-index: 100;
          width: 100%;
          background: #102F4D;
          border-bottom: 1px solid rgba(255,255,255,0.12);
        }

        .tb-navbar-inner {
          width: min(1120px, calc(100% - 48px));
          min-height: 82px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
        }

        .tb-logo {
          display: flex;
          flex-direction: column;
          color: #FFFFFF;
          text-decoration: none;
          line-height: 1;
        }

        .tb-logo-name {
          font-size: 25px;
          font-weight: 800;
          letter-spacing: 3px;
        }

        .tb-logo-subtitle {
          margin-top: 6px;
          color: #A9CCE9;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 4px;
        }

        .tb-nav-links {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .tb-nav-links a {
          color: #FFFFFF;
          text-decoration: none;
          font-size: 14px;
          font-weight: 600;
          transition: color 0.2s ease;
        }

        .tb-nav-links a:hover {
          color: #A9CCE9;
        }

        @media (max-width: 650px) {
          .tb-navbar-inner {
            width: calc(100% - 32px);
            min-height: 76px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
            gap: 14px;
            padding: 15px 0;
          }

          .tb-logo-name {
            font-size: 21px;
          }

          .tb-nav-links {
            width: 100%;
            gap: 18px;
            flex-wrap: wrap;
          }

          .tb-nav-links a {
            font-size: 12px;
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
