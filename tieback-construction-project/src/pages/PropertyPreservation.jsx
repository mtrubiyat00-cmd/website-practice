
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ClipboardCheck,
  ShieldCheck,
  Trees,
  Trash2,
  DoorOpen,
  Wrench,
  House,
} from "lucide-react";
import PageMeta from "../components/PageMeta";

const preservationGroups = [
  {
    icon: ClipboardCheck,
    title: "Property Inspections & Securing",
    items: [
      "Interior and exterior property inspections",
      "Occupancy and condition verification",
      "Lock changes and lockbox installation",
      "Window and door board-ups",
      "Property condition documentation and photos",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Property Protection & Maintenance",
    items: [
      "Winterization and de-winterization",
      "Emergency property securing",
      "Roof tarping and temporary protection",
      "Lawn mowing and landscaping",
      "Snow and ice removal",
    ],
  },
  {
    icon: Trash2,
    title: "Trash-Outs & Cleaning",
    items: [
      "Interior and exterior debris removal",
      "Furniture and appliance removal",
      "Foreclosure and eviction cleanouts",
      "Deep cleaning and property cleanup",
    ],
  },
  {
    icon: Wrench,
    title: "Property Repairs & REO Services",
    items: [
      "Minor interior and exterior repairs",
      "Drywall, door, and window repairs",
      "Plumbing leak repairs",
      "Damage mitigation",
      "REO property maintenance and market-ready preparation",
    ],
  },
];

function ServiceCard({ icon: Icon, title, items, index }) {
  return (
    <article className="service-detail-card">
      <div className="service-detail-icon">
        <Icon size={22} />
      </div>

      <span className="preservation-card-number">
        0{index + 1}
      </span>

      <h3>{title}</h3>

      <ul>
        {items.map((item) => (
          <li key={item}>
            <CheckCircle2 size={15} />
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function PropertyPreservation() {
  return (
    <>
      <PageMeta
        title="Professional Property Preservation Services | Tieback Construction"
        description="Professional residential property preservation, inspections, property securing, winterization, trash-outs, cleaning, repairs, and REO services."
      />

      <section
        className="page-hero services-hero"
        style={{
          backgroundImage:
            'linear-gradient(90deg, rgba(9,35,61,.92), rgba(9,35,61,.48)), url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1500&q=85")',
        }}
      >
        <div className="container page-hero-content">
          <Link to="/services" className="service-back-link">
            <ArrowLeft size={16} /> All Services
          </Link>

          <div className="eyebrow eyebrow-light">
            <span /> PROPERTY PRESERVATION
          </div>

          <h1>
            Professional Property <em>Preservation Services.</em>
          </h1>

          <p>
            We provide comprehensive property preservation solutions
            to protect vacant, foreclosed, and distressed properties.
            Our services help prevent property deterioration, maintain
            security, and keep real estate assets in good condition.
          </p>

          <Link
            to="/contact"
            className="button button-white preservation-hero-button"
          >
            Request Preservation Services
            <ArrowUpRight size={16} />
          </Link>

          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/services">Services</Link>
            <span>/</span>
            Property Preservation
          </div>
        </div>
      </section>

      <section className="service-detail-section preservation-detail section-pad">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow">
                <span /> OUR PRESERVATION SERVICES
              </div>

              <h2>
                Protecting properties. <em>Preserving value.</em>
              </h2>
            </div>

            <p>
              We provide property protection, maintenance, cleanup,
              and repair support for vacant, foreclosed, and distressed
              residential properties.
            </p>
          </div>

          <div className="service-detail-grid">
            {preservationGroups.map((group, index) => (
              <ServiceCard
                key={group.title}
                {...group}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="service-process section-pad">
        <div className="container service-process-layout">
          <div>
            <div className="eyebrow eyebrow-light">
              <span /> OUR PRESERVATION APPROACH
            </div>

            <h2>
              Property protection with <em>clear coordination.</em>
            </h2>

            <p>
              We focus on understanding property requirements,
              coordinating the requested services, and keeping
              communication clear throughout the assignment.
            </p>
          </div>

          <div className="service-process-steps">
            <div>
              <span>01</span>
              <div>
                <strong>Understand the request</strong>
                <p>Review the property need and requested scope.</p>
              </div>
            </div>

            <div>
              <span>02</span>
              <div>
                <strong>Coordinate the service</strong>
                <p>Arrange the appropriate next steps and property access.</p>
              </div>
            </div>

            <div>
              <span>03</span>
              <div>
                <strong>Complete and communicate</strong>
                <p>Carry out the work and share relevant updates.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section section-pad">
        <div className="container cta-inner">
          <div>
            <div className="eyebrow">
              <span /> NEED PROPERTY PRESERVATION?
            </div>

            <h2>
              Protect and maintain your <em>property assets.</em>
            </h2>

            <p>
              Contact our team to discuss your property preservation
              and vacant-property maintenance requirements.
            </p>
          </div>

          <Link to="/contact" className="button button-primary">
            Request Preservation Services
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>

      <section className="service-cross-link">
        <div className="container">
          <p>Looking for general residential repairs and upkeep?</p>

          <Link to="/services/property-maintenance">
            Explore Property Maintenance
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
