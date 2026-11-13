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

const INPUT_CLASSES =
  "w-full rounded-lg border border-line bg-paper px-3.5 py-3 font-sans text-[0.95rem] normal-case tracking-normal text-ink outline-none placeholder:text-muted focus:border-mint focus:ring-3 focus:ring-mint/10";

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
      setStatus("Thanks, your message has been sent successfully.");
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
        eyebrow="Contact"
        title="Let's talk."
        intro="We reply within one business day."
      />

      <Section>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <div id="book" className="scroll-mt-24">
            <h2 className="mb-6 text-[clamp(2rem,4vw,3.4rem)] font-medium">
              Book a call
            </h2>
            <p className="mb-8 max-w-[360px] text-muted">
              30 minutes. No pitch, just a useful conversation.
            </p>
            <Button href={`mailto:${CONTACT_EMAIL}`}>
              Email us <IconArrow width="15" />
            </Button>

            <div className="mt-12 grid gap-4 border-t border-line pt-8">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-center gap-3 text-[0.95rem] text-muted transition-colors hover:text-ink"
              >
                <IconMail width="18" className="shrink-0 text-mint" />
                {CONTACT_EMAIL}
              </a>
              <a
                href={`tel:${CONTACT_PHONE}`}
                className="flex items-center gap-3 text-[0.95rem] text-muted transition-colors hover:text-ink"
              >
                <IconPhone width="18" className="shrink-0 text-mint" />
                {CONTACT_PHONE}
              </a>
              <span className="flex items-center gap-3 text-[0.95rem] text-muted">
                <IconPin width="18" className="shrink-0 text-mint" />
                {COMPANY_ADDRESS}
              </span>
            </div>
          </div>

          <div
            id="form"
            className="scroll-mt-24 rounded-2xl border border-line bg-soft p-6 sm:p-8"
          >
            <h2 className="mb-8 text-[clamp(2rem,4vw,3.4rem)] font-medium">
              Send a message
            </h2>
            <form onSubmit={submit} className="grid gap-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label className="grid gap-1.5 mono-label text-muted">
                  Name
                  <input
                    required
                    value={form.name}
                    onChange={update("name")}
                    placeholder="Your name"
                    className={INPUT_CLASSES}
                  />
                </label>
                <label className="grid gap-1.5 mono-label text-muted">
                  Email
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={update("email")}
                    placeholder="you@company.com"
                    className={INPUT_CLASSES}
                  />
                </label>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label className="grid gap-1.5 mono-label text-muted">
                  Service
                  <div className="relative">
                    <button
                      type="button"
                      className={`flex w-full items-center justify-between gap-3 rounded-lg border bg-paper px-3.5 py-3 text-left text-[0.95rem] font-normal normal-case tracking-normal text-ink transition ${
                        serviceOpen
                          ? "border-mint ring-3 ring-mint/10"
                          : "border-line hover:border-mint hover:ring-3 hover:ring-mint/10"
                      }`}
                      onClick={() => setServiceOpen((open) => !open)}
                      aria-expanded={serviceOpen}
                    >
                      <span>{form.service}</span>
                      <span
                        className={`text-[1.1rem] leading-none text-muted transition-transform duration-200 ${
                          serviceOpen ? "rotate-180" : ""
                        }`}
                      >
                        ⌄
                      </span>
                    </button>

                    <div
                      className={`absolute top-[calc(100%+8px)] right-0 left-0 z-20 rounded-xl border border-line bg-paper p-2 shadow-dropdown transition-all duration-200 ${
                        serviceOpen
                          ? "visible translate-y-0 opacity-100"
                          : "invisible translate-y-2 opacity-0"
                      }`}
                    >
                      {serviceOptions.map((option) => (
                        <button
                          type="button"
                          className={`flex w-full rounded-lg px-3 py-2.5 text-left text-[0.86rem] font-normal transition-colors ${
                            form.service === option
                              ? "bg-soft text-mint"
                              : "bg-transparent text-ink hover:bg-soft hover:text-mint"
                          }`}
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

                <label className="grid gap-1.5 mono-label text-muted">
                  Budget
                  <input
                    type="text"
                    value={form.budget}
                    onChange={update("budget")}
                    placeholder="$ / PKR, e.g. 2,000 - 10,000"
                    className={INPUT_CLASSES}
                  />
                </label>
              </div>

              {form.service === "Other / custom service" && (
                <label className="grid gap-1.5 mono-label text-muted">
                  What service do you need?
                  <input
                    required
                    value={form.customService}
                    onChange={update("customService")}
                    placeholder="Describe your service"
                    className={INPUT_CLASSES}
                  />
                </label>
              )}

              <label className="grid gap-1.5 mono-label text-muted">
                Project details
                <textarea
                  required
                  value={form.message}
                  onChange={update("message")}
                  placeholder="What are you trying to achieve?"
                  className={`${INPUT_CLASSES} min-h-[150px] resize-y font-normal`}
                />
              </label>

              <button
                className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-mint bg-mint px-6 py-3.5 text-[0.92rem] font-medium text-on-accent transition-opacity hover:opacity-90 disabled:opacity-60"
                type="submit"
                disabled={sending}
              >
                {sending ? "Sending..." : "Send message"}{" "}
                <IconArrow width="15" />
              </button>

              {status && (
                <p className="mb-0 text-[0.85rem] text-mint" role="status">
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="flex flex-wrap gap-3 border-t border-line pt-10">
          {SOCIAL_ITEMS.map(([name, SocialIcon]) => (
            <a
              className="group flex items-center gap-2.5 rounded-full border border-line px-4 py-2.5 text-[0.9rem] text-muted transition-colors hover:border-ink hover:text-ink"
              key={name}
              href={SOCIAL_LINKS[name]}
              target="_blank"
              rel="noreferrer"
              aria-label={`Follow Techlifai on ${name}`}
            >
              <SocialIcon width="16" height="16" />
              {name}
            </a>
          ))}
        </div>
      </Section>
    </>
  );
}
