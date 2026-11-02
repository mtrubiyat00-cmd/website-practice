import { Link } from "react-router-dom";
import { ArrowUpRight, CheckCircle2, ClipboardList, Handshake, Building2 } from "lucide-react";

const banner = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=85";

export default function About() {
  return (
    <>
      <section className="page-hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(9,35,61,.88), rgba(9,35,61,.42)), url("${banner}")` }}>
        <div className="container page-hero-content"><div className="eyebrow eyebrow-light"><span /> ABOUT TIEBACK</div><h1>Property care with <em>purpose.</em></h1><p>Practical maintenance and preservation solutions, supported by professional service and clear communication.</p><div className="breadcrumb"><Link to="/">Home</Link><span>/</span> About Us</div></div>
      </section>

      <section className="section-pad about-intro">
        <div className="container about-intro-grid">
          <div><div className="eyebrow"><span /> WHO WE ARE</div><h2>Helping properties stay <em>ready for what’s next.</em></h2></div>
          <div><p className="lead">Tieback Construction provides property maintenance and property preservation services for property owners and property management companies.</p><p>We understand that every property has its own needs. Whether the work involves a repair, routine upkeep, a turnover, or exterior maintenance, we approach each request with a focus on practical solutions and clear coordination.</p></div>
        </div>
      </section>

      <section className="about-image-band">
        <img src="https://images.unsplash.com/photo-1503387762-592e?auto=format&fit=crop&w=1800&q=85" alt="Construction and building maintenance work" onError={(e) => { e.currentTarget.src = banner; }} />
        <div className="image-band-caption"><span>PROPERTY MAINTENANCE</span><strong>Careful work. Clear communication.</strong></div>
      </section>

      <section className="section-pad approach-section">
        <div className="container">
          <div className="section-heading"><div><div className="eyebrow"><span /> HOW WE WORK</div><h2>A straightforward approach to <em>property services.</em></h2></div><p>Our focus is on understanding the work, coordinating the right next steps, and keeping communication clear.</p></div>
          <div className="approach-grid">
            <article><div className="approach-icon"><ClipboardList /></div><span>01</span><h3>Our Approach</h3><p>We begin by understanding the property's needs and the requested scope. We prioritize clear expectations, practical planning, and communication as work progresses.</p></article>
            <article><div className="approach-icon"><Handshake /></div><span>02</span><h3>Our Commitment</h3><p>We aim to provide responsive service, professional workmanship, and thoughtful coordination. We value transparency and keeping clients informed.</p></article>
            <article><div className="approach-icon"><Building2 /></div><span>03</span><h3>Our Capabilities</h3><p>Our service categories cover interior maintenance, repairs, property make-ready work, exterior upkeep, and vacant property preservation.</p></article>
          </div>
        </div>
      </section>

      <section className="capabilities section-pad" id="maintenance">
        <div className="container capabilities-grid">
          <div className="capability-photo"><img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=85" alt="Technician performing property maintenance" onError={(e) => { e.currentTarget.src = banner; }} /><div className="photo-tag">INTERIOR & EXTERIOR PROPERTY CARE</div></div>
          <div className="capability-copy"><div className="eyebrow"><span /> OUR SERVICES</div><h2>Maintenance and preservation, <em>under one roof.</em></h2><p>We support a range of property needs through two core service areas.</p>
            <div className="capability-list"><div><CheckCircle2 /><span><strong>Property Maintenance</strong><small>Plumbing, electrical, HVAC, appliance repairs, handyman services, painting, drywall, flooring, and property make-ready services.</small></span></div><div id="preservation"><CheckCircle2 /><span><strong>Property Preservation</strong><small>Exterior maintenance, landscaping, debris removal, property cleanouts, pressure washing, minor roof repairs, and vacant property maintenance.</small></span></div></div>
            <Link to="/contact" className="button button-primary">Discuss Your Needs <ArrowUpRight size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="about-cta"><div className="container about-cta-inner"><div><div className="eyebrow eyebrow-light"><span /> START A CONVERSATION</div><h2>Let's talk about what your property needs.</h2></div><Link to="/contact" className="button button-white">Contact Us <ArrowUpRight size={16} /></Link></div></section>
    </>
  );
}