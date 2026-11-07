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

const INPUT_CLASSES =
  "w-full rounded-[9px] border border-line bg-white px-3.5 py-3 text-ink outline-none placeholder:text-[#a7b5c3] focus:border-mint focus:ring-3 focus:ring-mint/10";

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
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <div id="book">
            <h2 className="mb-3 text-[clamp(2rem,4vw,3.8rem)] font-bold text-ink">
              Book a meeting
            </h2>
            <p className="mb-6 text-muted">
              Pick a time for a focused 30-minute conversation.
            </p>
            <div className="rounded-2xl border border-dashed border-[#b5c6c2] bg-soft p-8">
              <span className="grid h-[46px] w-[46px] place-items-center rounded-xl bg-[#e5faf3] text-mint">
                <IconAI width="24" height="24" />
              </span>
              <h3 className="mt-6 mb-2 text-[1.15rem] font-semibold text-ink">
                Ready to discuss your project?
              </h3>
              <p className="mb-5 text-muted">
                Send us a message and our team will follow up with the right
                next step.
              </p>
              <Button href={`mailto:${CONTACT_EMAIL}`}>
                Email us instead <IconArrow width="15" />
              </Button>
            </div>

            <div className="mt-8 grid gap-3">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-center gap-3 text-[0.9rem] text-muted transition-colors hover:text-ink"
              >
                <IconMail width="18" className="shrink-0 text-mint" />
                {CONTACT_EMAIL}
              </a>
              <a
                href={`tel:${CONTACT_PHONE}`}
                className="flex items-center gap-3 text-[0.9rem] text-muted transition-colors hover:text-ink"
              >
                <IconPhone width="18" className="shrink-0 text-mint" />
                {CONTACT_PHONE}
              </a>
              <span className="flex items-center gap-3 text-[0.9rem] text-muted">
                <IconPin width="18" className="shrink-0 text-mint" />
                {COMPANY_ADDRESS}
              </span>
            </div>
          </div>

          <div
            id="form"
            className="rounded-2xl border border-line bg-white p-6 shadow-card sm:p-8"
          >
            <h2 className="mb-6 text-[clamp(2rem,4vw,3.8rem)] font-bold text-ink">
              Send a message
            </h2>
            <form onSubmit={submit} className="grid gap-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label className="grid gap-1.5 text-[0.8rem] font-semibold text-ink">
                  Name
                  <input
                    required
                    value={form.name}
                    onChange={update("name")}
                    placeholder="Your name"
                    className={INPUT_CLASSES}
                  />
                </label>
                <label className="grid gap-1.5 text-[0.8rem] font-semibold text-ink">
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
                <label className="grid gap-1.5 text-[0.8rem] font-semibold text-ink">
                  Service
                  <div className="relative">
                    <button
                      type="button"
                      className={`flex w-full items-center justify-between gap-3 rounded-[10px] border bg-white px-3.5 py-3 text-left text-[0.9rem] font-normal text-ink transition ${
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
                      className={`absolute top-[calc(100%+8px)] right-0 left-0 z-20 rounded-xl border border-line bg-white p-2 shadow-dropdown transition-all duration-200 ${
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
                              ? "bg-[#e5faf3] text-mint"
                              : "bg-transparent text-ink hover:bg-[#e5faf3] hover:text-mint"
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

                <label className="grid gap-1.5 text-[0.8rem] font-semibold text-ink">
                  Budget
                  <input
                    type="text"
                    value={form.budget}
                    onChange={update("budget")}
                    placeholder="€ / $  e.g. 2,000 - 10,000"
                    className={INPUT_CLASSES}
                  />
                </label>
              </div>

              {form.service === "Other / custom service" && (
                <label className="grid gap-1.5 text-[0.8rem] font-semibold text-ink">
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

              <label className="grid gap-1.5 text-[0.8rem] font-semibold text-ink">
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
                className="inline-flex items-center justify-center gap-2.5 rounded-full border border-transparent bg-mint px-[1.15rem] py-[0.82rem] font-semibold text-white transition duration-250 ease-out hover:-translate-y-0.5 hover:shadow-btn disabled:opacity-60"
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

      <Section grey>
        <div className="grid grid-cols-1 items-center gap-6 rounded-3xl border border-line bg-linear-to-br from-white to-[#eafbf5] p-6 shadow-card md:grid-cols-[0.8fr_1.2fr] md:gap-12 md:p-10">
          <div>
            <span className="eyebrow">STAY CONNECTED</span>
            <h2 className="mb-2 text-[clamp(2rem,4vw,3.8rem)] font-bold text-ink">
              Find us online.
            </h2>
            <p className="mb-0 max-w-[390px] text-muted">
              Follow Techlifai for practical ideas, new launches and digital
              growth notes.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {SOCIAL_ITEMS.map(([name, SocialIcon]) => (
              <a
                className="flex items-center gap-3 rounded-[14px] border border-mint/18 bg-white/82 px-4 py-3.5 font-semibold text-ink transition duration-200 hover:-translate-y-1 hover:border-mint hover:shadow-[0_10px_24px_rgba(0,179,134,0.12)]"
                key={name}
                href={SOCIAL_LINKS[name]}
                target="_blank"
                rel="noreferrer"
                aria-label={`Follow Techlifai on ${name}`}
              >
                <span className="grid h-[34px] w-[34px] place-items-center rounded-[10px] bg-[#e5faf3] text-mint">
                  <SocialIcon width="20" height="20" />
                </span>
                <span>{name}</span>
                <IconArrow
                  width="14"
                  height="14"
                  className="ml-auto text-mint"
                />
              </a>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
