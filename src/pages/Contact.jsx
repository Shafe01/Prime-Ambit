import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import contactHero from "../assets/images/contact_hero.png";

const fieldLine = "border-b border-[#AEB7B8]";

const contactItems = [
  {
    label: "Phone",
    value: "+91 0000 00 0000",
    href: "tel:+910000000000",
    icon: "phone",
  },
  {
    label: "Email",
    value: "connect@primeambit.com",
    href: "mailto:connect@primeambit.com",
    icon: "mail",
  },
  {
    label: "Address",
    value:
      "400-A, 4th Floor, 12 Ajit Singh House, Yusuf Sarai Commercial Complex, Near Green Park Metro Station Exit-2, New Delhi - 110016",
    href: "https://www.google.com/maps/search/?api=1&query=400-A+4th+Floor+12+Ajit+Singh+House+Yusuf+Sarai+Commercial+Complex+New+Delhi+110016",
    icon: "pin",
  },
];

function ContactIcon({ type }) {
  const common = {
    width: 32,
    height: 32,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
  };

  if (type === "phone") {
    return (
      <svg {...common} aria-hidden="true">
        <path
          d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.35 1.9.66 2.8a2 2 0 0 1-.45 2.11L8.05 9.9a16 16 0 0 0 6.05 6.05l1.27-1.27a2 2 0 0 1 2.11-.45c.9.31 1.84.53 2.8.66A2 2 0 0 1 22 16.92Z"
          stroke="#509AAF"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "mail") {
    return (
      <svg {...common} aria-hidden="true">
        <path
          d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2Z"
          stroke="#509AAF"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m22 6-10 7L2 6"
          stroke="#509AAF"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg {...common} aria-hidden="true">
      <path
        d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1 1 18 0Z"
        stroke="#509AAF"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        stroke="#509AAF"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    goals: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", text: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateForm = (key) => (event) => {
    setForm((current) => ({ ...current, [key]: event.target.value }));
  };

  const resetStatusLater = () => {
    window.setTimeout(() => setStatus({ type: "", text: "" }), 3000);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const hasAllFields = Object.values(form).every((value) => value.trim());
    if (!hasAllFields) {
      setStatus({
        type: "error",
        text: "Please enter all fields before submitting.",
      });
      resetStatusLater();
      return;
    }

    setIsSubmitting(true);
    try {
      await emailjs.send(
        "service_eseq49z",
        "template_ej3i0gx",
        form,
        "M6IiS5P0nTx7SHodD",
      );

      setStatus({
        type: "success",
        text: "Your response has been submitted successfully.",
      });
      setForm({
        name: "",
        email: "",
        phone: "",
        budget: "",
        goals: "",
        message: "",
      });
    } catch (error) {
      console.log("EmailJS error:", error);
      setStatus({ type: "error", text: "Failed to send. Try again." });
    } finally {
      setIsSubmitting(false);
      resetStatusLater();
    }
  };

  return (
    <div className="min-h-screen bg-[#509AAF] font-['Inter',sans-serif] text-[#2A394A]">
      <Header />

      <main className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-[45px] px-5 pb-[45px] pt-[126px] md:px-[67px] md:pt-[157px]">
        <section className="grid w-full bg-white p-5 md:p-[45px] lg:grid-cols-[1.1fr_0.9fr] lg:gap-[48px]">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full bg-[#2A394A]"
            style={{ 
              width: '640px',
              height: '650px',
              aspectRatio: '64/65',
              background: `url(${contactHero}) lightgray 50% / cover no-repeat`,
              maxWidth: '100%' 
            }}
          />

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex w-full flex-col pt-8 lg:pt-0"
            style={{
              width: '524.904px',
              height: '651.613px',
              maxWidth: '100%'
            }}
          >
            <h1 
              className="mb-4 font-normal text-[#0C0A08]"
              style={{
                display: 'flex',
                width: '218.303px',
                height: '43.045px',
                flexDirection: 'column',
                justifyContent: 'center',
                fontSize: '36.65px',
                lineHeight: '40px',
                letterSpacing: '-0.01px'
              }}
            >
              Get in touch
            </h1>
            <p 
              className="m-0 font-light text-[#132528]"
              style={{
                display: 'flex',
                width: '524.904px',
                height: '21.522px',
                flexDirection: 'column',
                justifyContent: 'center',
                fontSize: '22.65px',
                lineHeight: '20px',
                maxWidth: '100%'
              }}
            >
              Send us a message and we will reach out to you!
            </p>

            <form className="mt-12 flex flex-grow flex-col gap-[14px]" onSubmit={handleSubmit}>
              <input
                value={form.name}
                onChange={updateForm("name")}
                placeholder="Name"
                className={`h-[34px] w-full bg-transparent text-[13px] font-light text-black outline-none placeholder:text-[#2A394A] ${fieldLine}`}
              />
              <input
                type="email"
                value={form.email}
                onChange={updateForm("email")}
                placeholder="Email address"
                className={`h-[34px] w-full bg-transparent text-[13px] font-light text-black outline-none placeholder:text-[#2A394A] ${fieldLine}`}
              />
              <input
                value={form.phone}
                onChange={updateForm("phone")}
                placeholder="Phone number"
                className={`h-[34px] w-full bg-transparent text-[13px] font-light text-black outline-none placeholder:text-[#2A394A] ${fieldLine}`}
              />

              <div className={`relative h-[34px] ${fieldLine}`}>
                <select
                  value={form.budget}
                  onChange={updateForm("budget")}
                  className="h-full w-full appearance-none bg-transparent pr-8 text-[13px] font-light text-[#2A394A] outline-none"
                >
                  <option value="" disabled>
                    Budget
                  </option>
                  <option value="Less than $5,000">Less than $5,000</option>
                  <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                  <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                  <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                  <option value="$50,000+">$50,000+</option>
                  <option value="Not sure yet">Not sure yet</option>
                </select>
                <span className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 text-[#2A394A]">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4 6L8 10L12 6" stroke="#2A394A" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>

              <div className={`relative h-[34px] ${fieldLine}`}>
                <select
                  value={form.goals}
                  onChange={updateForm("goals")}
                  className="h-full w-full appearance-none bg-transparent pr-8 text-[13px] font-light text-[#2A394A] outline-none"
                >
                  <option value="" disabled>
                    Goals
                  </option>
                  <option value="Web or app platform">Web or app platform</option>
                  <option value="AI integration">AI integration</option>
                  <option value="Blockchain infrastructure">Blockchain infrastructure</option>
                  <option value="Web3 marketing">Web3 marketing</option>
                  <option value="Technical audit">Technical audit</option>
                  <option value="Other">Other</option>
                </select>
                <span className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 text-[#2A394A]">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4 6L8 10L12 6" stroke="#2A394A" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>

              <div className="mt-2 flex flex-col gap-2">
                <label className="text-[13px] font-light text-[#2A394A]">Message</label>
                <textarea
                  value={form.message}
                  onChange={updateForm("message")}
                  className="h-[168px] w-full resize-none border-0 border-b border-[#AEB7B8] bg-[#F3F6FA] p-3 text-[13px] font-light text-black outline-none placeholder:text-[#2A394A]"
                />
              </div>

              <div className="mt-auto flex min-h-[55px] flex-col items-start gap-2 pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex h-[40px] w-[135.387px] items-center justify-center gap-[10px] rounded-[16px] bg-[#509AAF] text-center font-['Inter'] text-[14px] font-normal capitalize leading-[120%] text-[#000] tracking-[-0.56px] transition hover:bg-[#437f91] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? "Sending" : "Submit"}
                </button>
                <p
                  className={`m-0 min-h-[16px] text-[12px] leading-[16px] ${
                    status.type === "success" ? "text-[#2A7A53]" : "text-[#8A2C2C]"
                  }`}
                >
                  {status.text}
                </p>
              </div>
            </form>
          </motion.div>
        </section>

        <section className="grid w-full gap-[50px] lg:grid-cols-2">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex min-h-[347px] flex-col items-start justify-center bg-[#2A394A] px-8 py-10 text-white md:px-[45px]"
          >
            <h2 className="m-0 max-w-[540px] text-[28px] font-normal leading-[34px] md:text-[36.65px] md:leading-[38px]">
              Schedule a Meeting to Discuss Your Project in Detail.
            </h2>
            <p className="mb-7 mt-6 max-w-[570px] text-[13px] font-light leading-[160.5%] text-white/80 md:text-[14px]">
              Book a call using the calendar below and connect 1:1 with our
              team. We'll walk through your requirements, address your
              questions, and work with you to find <br /> the best solution.
            </p>
            <a
              href="https://calendly.com/connect-primeambit/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-[40px] w-[134.38px] items-center justify-center gap-[10px] rounded-[16px] bg-[#509AAF] text-center font-['Inter'] text-[14px] font-normal capitalize leading-[120%] text-[#000] no-underline tracking-[-0.56px] transition hover:bg-[#437f91]"
            >
              Schedule a Call
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex min-h-[347px] flex-col justify-center bg-[#2A394A] px-8 py-10 text-white md:px-[45px]"
          >
            <h2 className="m-0 text-[28px] font-normal leading-[34px] md:text-[36.65px] md:leading-[38px]">
              You can reach us here.
            </h2>

            <div className="mt-8 flex flex-col gap-6">
              {contactItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.icon === "pin" ? "_blank" : undefined}
                  rel={item.icon === "pin" ? "noopener noreferrer" : undefined}
                  className="grid grid-cols-[32px_1fr] items-start gap-4 text-white no-underline"
                >
                  <div className="flex h-full items-start pt-1">
                    <ContactIcon type={item.icon} />
                  </div>
                  <span className="flex flex-col gap-1">
                    <span className="text-[13px] font-light leading-[16px] text-white/75">
                      {item.label}
                    </span>
                    <span className="text-[13px] font-normal leading-[160.5%] text-white">
                      {item.value}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
