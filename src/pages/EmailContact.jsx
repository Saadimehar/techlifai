import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Helmet } from "react-helmet-async";
import { Button, PageHeader, Section } from "../components/Site.jsx";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  COMPANY_ADDRESS,
  EMAILJS,
  SERVICES,
  SOCIAL_LINKS,
} from "../data.js";
import {
  IconAI,
  IconArrow,
  IconFacebook,
  IconInsta,
  IconLinkedin,
  IconMail,
  IconPhone,
  IconPin,
  IconTikTok,
  IconX,
} from "../icons.jsx";

const SOCIAL_ITEMS = [
  ["LinkedIn", IconLinkedin],
  ["Instagram", IconInsta],
  ["Facebook", IconFacebook],
  ["X", IconX],
  ["TikTok", IconTikTok],
];

export default function EmailContact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "Web Development",
    customService: "",
    budget: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const serviceOptions = [
    ...SERVICES.map((service) => service.title),
    "Other / custom service",
  ];

  const update = (key) => (event) =>
    setForm((current) => ({ ...current, [key]: event.target.value }));

  const submit = async (event) => {
    event.preventDefault();
    setSending(true);
    setStatus("Sending your message...");

    try {
      await emailjs.send(
        EMAILJS.SERVICE_ID,
        EMAILJS.TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          service:
            form.service === "Other / custom service"
              ? form.customService
              : form.service,
          budget: form.budget,
          message: form.message,
          to_email: CONTACT_EMAIL,
        },
        { publicKey: EMAILJS.PUBLIC_KEY },
      );
      setStatus("Thanks - your message has been sent successfully.");
      setForm({
        name: "",
        email: "",
        service: "Web Development",
        customService: "",
        budget: "",
        message: "",
      });
    } catch (error) {
      setStatus(
        "We could not send your message right now. Please email us directly.",
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact | Techlifai</title>
        <meta
          name="description"
          content="Book a meeting or send a project enquiry to Techlifai."
        />
      </Helmet>
      <PageHeader
        eyebrow="CONTACT"
        title="Let’s talk about what’s next."
        intro="Tell us what you’re working towards. We’ll reply within one business day with a useful next step."
      />
      <Section>
        <div className="contact-grid">
          <div id="book">
            <h2>Book a meeting</h2>
            <p>Pick a time for a focused 30-minute conversation.</p>
            <div className="booking-placeholder">
              <span className="icon-box">
                <IconAI />
              </span>
              <h3>Ready to discuss your project?</h3>
              <p>
                Send us a message and our team will follow up with the right
                next step.
              </p>
              <Button href={`mailto:${CONTACT_EMAIL}`}>
                Email us instead <IconArrow width="15" />
              </Button>
            </div>
            <div className="contact-details">
              <a href={`mailto:${CONTACT_EMAIL}`}>
                <IconMail width="18" />
                {CONTACT_EMAIL}
              </a>
              <a href={`tel:${CONTACT_PHONE}`}>
                <IconPhone width="18" />
                {CONTACT_PHONE}
              </a>
              <span>
                <IconPin width="18" />
                {COMPANY_ADDRESS}
              </span>
            </div>
          </div>

          <div id="form" className="form-card">
            <h2>Send a message</h2>
            <form onSubmit={submit}>
              <div className="form-row">
                <label>
                  Name
                  <input
                    required
                    value={form.name}
                    onChange={update("name")}
                    placeholder="Your name"
                  />
                </label>
                <label>
                  Email
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={update("email")}
                    placeholder="you@company.com"
                  />
                </label>
              </div>
              <div className="form-row">
                <label>
                  Service
                  <div
                    className={`contact-service-menu${serviceOpen ? " expanded" : ""}`}
                  >
                    <button
                      type="button"
                      className="contact-service-trigger"
                      onClick={() => setServiceOpen((open) => !open)}
                      aria-expanded={serviceOpen}
                    >
                      <span>{form.service}</span>
                      <span className="contact-service-chevron">⌄</span>
                    </button>
                    <div className="contact-service-dropdown">
                      {serviceOptions.map((option) => (
                        <button
                          type="button"
                          className={form.service === option ? "selected" : ""}
                          key={option}
                          onClick={() => {
                            setForm((current) => ({
                              ...current,
                              service: option,
                            }));
                            setServiceOpen(false);
                          }}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                </label>
                <label>
                  Budget
                  <input
                    type="text"
                    value={form.budget}
                    onChange={update("budget")}
                    placeholder="€ / $  e.g. 2,000 - 10,000"
                  />
                </label>
              </div>
              {form.service === "Other / custom service" && (
                <label>
                  What service do you need?
                  <input
                    required
                    value={form.customService}
                    onChange={update("customService")}
                    placeholder="Describe your service"
                  />
                </label>
              )}
              <label>
                Project details
                <textarea
                  required
                  value={form.message}
                  onChange={update("message")}
                  placeholder="What are you trying to achieve?"
                />
              </label>
              <button
                className="btn btn-primary"
                type="submit"
                disabled={sending}
              >
                {sending ? "Sending..." : "Send message"}{" "}
                <IconArrow width="15" />
              </button>
              {status && (
                <p className="form-status" role="status">
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </Section>
      <Section className="grey">
        <div className="contact-social-panel">
          <div className="contact-social-copy">
            <span className="eyebrow">STAY CONNECTED</span>
            <h2>Find us online.</h2>
            <p>
              Follow Techlifai for practical ideas, new launches and digital
              growth notes.
            </p>
          </div>
          <div className="contact-social-grid">
            {SOCIAL_ITEMS.map(([name, SocialIcon]) => (
              <a
                className="contact-social-link"
                key={name}
                href={SOCIAL_LINKS[name]}
                target="_blank"
                rel="noreferrer"
                aria-label={`Follow Techlifai on ${name}`}
              >
                <span className="contact-social-icon">
                  <SocialIcon width="20" height="20" />
                </span>
                <span>{name}</span>
                <IconArrow width="14" height="14" />
              </a>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
