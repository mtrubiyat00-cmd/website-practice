import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  ClipboardCheck,
  House,
  MessageCircle,
  ShieldCheck,
  Wrench,
  Building2,
  Users,
  Briefcase,
} from "lucide-react";
import PageMeta from "../components/PageMeta";

const heroImage = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=85";
const maintenanceImage = "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1100&q=85";
const preservationImage = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1100&q=85";

const reasons = [
  { icon: ClipboardCheck, title: "Thoughtful Coordination", text: "We focus on understanding the requested work, coordinating next steps, and keeping expectations clear." },
  { icon: ShieldCheck, title: "Professional Workmanship", text: "Careful attention to the details that help keep residential properties in good condition." },
  { icon: MessageCircle, title: "Responsive Communication", text: "Straightforward updates and communication as property work moves forward." },
  { icon: House, title: "Two Core Service Areas", text: "Property maintenance and property preservation support through one service provider." },
];

const audiences = [
  { icon: Building2, title: "Property Management Companies", text: "Maintenance and preservation support for managed residential properties." },
  { icon: Users, title: "Property Owners & Landlords", text: "Practical repair and upkeep services for residential properties." },
  { icon: Briefcase, title: "Real Estate Professionals", text: "Property-related services for investors and professionals responsible for residential assets." },
];

