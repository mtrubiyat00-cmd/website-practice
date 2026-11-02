import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  CheckCircle2,
  Wrench,
  House,
  Droplets,
  Zap,
  Thermometer,
  Refrigerator,
  Paintbrush,
  Trees,
  Trash2,
  DoorOpen,
  ClipboardCheck,
} from "lucide-react";
import PageMeta from "../components/PageMeta";

const maintenanceImage = "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1500&q=85";
const preservationImage = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1500&q=85";

const maintenanceGroups = [
  { icon: Droplets, title: "Plumbing", items: ["Leak and fixture repairs", "Faucets, toilets, and drains", "Water-related maintenance"] },
  { icon: Zap, title: "Electrical", items: ["Outlet and switch repairs", "Lighting and fixture work", "Electrical troubleshooting"] },
  { icon: Thermometer, title: "Heating & Cooling", items: ["HVAC troubleshooting", "Heating and cooling repairs", "Routine system maintenance"] },
  { icon: Refrigerator, title: "Appliance Services", items: ["Appliance troubleshooting", "Repair and replacement", "Residential appliance support"] },
  { icon: Paintbrush, title: "Interior Repairs", items: ["Drywall and painting", "Flooring, doors, and trim", "Fixtures and general repairs"] },
  { icon: Wrench, title: "General Property Repairs", items: ["Handyman services", "Minor installations and repairs", "Interior and exterior upkeep"] },
];

const preservationGroups = [
  { icon: House, title: "Vacant Property Upkeep", items: ["General vacant-property maintenance", "Property condition-related repairs", "Interior and exterior upkeep"] },
  { icon: Trees, title: "Lawn & Grounds Maintenance", items: ["Grass cutting and yard cleanup", "Bush trimming and weed control", "Basic landscaping maintenance"] },
  { icon: Trash2, title: "Debris Removal & Cleanouts", items: ["Interior and exterior debris removal", "Property cleanouts", "Removal of unwanted materials"] },
  { icon: Droplets, title: "Exterior Maintenance", items: ["Pressure washing", "Minor exterior and siding repairs", "Minor roof-related maintenance"] },
  { icon: DoorOpen, title: "Property Securing & Repairs", items: ["Minor door and window repairs", "Basic access-point repairs", "General property upkeep"] },
  { icon: ClipboardCheck, title: "Preservation Support", items: ["Review of assigned work requirements", "Coordination of approved services", "Completion updates and documentation"] },
];

function ServiceGroup({ icon: Icon, title, items }) {
  return (
    <article className="service-detail-card">
      <div className="service-detail-icon"><Icon size={21} /></div>
      <h3>{title}</h3>
      <ul>{items.map((item) => <li key={item}><CheckCircle2 size={15} />{item}</li>)}</ul>
    </article>
  );
}

export default function Services() {
  return (
    <>
      <PageMeta
        title="Property Maintenance & Preservation Services | Tieback Construction"
        description="Explore Tieback Construction's residential property maintenance and property preservation services in New York City and surrounding areas."
      />

      <section className="page-hero services-hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(9,35,61,.91), rgba(9,35,61,.48)), url("${maintenanceImage}")` }}>
        <div className="container page-hero-content">
          <div className="eyebrow eyebrow-light"><span /> OUR SERVICES</div>
          <h1>Property Maintenance <em>& Preservation.</em></h1>
          <p>Practical residential property services to help maintain the condition, functionality, and appearance of properties throughout New York City and surrounding areas.</p>
          <div className="breadcrumb"><Link to="/">Home</Link><span>/</span> Services</div>
        </div>
      </section>

      <section className="services-overview section-pad">
        <div className="container services-overview-inner">
          <div>
            <div className="eyebrow"><span /> PROPERTY SERVICES</div>
            <h2>Two core service areas. <em>Focused property support.</em></h2>
          </div>
          <p className="lead">Tieback Construction provides residential property maintenance and property preservation services for property owners, landlords, and property management companies. Our work supports both ongoing property needs and the upkeep of vacant properties.</p>
        </div>
        <div className="container service-anchor-nav">
          <a href="#property-maintenance"><Wrench size={17} /> Property Maintenance <ArrowUpRight size={15} /></a>
          <a href="#property-preservation"><House size={17} /> Property Preservation <ArrowUpRight size={15} /></a>
        </div>
      </section>

      <section className="service-detail-section section-pad" id="property-maintenance">
        <div className="container">
          <div className="service-detail-intro">
            <div className="service-detail-photo"><img src={maintenanceImage} alt="Technician completing residential property maintenance" loading="lazy" /></div>
            <div className="service-detail-heading">
              <div className="eyebrow"><span /> 01 — PROPERTY MAINTENANCE</div>
              <h2>Residential Property <em>Maintenance & Repairs.</em></h2>
              <p>Our property maintenance services address a range of residential repair and upkeep requirements. We support property owners and management teams with practical solutions for interior and exterior property needs.</p>
              <p>From individual repair requests to broader upkeep needs, our focus is on understanding the requested work, coordinating the service, and communicating clearly as work progresses.</p>
              <Link to="/contact" className="button button-primary">Request Maintenance Service <ArrowUpRight size={16} /></Link>
            </div>
          </div>
          <div className="service-detail-grid">
            {maintenanceGroups.map((group) => <ServiceGroup key={group.title} {...group} />)}
          </div>
        </div>
      </section>

      <section className="service-detail-section preservation-detail section-pad" id="property-preservation">
        <div className="container">
          <div className="service-detail-intro reverse-detail">
            <div className="service-detail-photo"><img src={preservationImage} alt="Residential property exterior and grounds" loading="lazy" /></div>
            <div className="service-detail-heading">
              <div className="eyebrow"><span /> 02 — PROPERTY PRESERVATION</div>
              <h2>Residential Property <em>Preservation.</em></h2>
              <p>Tieback Construction provides property preservation and vacant-property maintenance services to help maintain property condition and appearance. Our services include exterior upkeep, grounds maintenance, debris removal, and general property repairs.</p>
              <p>We work to understand the property requirements and coordinate the requested services with attention to the scope and condition of each property.</p>
              <Link to="/contact" className="button button-primary">Discuss a Preservation Project <ArrowUpRight size={16} /></Link>
            </div>
          </div>
          <div className="service-detail-grid">
            {preservationGroups.map((group) => <ServiceGroup key={group.title} {...group} />)}
          </div>
        </div>
      </section>

      <section className="service-process section-pad">
        <div className="container service-process-layout">
          <div>
            <div className="eyebrow eyebrow-light"><span /> HOW WE WORK</div>
            <h2>A straightforward approach to <em>every assignment.</em></h2>
            <p>Clear expectations and communication help keep property work organized from the initial request through completion.</p>
          </div>
          <div className="service-process-steps">
            <div><span>01</span><div><strong>Understand the request</strong><p>Review the property needs and requested scope of work.</p></div></div>
            <div><span>02</span><div><strong>Coordinate the service</strong><p>Arrange the appropriate service, scheduling, and property access.</p></div></div>
            <div><span>03</span><div><strong>Complete and communicate</strong><p>Carry out the agreed work and share relevant updates.</p></div></div>
          </div>
        </div>
      </section>

      <section className="cta-section section-pad">
        <div className="container cta-inner">
          <div><div className="eyebrow"><span /> NEED PROPERTY SUPPORT?</div><h2>Let's discuss your <em>service needs.</em></h2><p>Contact Tieback Construction to talk about property maintenance or preservation.</p></div>
          <Link to="/contact" className="button button-primary">Contact Our Team <ArrowUpRight size={17} /></Link>
        </div>
      </section>
    </>
  );
}
