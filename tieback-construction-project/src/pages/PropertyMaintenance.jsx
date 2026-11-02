
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Wrench,
  CheckCircle2,
} from "lucide-react";
import PageMeta from "../components/PageMeta";

const services = [
  {
    title: "Plumbing, Electrical, and HVAC",
    description:
      "Residential system repairs and maintenance to help keep essential property components functional.",
  },
  {
    title: "Appliance and Handyman Repairs",
    description:
      "Practical repairs and general handyman support for everyday residential property needs.",
  },
  {
    title: "Painting, Drywall, and Flooring",
    description:
      "Interior surface repairs, painting, and flooring upkeep to help maintain property condition.",
  },
  {
    title: "Interior and Exterior Repairs",
    description:
      "General repair and upkeep services for residential interiors and exterior property components.",
  },
];

export default function PropertyMaintenance() {
  return (
    <>
      <PageMeta
        title="Property Maintenance Services | Tieback Construction"
        description="Residential plumbing, electrical, HVAC, appliance, handyman, painting, drywall, and flooring maintenance services."
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
            <span /> PROPERTY MAINTENANCE
          </div>

          <h1
            style={{
              maxWidth: "750px",
              fontSize: "clamp(38px, 5vw, 62px)",
              lineHeight: 1.08,
              margin: "20px 0",
            }}
          >
            Practical property repairs.
            <em style={{ color: "#8FC1ED" }}> Professional upkeep.</em>
          </h1>

          <p
            style={{
              maxWidth: "650px",
              color: "#D7E3EF",
              fontSize: "16px",
              lineHeight: 1.8,
            }}
          >
            Practical repair and upkeep services to help maintain
            residential properties.
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
            <span /> OUR MAINTENANCE SERVICES
          </div>

          <h2
            style={{
              color: "#102F4D",
              fontSize: "clamp(30px, 4vw, 43px)",
              margin: "18px 0",
            }}
          >
            Residential maintenance and repair support.
          </h2>

          <p style={{ color: "#49647C", lineHeight: 1.8, maxWidth: "650px" }}>
            We provide practical support for common residential property
            repair and upkeep needs.
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
            <span /> NEED PROPERTY MAINTENANCE?
          </div>

          <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)" }}>
            Let's discuss your repair and maintenance needs.
          </h2>

          <p style={{ color: "#D7E3EF", lineHeight: 1.8 }}>
            Contact our team to discuss your residential property requirements.
          </p>

          <Link to="/contact" className="button button-white">
            Contact Our Team <ArrowRight size={16} />
          </Link>

          <p style={{ marginTop: "25px" }}>
            <Link
              to="/services/property-preservation"
              style={{ color: "#A9C8E2", textDecoration: "none" }}
            >
              Explore Property Preservation <ArrowUpRight size={15} />
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
