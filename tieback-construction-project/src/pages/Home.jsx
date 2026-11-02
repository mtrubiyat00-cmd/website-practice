import React from "react";

const services = [
  {
    number: "01",
    title: "Property Maintenance",
    description:
      "Reliable maintenance and repair solutions that help keep residential properties safe, functional, and well-maintained.",
    items: ["General Repairs", "Plumbing & Electrical", "HVAC & Appliance Repairs", "Painting & Flooring"],
  },
  {
    number: "02",
    title: "Property Preservation",
    description:
      "Professional property preservation services designed to protect, maintain, and prepare properties throughout their lifecycle.",
    items: ["Property Inspections", "Vacant Property Maintenance", "Exterior Maintenance", "Property Cleanouts"],
  },
];

const approach = [
  {
    number: "01",
    title: "Thoughtful Coordination",
    description: "Organized project coordination from the initial request through completion.",
  },
  {
    number: "02",
    title: "Professional Workmanship",
    description: "Quality-focused work with attention to property condition and detail.",
  },
  {
    number: "03",
    title: "Responsive Communication",
    description: "Clear updates and dependable communication throughout every project.",
  },
  {
    number: "04",
    title: "Complete Property Care",
    description: "One service partner for maintenance and preservation requirements.",
  },
];

const clients = [
  {
    title: "Property Management Companies",
    description:
      "Dependable field service support for residential portfolios, work orders, and ongoing property maintenance.",
  },
  {
    title: "Property Owners & Landlords",
    description:
      "Practical maintenance and repair solutions to help protect property value and maintain comfortable homes.",
  },
  {
    title: "Real Estate Professionals",
    description:
      "Property preparation, preservation, and maintenance support for real estate professionals and investors.",
  },
];

const process = [
  {
    number: "01",
    title: "Submit Your Request",
    description: "Share the property details, service requirements, and project expectations.",
  },
  {
    number: "02",
    title: "Assessment & Coordination",
    description: "We review the request, coordinate the required work, and establish the next steps.",
  },
  {
    number: "03",
    title: "Work Execution",
    description: "Our field service team coordinates the approved work with attention to quality and scope.",
  },
  {
    number: "04",
    title: "Completion & Updates",
    description: "Receive a completion update and relevant documentation for the work performed.",
  },
];

export default function Home() {
  return (
    <main className="tieback-home">
      {/* HERO */}
      <section className="tb-hero">
        <div className="tb-hero-overlay" />
        <div className="tb-container tb-hero-content">
          <span className="tb-eyebrow">PROPERTY MAINTENANCE & PRESERVATION</span>

          <h1>
            Reliable Property Maintenance.
            <span> Professional Results.</span>
          </h1>

          <p>
            Residential property maintenance and preservation solutions
            for property owners, management teams, and real estate
            professionals throughout New York City and surrounding areas.
          </p>

          <div className="tb-actions">
            <a href="/services" className="tb-button tb-button-primary">
              Explore Our Services
            </a>
            <a href="/contact" className="tb-button tb-button-outline">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="tb-section tb-intro">
        <div className="tb-container tb-intro-grid">
          <div>
            <span className="tb-eyebrow">WHO WE ARE</span>
            <h2>Taking care of properties, from the inside out.</h2>
          </div>

          <div className="tb-intro-copy">
            <p>
              Tieback Construction provides property maintenance and
              preservation services for residential properties. We work
              with property management companies, owners, landlords, and
              real estate professionals to coordinate dependable field
              services.
            </p>
            <p>
              From routine maintenance to property preparation and
              preservation, our focus is on responsive communication,
              professional workmanship, and consistent service.
            </p>
            <a href="/about" className="tb-text-link">
              Learn More About Us →
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="tb-section tb-services">
        <div className="tb-container">
          <div className="tb-section-heading">
            <span className="tb-eyebrow">WHAT WE DO</span>
            <h2>Two core services. One point of contact.</h2>
            <p>
              Comprehensive field service support for residential
              property maintenance and preservation.
            </p>
          </div>

          <div className="tb-service-grid">
            {services.map((service) => (
              <article className="tb-service-card" key={service.number}>
                <span className="tb-card-number">{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <ul>
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <a href="/services" className="tb-text-link">
                  Explore Service →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="tb-section tb-approach">
        <div className="tb-container">
          <div className="tb-section-heading tb-heading-light">
            <span className="tb-eyebrow">WHY TIEBACK</span>
            <h2>Good property care starts with the right approach.</h2>
            <p>
              We believe effective property services require organization,
              communication, and attention to detail.
            </p>
          </div>

          <div className="tb-approach-grid">
            {approach.map((item) => (
              <article className="tb-approach-card" key={item.number}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE SUPPORT */}
      <section className="tb-section tb-clients">
        <div className="tb-container">
          <div className="tb-section-heading tb-heading-light">
            <span className="tb-eyebrow">WHO WE SUPPORT</span>
            <h2>Property services for the people who care for properties.</h2>
          </div>

          <div className="tb-client-grid">
            {clients.map((client, index) => (
              <article className="tb-client-card" key={client.title}>
                <span>0{index + 1}</span>
                <h3>{client.title}</h3>
                <p>{client.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="tb-section tb-process">
        <div className="tb-container tb-process-layout">
          <div className="tb-process-intro">
            <span className="tb-eyebrow">HOW WE WORK</span>
            <h2>From the first request to the finished work.</h2>
            <p>
              A clear and organized process helps keep property
              maintenance projects moving efficiently.
            </p>
            <a href="/contact" className="tb-button tb-button-primary">
              Start a Conversation
            </a>
          </div>

          <div className="tb-process-list">
            {process.map((item) => (
              <article className="tb-process-item" key={item.number}>
                <span className="tb-process-number">{item.number}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="tb-section tb-final-cta">
        <div className="tb-container tb-final-content">
          <span className="tb-eyebrow">LET'S WORK TOGETHER</span>
          <h2>Have a property that needs attention?</h2>
          <p>
            Connect with our team to discuss your property maintenance
            or preservation requirements.
          </p>
          <a href="/contact" className="tb-button tb-button-primary">
            Contact Our Team
          </a>
        </div>
      </section>
    </main>
  );
}
