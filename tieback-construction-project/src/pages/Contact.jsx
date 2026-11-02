import { useState } from "react";
import { Mail, Phone, MapPin, ArrowUpRight, Send, Info } from "lucide-react";

const initial = { name: "", email: "", phone: "", address: "", service: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initial);
  const [attempted, setAttempted] = useState(false);
  const [notice, setNotice] = useState("");
  const update = (event) => setForm({ ...form, [event.target.name]: event.target.value });
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
  const errors = {
    name: !form.name.trim(),
    email: !validEmail,
    message: !form.message.trim(),
    service: !form.service,
  };
  const submit = (event) => {
    event.preventDefault();
    setAttempted(true);
    if (Object.values(errors).some(Boolean)) {
      setNotice("Please complete the required fields with valid information.");
      return;
    }
    setNotice("Your information has been validated in this browser, but it has not been sent. This website does not yet have a form backend. Please email support@tiebackconstruction.com to contact our team.");
  };
  return (
    <>
      <section className="page-hero contact-hero" style={{ backgroundImage: "linear-gradient(90deg, rgba(9,35,61,.9), rgba(9,35,61,.48)), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=85')" }}>
        <div className="container page-hero-content"><div className="eyebrow eyebrow-light"><span /> CONTACT TIEBACK</div><h1>Let's get your property <em>moving forward.</em></h1><p>Share a little about your project or service needs. Our team would be glad to hear from you.</p><div className="breadcrumb"><a href="/">Home</a><span>/</span> Contact Us</div></div>
      </section>

      <section className="section-pad contact-main">
        <div className="container contact-layout">
          <aside className="contact-aside">
            <div className="eyebrow"><span /> GET IN TOUCH</div><h2>We’re ready to <em>listen.</em></h2><p className="aside-intro">Reach out by phone or email, or send a message using the form. We’ll have the information needed to understand your request.</p>
            <a className="contact-info-card" href="mailto:support@tiebackconstruction.com"><span className="contact-info-icon"><Mail /></span><span><small>EMAIL US</small><strong>support@tiebackconstruction.com</strong></span><ArrowUpRight size={17} /></a>
            <a className="contact-info-card" href="tel:+15165187361"><span className="contact-info-icon"><Phone /></span><span><small>CALL US</small><strong>+1 (516) 518-7361</strong></span><ArrowUpRight size={17} /></a>
            <div className="service-area-note"><MapPin size={19} /><div><strong>Service area</strong><p>New York City, NY and surrounding areas. This indicates a service area, not a physical office address.</p></div></div>
          </aside>

          <div className="contact-form-wrap">
            <div className="form-heading"><h2>Tell us about your needs</h2><p>Fields marked with an asterisk (*) are required.</p></div>
            <form onSubmit={submit} noValidate>
              <div className="form-grid">
                <label>Full Name *<input name="name" value={form.name} onChange={update} placeholder="Your full name" autoComplete="name" />{attempted && errors.name && <small className="field-error">Please enter your name.</small>}</label>
                <label>Email Address *<input name="email" type="email" value={form.email} onChange={update} placeholder="you@example.com" autoComplete="email" />{attempted && errors.email && <small className="field-error">Enter a valid email address.</small>}</label>
                <label>Phone Number<input name="phone" type="tel" value={form.phone} onChange={update} placeholder="+1 (000) 000-0000" autoComplete="tel" /></label>
                <label>Property Address<input name="address" value={form.address} onChange={update} placeholder="Property street, city, state" autoComplete="street-address" /></label>
                <label className="full-field">Service Needed *<select name="service" value={form.service} onChange={update}><option value="">Select a service</option><option>Property Maintenance</option><option>Property Preservation</option><option>Property Turnover / Make-Ready</option><option>Other / Not Sure</option></select>{attempted && errors.service && <small className="field-error">Please select a service.</small>}</label>
                <label className="full-field">Message *<textarea name="message" rows="5" value={form.message} onChange={update} placeholder="Tell us a little about the work needed..." />{attempted && errors.message && <small className="field-error">Please enter a message.</small>}</label>
              </div>
              <button type="submit" className="button button-primary submit-button">Submit Inquiry <Send size={16} /></button>
              {notice && <div className={Object.values(errors).some(Boolean) && attempted ? "form-notice error-notice" : "form-notice"} role="status"><Info size={18} /><span>{notice}</span></div>}
              <p className="form-disclaimer">Frontend form only: submissions are not transmitted or stored. A form backend must be connected before this form can receive messages.</p>
            </form>
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="container map-heading"><div><div className="eyebrow"><span /> WHERE WE WORK</div><h2>Our Service Area – <em>New York City, NY</em></h2></div><p>Map shows the general service area only. It does not identify a company office.</p></div>
        <div className="map-frame"><iframe title="Map showing New York City service area" src="https://www.openstreetmap.org/export/embed.html?bbox=-74.10%2C40.60%2C-73.70%2C40.88&layer=mapnik&marker=40.7128%2C-74.0060" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
        <div className="container map-caption"><MapPin size={16} /> New York City, New York — general service area</div>
      </section>
    </>
  );
}