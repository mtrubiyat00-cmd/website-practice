
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Wrench,
  House,
  CheckCircle2,
} from "lucide-react";
import PageMeta from "../components/PageMeta";

const maintenanceItems = [
  "Plumbing, electrical, and HVAC",
  "Appliance and handyman repairs",
  "Painting, drywall, and flooring",
  "Interior and exterior repairs",
];

const preservationItems = [
  "Lawn care and landscaping",
  "Debris removal and cleanouts",
  "Pressure washing",
  "Vacant property maintenance",
];

export default function Services() {
  return (
    <>
      <PageMeta
        title="Property Maintenance & Preservation Services | Tieback Construction"
        description="Explore residential property maintenance and property preservation services from Tieback Construction."
      />

      <section
        style={{
          background: "#102F4D",
          color: "#FFFFFF",
          padding: "100px 24px 90px",
        }}
      >
        <div style={{ maxWidth: "1120px", margin: "auto" }}>
          <div className="eyebrow eyebrow-light">
            <span /> OUR SERVICES
          </div>

          <h1
            style={{
              maxWidth: "780px",
              fontSize: "clamp(38px, 5vw, 62px)",
              lineHeight: 1.08,
              margin: "25px 0",
            }}
          >
            Property care built around
            <em style={{ color: "#8FC1ED" }}> what properties need.</em>
          </h1>

          <p
            style={{
              maxWidth: "650px",
              color: "#D7E3EF",
              fontSize: "16px",
              lineHeight: 1.8,
            }}
          >
            Tieback Construction provides residential property maintenance
            and property preservation services for property owners,
            property management companies, and real estate professionals.
          </p>

          <p
            style={{
              maxWidth: "650px",
              color: "#D7E3EF",
              fontSize: "14px",
              lineHeight: 1.8,
            }}
          >
            From everyday repairs and ongoing upkeep to exterior care
            and vacant-property needs, we help make property maintenance
            more straightforward through coordinated service and
            clear communication.
          </p>
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
            <span /> TWO CORE SERVICE AREAS
          </div>

          <h2
            style={{
              color: "#102F4D",
              fontSize: "clamp(30px, 4vw, 43px)",
              maxWidth: "650px",
              margin: "18px 0",
            }}
          >
            One point of contact for
            <em> essential property services.</em>
          </h2>

          <p
            style={{
              color: "#49647C",
              maxWidth: "650px",
              lineHeight: 1.8,
              marginBottom: "35px",
            }}
          >
            Our services are organized into two primary categories
            to help you find the support your property needs.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
              gap: "24px",
            }}
          >
            <article
              style={{
                background: "#FFFFFF",
                padding: "32px",
                borderTop: "4px solid #285F91",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  display: "grid",
                  placeItems: "center",
                  color: "#285F91",
                  background: "#EAF1F7",
                }}
              >
                <Wrench size={24} />
              </div>

              <h2 style={{ color: "#102F4D", marginTop: "22px" }}>
                Property Maintenance
              </h2>

              <p style={{ color: "#49647C", lineHeight: 1.8 }}>
                Practical repair and upkeep services to help maintain
                residential properties.
              </p>

              <ul
                style={{
                  paddingLeft: "20px",
                  color: "#36536D",
                  lineHeight: 2,
                  fontSize: "14px",
                }}
              >
                {maintenanceItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <Link
                to="/services/property-maintenance"
                className="under-link"
                style={{ marginTop: "18px" }}
              >
                Explore Maintenance <ArrowUpRight size={16} />
              </Link>
            </article>

            <article
              style={{
                background: "#FFFFFF",
                padding: "32px",
                borderTop: "4px solid #285F91",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  display: "grid",
                  placeItems: "center",
                  color: "#285F91",
                  background: "#EAF1F7",
                }}
              >
                <House size={24} />
              </div>

              <h2 style={{ color: "#102F4D", marginTop: "22px" }}>
                Property Preservation
              </h2>

              <p style={{ color: "#49647C", lineHeight: 1.8 }}>
                Exterior and vacant-property services that help maintain
                property condition and appearance.
              </p>

              <ul
                style={{
                  paddingLeft: "20px",
                  color: "#36536D",
                  lineHeight: 2,
                  fontSize: "14px",
                }}
              >
                {preservationItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <Link
                to="/services/property-preservation"
                className="under-link"
                style={{ marginTop: "18px" }}
              >
                Explore Preservation <ArrowUpRight size={16} />
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section
        style={{
          background: "#102F4D",
          color: "#FFFFFF",
          padding: "65px 24px",
        }}
      >
        <div
          style={{
            maxWidth: "1120px",
            margin: "auto",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "25px",
          }}
        >
          <div>
            <div className="eyebrow eyebrow-light">
              <span /> LET'S DISCUSS YOUR PROPERTY
            </div>

            <h2 style={{ fontSize: "clamp(28px, 4vw, 38px)" }}>
              Looking for reliable property support?
            </h2>

            <p style={{ color: "#D7E3EF" }}>
              Tell us about your property needs. Our team is ready
              to discuss how we can help.
            </p>
          </div>

          <Link to="/contact" className="button button-white">
            Contact Our Team <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
