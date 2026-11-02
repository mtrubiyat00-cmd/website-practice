import { useState } from "react";
import { Mail, Phone, MapPin, ArrowUpRight, Send, Info, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import PageMeta from "../components/PageMeta";

const initialForm = {
  name: "",
  company: "",
  email: "",
  phone: "",
  address: "",
  service: "",
  message: "",
  website: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [attempted, setAttempted] = useState(false);
  const [status, setStatus] = useState("idle");
  const [notice, setNotice] = useState("");

  const update = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim());
  const errors = {
    name: !form.name.trim(),
    email: !validEmail,
    service: !form.service,
    message: !form.message.trim(),
  };

  async function submit(event) {
    event.preventDefault();
    setAttempted(true);
    setNotice("");

    if (Object.values(errors).some(Boolean)) {
      setStatus("error");
      setNotice("Please complete the required fields and enter a valid email address.");
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.error || "We couldn't send your inquiry right now. Please email or call our team.");
      }

      setStatus("success");
      setNotice("Thank you. Your inquiry has been sent to Tieback Construction.");
      setForm(initialForm);
      setAttempted(false);
    } catch (error) {
      setStatus("error");
      setNotice(error.message || "We couldn't send your inquiry. Please contact us by phone or email.");
    }
  }

  return (
    <>
      <PageMeta
        title="Contact Tieback Construction | New York Property Maintenance"
        description="Contact Tieback Construction about residential property maintenance and property preservation services in New York City and surrounding areas."
      />

      <section className="page-hero contact-hero" style={{ backgroundImage: "linear-gradient(90deg, rgba(9,35,61,.91), rgba(9,35,61,.50)), url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85')" }}>
        <div className="container page-hero-content">
          <div className="eyebrow eyebrow-light"><span /> CONTACT TIEBACK</div>
          <h1>Let's get your property <em>moving forward.</em></h1>
          <p>Tell us about your property maintenance or preservation needs. Our team would be glad to hear from you.</p>
          <div className="breadcrumb"><Link to="/">Home</Link><span>/</span> Contact Us</div>
        </div>
      </section>

      <section className="section-pad contact-main">
        <div className="container contact-layout">
          <aside className="contact-aside">
            <div className="eyebrow"><span /> GET IN TOUCH</div>
            <h2>We're ready to <em>listen.</em></h2>
            <p className="aside-intro">Reach out by phone or email, or send a message using the form. Share a few details so we can better understand your request.</p>
            <a className="contact-info-card" href="mailto:support@tiebackconstruction.com">
              <span className="contact-info-icon"><Mail /></span>
              <span><small>EMAIL US</small><strong>support@tiebackconstruction.com</strong></span>
              <ArrowUpRight size={17} />
            </a>
            <a className="contact-info-card" href="tel:+15165187361">
              <span className="contact-info-icon"><Phone /></span>
              <span><small>CALL US</small><strong>+1 (516) 518-7361</strong></span>
              <ArrowUpRight size={17} />
            </a>
            <div className="service-area-note">
              <MapPin size={19} />
              <div><strong>Service area</strong><p>New York City, NY and surrounding areas. This describes the general service area, not a physical office address.</p></div>
            </div>
          </aside>

          <div className="contact-form-wrap">
            <div className="form-heading"><h2>Tell us about your needs</h2><p>Fields marked with an asterisk (*) are required.</p></div>
            <form onSubmit={submit} noValidate>
              <div className="form-grid">
                <label>Full Name *
                  <input name="name" value={form.name} onChange={update} placeholder="Your full name" autoComplete="name" maxLength={100} />
                  {attempted && errors.name && <small className="field-error">Please enter your name.</small>}
                </label>
                <label>Company Name
                  <input name="company" value={form.company} onChange={update} placeholder="Company or organization" autoComplete="organization" maxLength={150} />
                </label>
                <label>Email Address *
                  <input name="email" type="email" value={form.email} onChange={update} placeholder="you@example.com" autoComplete="email" maxLength={200} />
                  {attempted && errors.email && <small className="field-error">Enter a valid email address.</small>}
                </label>
                <label>Phone Number
                  <input name="phone" type="tel" value={form.phone} onChange={update} placeholder="+1 (000) 000-0000" autoComplete="tel" maxLength={40} />
                </label>
                <label className="full-field">Property Address
                  <input name="address" value={form.address} onChange={update} placeholder="Property street, city, state" autoComplete="street-address" maxLength={250} />
                </label>
                <label className="full-field">Service Needed *
                  <select name="service" value={form.service} onChange={update}>
                    <option value="">Select a service</option>
                    <option>Property Maintenance</option>
                    <option>Property Preservation</option>
                    <option>General Property Services</option>
                    <option>Other / Not Sure</option>
                  </select>
                  {attempted && errors.service && <small className="field-error">Please select a service.</small>}
                </label>
                <label className="full-field">Message *
                  <textarea name="message" rows="5" value={form.message} onChange={update} placeholder="Tell us a little about the property and work needed..." maxLength={4000} />
                  {attempted && errors.message && <small className="field-error">Please enter a message.</small>}
                </label>
                <label className="form-honeypot" aria-hidden="true">Leave this field empty
                  <input name="website" tabIndex="-1" autoComplete="off" value={form.website} onChange={update} />
                </label>
              </div>
              <button type="submit" className="button button-primary submit-button" disabled={status === "sending"}>
                {status === "sending" ? "Sending..." : "Submit Inquiry"} <Send size={16} />
              </button>
              {notice && (
                <div className={`form-notice ${status === "error" ? "error-notice" : "success-notice"}`} role="status" aria-live="polite">
                  {status === "success" ? <CheckCircle2 size={18} /> : <Info size={18} />}
                  <span>{notice} {status === "error" && <>You can also reach us at <a href="mailto:support@tiebackconstruction.com">support@tiebackconstruction.com</a>.</>}</span>
                </div>
              )}
              <p className="form-disclaimer">Your information will be used to respond to your inquiry. Please do not include access codes or other sensitive property information in this form.</p>
            </form>
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="container map-heading">
          <div><div className="eyebrow"><span /> WHERE WE WORK</div><h2>Our Service Area – <em>New York City, NY</em></h2></div>
          <p>The map shows the general New York City area and is not a representation of a physical office location.</p>
        </div>
        <div className="map-frame"><iframe title="Map showing the general New York City service area" src="https://www.openstreetmap.org/export/embed.html?bbox=-74.10%2C40.60%2C-73.70%2C40.88&layer=mapnik&marker=40.7128%2C-74.0060" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
        <div className="container map-caption"><MapPin size={16} /> New York City, New York — general service area</div>
      </section>
    </>
  );
}