export default function Home() {
  return (
    <>
      <PageMeta
        title="Tieback Construction | Property Maintenance & Preservation in New York"
        description="Tieback Construction provides residential property maintenance and property preservation services in New York City and surrounding areas."
      />

      <section className="hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(9,35,61,.90) 0%, rgba(9,35,61,.75) 49%, rgba(9,35,61,.28) 100%), url("${heroImage}")` }}>
        <div className="container hero-content">
          <div className="eyebrow eyebrow-light"><span /> PROPERTY MAINTENANCE & PRESERVATION</div>
          <h1>Reliable Property Maintenance.<br /><em>Professional Results.</em></h1>
          <p>Residential property maintenance and preservation services for property owners and management teams throughout New York City and surrounding areas.</p>
          <div className="hero-actions">
            <Link to="/services" className="button button-white">Explore Our Services <ArrowUpRight size={17} /></Link>
            <Link to="/contact" className="text-link text-link-light">Contact Us <ArrowRight size={17} /></Link>
          </div>
          <div className="hero-note"><span className="note-line" /> Practical solutions. Clear communication. Professional service.</div>
        </div>
        <div className="hero-index"><span>01</span><i /> NEW YORK PROPERTY SERVICES</div>
      </section>

      <section className="intro section-pad">
        <div className="container intro-grid">
          <div>
            <div className="eyebrow"><span /> WELCOME TO TIEBACK CONSTRUCTION</div>
            <h2>Taking care of properties, <em>from the inside out.</em></h2>
          </div>
          <div className="intro-copy">
            <p className="lead">Property care takes coordination, practical expertise, and attention to detail. Tieback Construction provides property maintenance and preservation services for property owners and property management teams.</p>
            <p>From everyday repairs and interior upkeep to exterior maintenance and vacant property needs, our goal is to make property care more straightforward through clear communication and professional service.</p>
            <Link to="/about" className="under-link">Get to know Tieback <ArrowUpRight size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="services-section section-pad">
        <div className="container">
          <div className="section-heading">
            <div><div className="eyebrow"><span /> WHAT WE DO</div><h2>Two core services. <em>One point of contact.</em></h2></div>
            <p>Focused support for the maintenance and preservation work residential properties need.</p>
          </div>
          <div className="service-grid">
            <article className="service-card">
              <div className="service-image">
                <img src={maintenanceImage} alt="Technician working on a residential electrical maintenance project" loading="lazy" />
                <span className="service-number">01 / 02</span>
              </div>
              <div className="service-body">
                <div className="service-icon"><Wrench size={21} /></div>
                <h3>Property Maintenance</h3>
                <p>Practical repair and upkeep services to help keep residential properties safe, functional, and well-maintained.</p>
                <ul>
                  <li>Plumbing, electrical, and HVAC</li>
                  <li>Appliance and handyman repairs</li>
                  <li>Painting, drywall, and flooring</li>
                  <li>Interior and exterior repairs</li>
                </ul>
                <Link to="/services#property-maintenance" className="under-link">Explore maintenance <ArrowUpRight size={16} /></Link>
              </div>
            </article>
            <article className="service-card">
              <div className="service-image">
                <img src={preservationImage} alt="Residential property exterior maintained and landscaped" loading="lazy" />
                <span className="service-number">02 / 02</span>
              </div>
              <div className="service-body">
                <div className="service-icon"><House size={21} /></div>
                <h3>Property Preservation</h3>
                <p>Vacant-property and exterior services that help maintain a property's condition, appearance, and upkeep.</p>
                <ul>
                  <li>Lawn care and landscaping</li>
                  <li>Debris removal and cleanouts</li>
                  <li>Pressure washing and exterior care</li>
                  <li>Vacant property maintenance</li>
                </ul>
                <Link to="/services#property-preservation" className="under-link">Explore preservation <ArrowUpRight size={16} /></Link>
              </div>
            </article>
          </div>
          <div className="services-all-link"><Link to="/services" className="button button-primary">View All Services <ArrowRight size={16} /></Link></div>
        </div>
      </section>

      <section className="why-section section-pad">
        <div className="container why-layout">
          <div className="why-heading">
            <div className="eyebrow eyebrow-light"><span /> THE TIEBACK APPROACH</div>
            <h2>Good property care starts with <em>the right approach.</em></h2>
            <p>We focus on understanding the work, coordinating practical next steps, and keeping communication clear throughout the service process.</p>
            <Link to="/about" className="button button-outline-light">About Tieback <ArrowUpRight size={16} /></Link>
          </div>
          <div className="reason-grid">
            {reasons.map(({ icon: Icon, title, text }, index) => (
              <div className="reason" key={title}>
                <div className="reason-top"><Icon size={22} /><span>0{index + 1}</span></div>
                <h3>{title}</h3><p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="audience-section section-pad">
        <div className="container">
          <div className="section-heading">
            <div><div className="eyebrow"><span /> WHO WE SUPPORT</div><h2>Property services for the people <em>who care for properties.</em></h2></div>
            <p>We work with people and organizations responsible for maintaining residential properties.</p>
          </div>
          <div className="audience-grid">
            {audiences.map(({ icon: Icon, title, text }) => (
              <article className="audience-card" key={title}>
                <div className="audience-icon"><Icon size={23} /></div>
                <h3>{title}</h3><p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="process-strip section-pad">
        <div className="container process-layout">
          <div className="process-copy">
            <div className="eyebrow eyebrow-light"><span /> A CLEAR SERVICE PROCESS</div>
            <h2>From the first request <em>to the finished work.</em></h2>
            <p>Our approach is centered on understanding the property need, coordinating the service, and communicating as work progresses.</p>
          </div>
          <div className="process-steps">
            <div><span>01</span><strong>Understand the request</strong><small>Review the property need and requested scope.</small></div>
            <div><span>02</span><strong>Coordinate the service</strong><small>Arrange the appropriate next steps and access.</small></div>
            <div><span>03</span><strong>Complete and communicate</strong><small>Carry out the work and share relevant updates.</small></div>
          </div>
        </div>
      </section>

      <section className="cta-section section-pad">
        <div className="container cta-inner">
          <div><div className="eyebrow"><span /> LET'S TALK ABOUT YOUR PROPERTY</div><h2>Have a property that needs <em>attention?</em></h2><p>Tell us what you need. We’re ready to discuss how Tieback Construction can help.</p></div>
          <Link to="/contact" className="button button-primary">Contact Our Team <ArrowUpRight size={17} /></Link>
        </div>
      </section>
    </>
  );
}
