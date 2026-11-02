const allowedServices = new Set([
  "Property Maintenance",
  "Property Preservation",
  "General Property Services",
  "Other / Not Sure",
]);

function clean(value, maxLength = 4000) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed." });
  }

  const body = typeof req.body === "string" ? (() => {
    try { return JSON.parse(req.body); } catch { return {}; }
  })() : (req.body || {});

  // Honeypot: silently accept automated submissions without forwarding them.
  if (clean(body.website, 200)) {
    return res.status(200).json({ ok: true });
  }

  const name = clean(body.name, 100);
  const company = clean(body.company, 150);
  const email = clean(body.email, 200);
  const phone = clean(body.phone, 40);
  const address = clean(body.address, 250);
  const service = clean(body.service, 100);
  const message = clean(body.message, 4000);

  const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!name || !emailIsValid || !allowedServices.has(service) || !message) {
    return res.status(400).json({ error: "Please provide your name, a valid email, a service selection, and a message." });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL || "support@tiebackconstruction.com";

  if (!apiKey || !from) {
    console.error("Contact form is not configured: set RESEND_API_KEY and CONTACT_FROM_EMAIL.");
    return res.status(503).json({ error: "The contact form is temporarily unavailable. Please email or call our team directly." });
  }

  const fields = [
    ["Name", name],
    ["Company", company || "Not provided"],
    ["Email", email],
    ["Phone", phone || "Not provided"],
    ["Property address", address || "Not provided"],
    ["Service requested", service],
    ["Message", message],
  ];

  const htmlRows = fields.map(([label, value]) => `
    <tr>
      <th align="left" style="padding:10px 12px;border-bottom:1px solid #e6edf3;color:#526174;font-size:13px;vertical-align:top;white-space:nowrap;">${escapeHtml(label)}</th>
      <td style="padding:10px 12px;border-bottom:1px solid #e6edf3;color:#263445;font-size:13px;line-height:1.6;white-space:pre-wrap;">${escapeHtml(value)}</td>
    </tr>
  `).join("");

  const text = fields.map(([label, value]) => `${label}:\n${value}`).join("\n\n");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Website inquiry: ${service} — ${name}`,
        text,
        html: `
          <div style="font-family:Arial,sans-serif;color:#263445;max-width:720px;margin:0 auto;">
            <div style="background:#123B65;padding:22px 26px;color:#fff;">
              <div style="font-size:18px;font-weight:700;letter-spacing:2px;">TIEBACK CONSTRUCTION</div>
              <div style="font-size:12px;margin-top:6px;color:#d8e7f5;">New website inquiry</div>
            </div>
            <div style="padding:22px 8px;">
              <table style="width:100%;border-collapse:collapse;">${htmlRows}</table>
            </div>
          </div>
        `,
      }),
    });

    if (!response.ok) {
      const details = await response.text();
      console.error("Resend email delivery failed:", response.status, details.slice(0, 500));
      return res.status(502).json({ error: "We couldn't deliver your inquiry. Please email or call our team directly." });
    }

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Contact form delivery error:", error);
    return res.status(500).json({ error: "We couldn't send your inquiry. Please email or call our team directly." });
  }
}
