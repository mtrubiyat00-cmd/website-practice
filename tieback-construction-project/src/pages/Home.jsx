import React from "react";

const services = [
  { n: "01 / 02", title: "Property Maintenance", image: "/images/property-maintenance.jpg", alt: "Property maintenance technician", desc: "Practical repair and upkeep services to help keep residential properties safe, functional, and well-maintained.", items: ["General repairs", "Plumbing, electrical, and HVAC", "Appliance and handyman repairs", "Painting, drywall, and flooring", "Interior and exterior repairs"], link: "Explore maintenance" },
  { n: "02 / 02", title: "Property Preservation", image: "/images/property-preservation.jpg", alt: "Residential property", desc: "Vacant-property and exterior services that help maintain a property's condition, appearance, and overall value.", items: ["Property inspections", "Vacant property maintenance", "Lawn care and landscaping", "Debris removal and cleanouts", "Pressure washing and exterior care"], link: "Explore preservation" }
];
const approach = [
  ["01", "Thoughtful Coordination", "We focus on understanding the required work, coordinating next steps, and keeping expectations clear."],
  ["02", "Professional Workmanship", "Careful attention to the details that help keep residential properties in good condition."],
  ["03", "Responsive Communication", "Straightforward updates and communication as property work moves forward."],
  ["04", "Two Core Service Areas", "Property maintenance and property preservation support through one service provider."]
];
const audiences = [
  ["01", "Property Management Companies", "Maintenance and preservation support for managed residential properties."],
  ["02", "Property Owners & Landlords", "Practical repair and upkeep services for residential properties."],
  ["03", "Real Estate Professionals", "Property-related services for investors and professionals responsible for residential assets."]
];
const steps = [
  ["01", "Understand the request", "Review the property need and understand the requested scope."],
  ["02", "Coordinate the service", "Arrange the appropriate next steps and service resources."],
  ["03", "Complete and communicate", "Carry out the work and share relevant updates."]
];

export default function Home() {
  return <main className="tieback-home">
    <section className="tb-hero" style={{ "--tb-hero-image": 'url("/images/hero-house.jpg")' }}>
      <div className="tb-wrap tb-hero-inner">
        <div className="tb-hero-copy">
          <span className="tb-kicker">PROPERTY MAINTENANCE &amp; PRESERVATION</span>
          <h1>Reliable Property Maintenance.<span>Professional Results.</span></h1>
          <p>Residential property maintenance and preservation services for property owners and management teams throughout New York City and surrounding areas.</p>
          <div className="tb-actions"><a className="tb-btn tb-btn-light" href="/services">Explore Our Services ↗</a><a className="tb-btn tb-btn-ghost" href="/contact">Contact Us →</a></div>
        </div>
        <div className="tb-hero-caption"><span>01</span><span>NEW YORK PROPERTY SERVICES</span></div>
      </div>
    </section>
    <section className="tb-intro"><div className="tb-wrap tb-intro-grid">
      <div><span className="tb-kicker">WELCOME TO TIEBACK CONSTRUCTION</span><h2>Taking care of properties,<span> from the inside out.</span></h2></div>
      <div className="tb-intro-copy"><p>Property care takes coordination, practical expertise, and attention to detail. Tieback Construction provides property maintenance and preservation services for property owners and property management teams.</p><p>From everyday repairs and interior upkeep to exterior maintenance and vacant property needs, our goal is to make property care more straightforward through clear communication and professional service.</p><a className="tb-inline-link" href="/about">Get to know Tieback ↗</a></div>
    </div></section>
    <section className="tb-services"><div className="tb-wrap">
      <div className="tb-section-head"><div><span className="tb-kicker">WHAT WE DO</span><h2>Two core services.<span> One point of contact.</span></h2></div><p>Focused support for the maintenance and preservation work residential properties need.</p></div>
      <div className="tb-service-grid">{services.map(s => <article className="tb-service-card" key={s.title}>
        <div className="tb-service-image"><img src={s.image} alt={s.alt}/><span className="tb-image-count">{s.n}</span></div>
        <div className="tb-service-body"><span className="tb-service-mark">✦</span><h3>{s.title}</h3><p>{s.desc}</p><ul>{s.items.map(x => <li key={x}>{x}</li>)}</ul><a className="tb-inline-link" href="/services">{s.link} ↗</a></div>
      </article>)}</div>
      <div className="tb-services-action"><a className="tb-btn tb-btn-blue" href="/services">View All Services →</a></div>
    </div></section>
    <section className="tb-approach"><div className="tb-wrap tb-approach-grid">
      <div className="tb-approach-intro"><span className="tb-kicker">THE TIEBACK APPROACH</span><h2>Good property care starts with<span> the right approach.</span></h2><p>We focus on understanding the work, coordinating practical next steps, and keeping communication clear throughout the service process.</p><a className="tb-btn tb-btn-outline" href="/about">About Tieback ↗</a></div>
      <div className="tb-approach-items">{approach.map(a => <article className="tb-approach-item" key={a[0]}><div className="tb-approach-meta"><span>{a[0]}</span><span>◇</span></div><h3>{a[1]}</h3><p>{a[2]}</p></article>)}</div>
    </div></section>
    <section className="tb-audience"><div className="tb-wrap">
      <div className="tb-section-head"><div><span className="tb-kicker">WHO WE SUPPORT</span><h2>Property services for the people<span> who care for properties.</span></h2></div><p>We work with people and organizations responsible for maintaining residential properties.</p></div>
      <div className="tb-audience-grid">{audiences.map(a => <article className="tb-audience-card" key={a[0]}><span>{a[0]}</span><h3>{a[1]}</h3><p>{a[2]}</p></article>)}</div>
    </div></section>
    <section className="tb-process"><div className="tb-wrap tb-process-grid">
      <div className="tb-process-intro"><span className="tb-kicker">A CLEAR SERVICE PROCESS</span><h2>From the first request to<span> the finished work.</span></h2><p>Our approach is centered on understanding the property need, coordinating the service, and communicating as work progresses.</p></div>
      <div className="tb-process-list">{steps.map(s => <article className="tb-process-row" key={s[0]}><span className="tb-step-number">{s[0]}</span><div><h3>{s[1]}</h3><p>{s[2]}</p></div></article>)}</div>
    </div></section>
    <section className="tb-final-cta"><div className="tb-wrap tb-final-inner"><div><span className="tb-kicker">LET'S TALK ABOUT YOUR PROPERTY</span><h2>Have a property that needs attention?</h2><p>Tell us what you need. We're ready to discuss how Tieback Construction can help.</p></div><a className="tb-btn tb-btn-blue" href="/contact">Contact Our Team ↗</a></div></section>
  </main>;
}
