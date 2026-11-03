
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Wrench,
  House,
  CheckCircle2,
} from "lucide-react";
import PageMeta from "../components/PageMeta";

const services = [
  {
    icon: Wrench,
    number: "01",
    title: "Property Maintenance",
    description:
      "Complete residential property maintenance and repair solutions, including handyman services, plumbing, electrical, HVAC, exterior repairs, and tenant turnovers.",
    items: [
      "General repairs and handyman services",
      "Plumbing, electrical, and HVAC",
      "Exterior property maintenance",
      "Tenant turnover and make-ready",
    ],
    link: "/services/property-maintenance",
    button: "Explore Property Maintenance",
  },
  {
    icon: House,
    number: "02",
    title: "Property Preservation",
    description:
      "Professional property preservation solutions for vacant, foreclosed, and distressed properties, helping protect property condition, security, and appearance.",
    items: [
      "Property inspections and securing",
      "Winterization and property protection",
      "Trash-outs and cleaning",
      "Property repairs and REO services",
    ],
    link: "/services/property-preservation",
    button: "Explore Property Preservation",
  },
];

export default function Services() {
  return (
    <>
      <PageMeta
        title="Property Maintenance & Preservation Services | Tieback Construction"
        description="Explore Tieback Construction's residential property maintenance and property preservation services in New York City and surrounding areas."
      />

      <section
        className="page-hero services-hero"
        style={{
          backgroundImage:
            'linear-gradient(90deg, rgba(9,35,61,.91), rgba(9,35,61,.48)), url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1500&q=85")',
        }}
      >
        <div className="container page-hero-content">
          <div className="eyebrow eyebrow-light">
            <span /> OUR SERVICES
          </div>

          <h1>
            Property Services <em>Built Around Your Needs.</em>
          </h1>

          <p>
            Tieback Construction provides residential property maintenance
            and preservation services for property owners, landlords,
            investors, and property management companies throughout New York
            City and surrounding areas.
          </p>

          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            Services
          </div>
        </div>
      </section>

      <section className="services-overview section-pad">
        <div className="container">
          <div className="services-overview-inner">
            <div>
              <div className="eyebrow">
                <span /> PROPERTY SERVICES
              </div>

              <h2>
                Two core service areas.{" "}
                <em>One reliable point of contact.</em>
              </h2>
            </div>

            <p className="lead">
              We provide practical property solutions for ongoing
              maintenance needs and vacant-property preservation. Explore
              our two primary service areas to learn more about the work
              we provide.
            </p>
          </div>

          <div className="service-detail-grid services-choice-grid">
            {services.map(({ icon: Icon, ...service }) => (
              <article className="service-detail-card" key={service.title}>
                <div className="service-detail-icon">
                  <Icon size={23} />
                </div>

                <span className="service-choice-number">
                  {service.number}
                </span>

                <h3>{service.title}</h3>

                <p className="service-choice-description">
                  {service.description}
                </p>

                <ul>
                  {service.items.map((item) => (
                    <li key={item}>
                      <CheckCircle2 size={15} />
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  to={service.link}
                  className="button button-primary service-choice-button"
                >
                  {service.button}
                  <ArrowUpRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section section-pad">
        <div className="container cta-inner">
          <div>
            <div className="eyebrow">
              <span /> NEED PROPERTY SUPPORT?
            </div>

            <h2>
              Let's discuss your <em>service needs.</em>
            </h2>

            <p>
              Contact Tieback Construction to discuss your residential
              property maintenance or preservation requirements.
            </p>
          </div>

          <Link to="/contact" className="button button-primary">
            Contact Our Team <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
    </>
  );
}
