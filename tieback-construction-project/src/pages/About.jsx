import { Link } from "react-router-dom";
import { ArrowUpRight, CheckCircle2, ClipboardList, Handshake, Building2 } from "lucide-react";
import PageMeta from "../components/PageMeta";

const banner = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85";
const workImage = "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1800&q=85";

export default function About() {
  return (
    <>
      <PageMeta
        title="About Tieback Construction | New York Property Services"
        description="Learn about Tieback Construction, a New York-based provider of residential property maintenance and property preservation services."
      />

      <section className="page-hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(9,35,61,.90), rgba(9,35,61,.48)), url("${banner}")` }}>
        <div className="container page-hero-content">
          <div className="eyebrow eyebrow-light"><span /> ABOUT TIEBACK</div>
          <h1>Property care with <em>purpose.</em></h1>
          <p>Residential maintenance and preservation services supported by practical solutions, professional service, and clear communication.</p>
          <div className="breadcrumb"><Link to="/">Home</Link><span>/</span> About Us</div>
        </div>
      </section>

      <section className="section-pad about-intro">
        <div className="container about-intro-grid">
          <div>
            <div className="eyebrow"><span /> WHO WE ARE</div>
            <h2>Helping properties stay <em>ready for what’s next.</em></h2>
          </div>
          <div>
            <p className="lead">Tieback Construction is a New York-based property maintenance and preservation service provider supporting property owners, landlords, and property management companies.</p>
            <p>We provide residential maintenance, repair, exterior upkeep, and vacant-property services. We understand that each property has its own requirements, and we approach every request with a focus on understanding the work, coordinating practical solutions, and communicating clearly.</p>
            <p>Our goal is to make property care more straightforward for the people responsible for maintaining residential properties throughout New York City and surrounding areas.</p>
          </div>
        </div>
      </section>

      <section className="about-image-band">
        <img src={workImage} alt="Residential property maintenance technician at work" loading="lazy" />
        <div className="image-band-caption"><span>PROPERTY MAINTENANCE & PRESERVATION</span><strong>Careful work. Clear communication.</strong></div>
      </section>

      <section className="section-pad approach-section">
        <div className="container">
          <div className="section-heading">
            <div><div className="eyebrow"><span /> HOW WE WORK</div><h2>A straightforward approach to <em>property services.</em></h2></div>
            <p>Our focus is on understanding the work, coordinating the right next steps, and keeping communication clear.</p>
          </div>
          <div className="approach-grid">
            <article>
              <div className="approach-icon"><ClipboardList /></div><span>01</span>
              <h3>Our Approach</h3>
              <p>We begin by understanding the property's needs and the requested scope. We prioritize clear expectations, practical planning, and communication as work progresses.</p>
            </article>
            <article>
              <div className="approach-icon"><Handshake /></div><span>02</span>
              <h3>Our Commitment</h3>
              <p>We aim to provide responsive service, professional workmanship, and thoughtful coordination. We value transparency and keeping clients informed.</p>
            </article>
            <article>
              <div className="approach-icon"><Building2 /></div><span>03</span>
              <h3>Our Capabilities</h3>
              <p>Our two core service areas cover residential property maintenance and property preservation, including a range of interior, exterior, and vacant-property needs.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="capabilities section-pad">
        <div className="container capabilities-grid">
          <div className="capability-photo">
            <img src={banner} alt="Residential property exterior" loading="lazy" />
            <div className="photo-tag">NEW YORK RESIDENTIAL PROPERTY SERVICES</div>
          </div>
          <div className="capability-copy">
            <div className="eyebrow"><span /> OUR SERVICES</div>
            <h2>Maintenance and preservation, <em>under one roof.</em></h2>
            <p>We organize our services around two core areas to make it easier to understand how Tieback Construction can support your property needs.</p>
            <div className="capability-list">
              <div>
                <CheckCircle2 />
                <span><strong>Property Maintenance</strong><small>Plumbing, electrical, HVAC, appliance repairs, handyman services, painting, drywall, flooring, and general residential upkeep.</small></span>
              </div>
              <div>
                <CheckCircle2 />
                <span><strong>Property Preservation</strong><small>Vacant-property upkeep, lawn care, debris removal, property cleanouts, pressure washing, exterior maintenance, and general repairs.</small></span>
              </div>
            </div>
            <Link to="/services" className="button button-primary">Explore Our Services <ArrowUpRight size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="container about-cta-inner">
          <div><div className="eyebrow eyebrow-light"><span /> START A CONVERSATION</div><h2>Let's talk about what your property needs.</h2></div>
          <Link to="/contact" className="button button-white">Contact Us <ArrowUpRight size={16} /></Link>
        </div>
      </section>
    </>
  );
}
