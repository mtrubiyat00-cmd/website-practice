
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Wrench,
  Droplets,
  Zap,
  Thermometer,
  Paintbrush,
  House,
  ClipboardCheck,
  DoorOpen,
} from "lucide-react";
import PageMeta from "../components/PageMeta";

const maintenanceGroups = [
  {
    icon: Wrench,
    title: "General Repairs & Handyman Services",
    items: [
      "Door, window, and lock repairs",
      "Drywall repairs and interior painting",
      "Carpentry and fixture installation",
      "Flooring and tile repairs",
    ],
  },
  {
    icon: Droplets,
    title: "Plumbing, Electrical & HVAC",
    items: [
      "Plumbing repairs and leak detection",
      "Faucet, toilet, and fixture replacement",
      "Electrical troubleshooting and lighting repairs",
      "Heating and air conditioning maintenance",
    ],
  },
  {
    icon: House,
    title: "Exterior & Property Maintenance",
    items: [
      "Roof, gutter, fence, and siding repairs",
      "Pressure washing",
      "Landscaping and lawn maintenance",
      "Driveway and walkway repairs",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Tenant Turnover & Make-Ready",
    items: [
      "Move-out property preparation",
      "Interior painting and flooring",
      "Deep cleaning and debris removal",
      "Appliance installation and replacement",
      "General repairs and final property preparation",
    ],
  },
];

function ServiceCard({ icon: Icon, title, items, index }) {
  return (
    <article className="service-detail-card">
      <div className="service-detail-icon">
        <Icon size={22} />
      </div>

      <span className="maintenance-card-number">
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

export default function PropertyMaintenance() {
  return (
    <>
      <PageMeta
        title="Complete Property Maintenance & Repair Services | Tieback Construction"
        description="Residential property maintenance, handyman repairs, plumbing, electrical, HVAC, exterior maintenance, and tenant turnover services."
      />

      <section
        className="page-hero services-hero"
        style={{
          backgroundImage:
            'linear-gradient(90deg, rgba(9,35,61,.92), rgba(9,35,61,.48)), url("https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1500&q=85")',
        }}
      >
        <div className="container page-hero-content">
          <Link to="/services" className="service-back-link">
            <ArrowLeft size={16} /> All Services
          </Link>

          <div className="eyebrow eyebrow-light">
            <span /> PROPERTY MAINTENANCE
          </div>

          <h1>
            Complete Property Maintenance{" "}
            <em>& Repair Services.</em>
          </h1>

          <p>
            We provide reliable property maintenance and repair solutions
            to help property owners and managers keep their properties
            safe, functional, and well-maintained. From routine repairs
            to property improvements, our team handles a wide range of
            maintenance needs.
          </p>

          <Link
            to="/contact"
            className="button button-white maintenance-hero-button"
          >
            Request Maintenance Service
            <ArrowUpRight size={16} />
          </Link>

          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/services">Services</Link>
            <span>/</span>
            Property Maintenance
          </div>
        </div>
      </section>

      <section className="service-detail-section section-pad">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow">
                <span /> OUR MAINTENANCE SERVICES
              </div>

              <h2>
                Complete support for <em>residential properties.</em>
              </h2>
            </div>

            <p>
              From everyday repairs to full property make-ready work,
              we provide practical maintenance support for residential
              properties.
            </p>
          </div>

          <div className="service-detail-grid">
            {maintenanceGroups.map((group, index) => (
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
              <span /> HOW WE WORK
            </div>

            <h2>
              Reliable support from <em>request to completion.</em>
            </h2>

            <p>
              We focus on understanding the property requirements,
              coordinating the appropriate service, and communicating
              clearly throughout the work.
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
                <p>Arrange the appropriate next steps and access.</p>
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
              <span /> NEED PROPERTY MAINTENANCE?
            </div>

            <h2>
              Request professional <em>maintenance service.</em>
            </h2>

            <p>
              Contact our team to discuss your residential property
              repair and maintenance requirements.
            </p>
          </div>

          <Link to="/contact" className="button button-primary">
            Request Maintenance Service
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>

      <section className="service-cross-link">
        <div className="container">
          <p>Looking for vacant-property support?</p>

          <Link to="/services/property-preservation">
            Explore Property Preservation
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
