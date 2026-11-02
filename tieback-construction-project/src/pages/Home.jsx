import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, CheckCircle2, Wrench, House, MessageCircle, ClipboardCheck, ShieldCheck, MoveUpRight } from "lucide-react";

const heroImage = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2000&q=85";
const maintenanceImage = "https://images.unsplash.com/photo-1581578731522-5b7c6f4c6b7b?auto=format&fit=crop&w=1000&q=85";
const preservationImage = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85";

const reasons = [
  { icon: ShieldCheck, title: "Reliable Service", text: "Clear coordination and dependable follow-through at every stage." },
  { icon: ClipboardCheck, title: "Professional Workmanship", text: "Careful attention to the details that keep properties in good condition." },
  { icon: MessageCircle, title: "Responsive Communication", text: "Straightforward updates and communication throughout the work." },
  { icon: House, title: "Comprehensive Solutions", text: "A broad range of maintenance and preservation services in one place." },
];

export default function Home() {
  return (
    <>
      <section className="hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(9,35,61,.88) 0%, rgba(9,35,61,.72) 48%, rgba(9,35,61,.25) 100%), url("${heroImage}")` }}>
        <div className="container hero-content">
          <div className="eyebrow eyebrow-light"><span /> PROPERTY MAINTENANCE & PRESERVATION</div>
          <h1>Reliable Property Services.<br /><em>Professional Results.</em></h1>
          <p>Professional property maintenance and preservation solutions designed to keep properties safe, functional, and well-maintained.</p>
          <div className="hero-actions">
            <Link to="/contact" className="button button-white">Contact Us <ArrowUpRight size={17} /></Link>
            <Link to="/about" className="text-link text-link-light">Learn More <ArrowRight size={17} /></Link>
          </div>
          <div className="hero-note"><span className="note-line" /> Practical solutions. Clear communication. Quality-focused work.</div>
        </div>
        <div className="hero-index"><span>01</span><i /> PROPERTY SERVICES</div>
      </section>

      <section className="intro section-pad">
        <div className="container intro-grid">
          <div>
            <div className="eyebrow"><span /> WELCOME TO TIEBACK CONSTRUCTION</div>
            <h2>Taking care of properties, <em>from the inside out.</em></h2>
          </div>
          <div className="intro-copy">
            <p className="lead">Property care takes coordination, practical expertise, and attention to detail. Tieback Construction provides property maintenance and preservation services for property owners and property management teams.</p>
            <p>From everyday repairs to exterior upkeep and vacant property needs, our goal is to make property care more straightforward with responsive communication and professional service.</p>
            <Link to="/about" className="under-link">Get to know us <ArrowUpRight size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="services-section section-pad">
        <div className="container">
          <div className="section-heading">
            <div><div className="eyebrow"><span /> WHAT WE DO</div><h2>Services built around <em>your property.</em></h2></div>
            <p>Flexible support for the maintenance and preservation work properties need to stay in good shape.</p>
          </div>
          <div className="service-grid">
            <article className="service-card">
              <div className="service-image"><img src={maintenanceImage} alt="Professional working on a home maintenance project" onError={(e) => { e.currentTarget.src = heroImage; }} /><span className="service-number">01 / 02</span></div>
              <div className="service-body">
                <div className="service-icon"><Wrench size={21} /></div>
                <h3>Property Maintenance</h3>
                <p>Practical repair and upkeep services to help keep residential properties safe, functional, and ready for use.</p>
                <ul><li>Plumbing, electrical, and HVAC</li><li>Appliance and handyman repairs</li><li>Painting, drywall, and flooring</li><li>Property make-ready services</li></ul>
                <Link to="/about#maintenance" className="under-link">Explore maintenance <ArrowUpRight size={16} /></Link>
              </div>
            </article>
            <article className="service-card">
              <div className="service-image"><img src={preservationImage} alt="Well-maintained residential property exterior" onError={(e) => { e.currentTarget.src = heroImage; }} /><span className="service-number">02 / 02</span></div>
              <div className="service-body">
                <div className="service-icon"><House size={21} /></div>
                <h3>Property Preservation</h3>
                <p>Exterior and vacant-property services that help maintain a property's condition, appearance, and readiness.</p>
                <ul><li>Exterior maintenance and landscaping</li><li>Debris removal and property cleanouts</li><li>Pressure washing and minor roof repairs</li><li>Vacant property maintenance</li></ul>
                <Link to="/about#preservation" className="under-link">Explore preservation <ArrowUpRight size={16} /></Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="why-section section-pad">
        <div className="container why-layout">
          <div className="why-heading">
            <div className="eyebrow eyebrow-light"><span /> THE TIEBACK APPROACH</div>
            <h2>Good property care starts with <em>the right approach.</em></h2>
            <p>We focus on practical service, thoughtful coordination, and clear communication—so you know what to expect as work moves forward.</p>
            <Link to="/about" className="button button-outline-light">About Tieback <ArrowUpRight size={16} /></Link>
          </div>
          <div className="reason-grid">
            {reasons.map(({ icon: Icon, title, text }, index) => <div className="reason" key={title}><div className="reason-top"><Icon size={22} /><span>0{index + 1}</span></div><h3>{title}</h3><p>{text}</p></div>)}
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