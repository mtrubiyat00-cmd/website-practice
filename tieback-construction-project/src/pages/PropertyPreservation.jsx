
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  House,
} from "lucide-react";
import PageMeta from "../components/PageMeta";

const services = [
  {
    title: "Lawn Care and Landscaping",
    description:
      "Exterior grounds care and landscaping services to help maintain a property's appearance.",
  },
  {
    title: "Debris Removal and Cleanouts",
    description:
      "Removal of unwanted debris and property contents to help maintain clean, orderly spaces.",
  },
  {
    title: "Pressure Washing",
    description:
      "Exterior surface cleaning to help improve property appearance and general upkeep.",
  },
  {
    title: "Vacant Property Maintenance",
    description:
      "Maintenance support for vacant residential properties to help preserve their condition.",
  },
];

export default function PropertyPreservation() {
  return (
    <>
      <PageMeta
        title="Property Preservation Services | Tieback Construction"
        description="Residential property preservation, lawn care, debris removal, pressure washing, and vacant-property maintenance."
      />

      <section
        style={{
          background: "#102F4D",
          color: "#FFFFFF",
          padding: "85px 24px",
        }}
      >
        <div style={{ maxWidth: "1120px", margin: "auto" }}>
          <Link
            to="/services"
            style={{
              color: "#A9C8E2",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "13px",
            }}
          >
            <ArrowLeft size={16} /> All Services
          </Link>

          <div className="eyebrow eyebrow-light" style={{ marginTop: "35px" }}>
            <span /> PROPERTY PRESERVATION
          </div>

          <h1
            style={{
              maxWidth: "750px",
              fontSize: "clamp(38px, 5vw, 62px)",
              lineHeight: 1.08,
              margin: "20px 0",
            }}
          >
            Protecting property condition.
            <em style={{ color: "#8FC1ED" }}> Maintaining appearance.</em>
          </h1>

          <p
            style={{
              maxWidth: "650px",
              color: "#D7E3EF",
              fontSize: "16px",
              lineHeight: 1.8,
            }}
          >
            Exterior and vacant-property services that help maintain
            property condition and appearance.
          </p>

          <Link
            to="/contact"
            className="button button-white"
            style={{ marginTop: "20px" }}
          >
            Request Service <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>

      <section
        style={{
          background: "#EAF1F7",
          padding: "75px 24px",
        }}
      >
        <div style={{ maxWidth: "1120px", margin: "auto" }}>
          <div className="eyebrow">
            <span /> OUR PRESERVATION SERVICES
          </div>

          <h2
            style={{
              color: "#102F4D",
              fontSize: "clamp(30px, 4vw, 43px)",
              margin: "18px 0",
            }}
          >
            Exterior and vacant-property support.
          </h2>

          <p style={{ color: "#49647C", lineHeight: 1.8, maxWidth: "650px" }}>
            We provide practical exterior and property preservation
            services to help maintain residential property condition.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
              gap: "18px",
              marginTop: "35px",
            }}
          >
            {services.map((service, index) => (
              <article
                key={service.title}
                style={{
                  background: "#FFFFFF",
                  padding: "25px",
                  borderTop: "3px solid #285F91",
                }}
              >
                <div
                  style={{
                    color: "#285F91",
                    fontSize: "12px",
                    fontWeight: 800,
                  }}
                >
                  0{index + 1}
                </div>

                <h3 style={{ color: "#102F4D", marginTop: "18px" }}>
                  {service.title}
                </h3>

                <p style={{ color: "#49647C", lineHeight: 1.8, fontSize: "13px" }}>
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          background: "#102F4D",
          color: "#FFFFFF",
          padding: "60px 24px",
        }}
      >
        <div style={{ maxWidth: "1120px", margin: "auto" }}>
          <div className="eyebrow eyebrow-light">
            <span /> NEED PROPERTY PRESERVATION?
          </div>

          <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)" }}>
            Let's discuss your property preservation needs.
          </h2>

          <p style={{ color: "#D7E3EF", lineHeight: 1.8 }}>
            Contact our team to discuss your property's exterior
            maintenance and preservation requirements.
          </p>

          <Link to="/contact" className="button button-white">
            Contact Our Team <ArrowRight size={16} />
          </Link>

          <p style={{ marginTop: "25px" }}>
            <Link
              to="/services/property-maintenance"
              style={{ color: "#A9C8E2", textDecoration: "none" }}
            >
              Explore Property Maintenance <ArrowUpRight size={15} />
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
