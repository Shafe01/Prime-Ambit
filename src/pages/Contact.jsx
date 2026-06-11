import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import contactHero from "../assets/images/contact_hero.png";

const fieldLine = "border-b border-[#AEB7B8]";

const revealUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const staggerGroup = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.09 },
  },
};

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

      <main className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-7 px-4 pb-8 pt-[112px] sm:px-6 md:gap-[45px] md:px-[67px] md:pb-[45px] md:pt-[157px]">
        <section className="grid w-full gap-7 bg-white p-4 sm:p-6 md:p-[45px] min-[1340px]:grid-cols-[1.1fr_0.9fr] min-[1340px]:gap-[48px]">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-[min(78vw,390px)] w-full max-w-full bg-[#2A394A] bg-cover bg-center bg-no-repeat sm:h-[420px] min-[1340px]:h-[650px] min-[1340px]:w-[640px]"
            style={{ 
              background: `url(${contactHero}) lightgray 50% / cover no-repeat`,
            }}
          />

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex w-full max-w-full flex-col pt-0 min-[1340px]:h-[651.613px] min-[1340px]:w-[524.904px]"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="mb-3 flex h-auto w-full flex-col justify-center text-[30px] font-normal leading-9 text-[#0C0A08] sm:text-[34px] sm:leading-10 min-[1340px]:mb-4 min-[1340px]:h-[43.045px] min-[1340px]:w-[218.303px] min-[1340px]:text-[36.65px] min-[1340px]:leading-[40px]"
              style={{ letterSpacing: "-0.01px" }}
            >
              Get in touch
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.18, ease: "easeOut" }}
              className="m-0 flex h-auto w-full max-w-full flex-col justify-center text-[17px] font-light leading-6 text-[#132528] sm:text-[19px] min-[1340px]:h-[21.522px] min-[1340px]:w-[524.904px] min-[1340px]:text-[22.65px] min-[1340px]:leading-[20px]"
            >
              Send us a message and we will reach out to you!
            </motion.p>

            <motion.form
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerGroup}
              className="mt-8 flex flex-grow flex-col gap-[14px] sm:mt-10 min-[1340px]:mt-12"
              onSubmit={handleSubmit}
            >
              <motion.input
                variants={revealUp}
                value={form.name}
                onChange={updateForm("name")}
                placeholder="Name"
                className={`h-[34px] w-full bg-transparent text-[13px] font-light text-black outline-none placeholder:text-[#2A394A] ${fieldLine}`}
              />
              <motion.input
                variants={revealUp}
                type="email"
                value={form.email}
                onChange={updateForm("email")}
                placeholder="Email address"
                className={`h-[34px] w-full bg-transparent text-[13px] font-light text-black outline-none placeholder:text-[#2A394A] ${fieldLine}`}
              />
              <motion.input
                variants={revealUp}
                value={form.phone}
                onChange={updateForm("phone")}
                placeholder="Phone number"
                className={`h-[34px] w-full bg-transparent text-[13px] font-light text-black outline-none placeholder:text-[#2A394A] ${fieldLine}`}
              />

              <motion.div variants={revealUp} className={`relative h-[34px] ${fieldLine}`}>
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
              </motion.div>

              <motion.div variants={revealUp} className={`relative h-[34px] ${fieldLine}`}>
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
              </motion.div>

              <motion.div variants={revealUp} className="mt-2 flex flex-col gap-2">
                <label className="text-[13px] font-light text-[#2A394A]">Message</label>
                <textarea
                  value={form.message}
                  onChange={updateForm("message")}
                  className="h-[140px] w-full resize-none border-0 border-b border-[#AEB7B8] bg-[#F3F6FA] p-3 text-[13px] font-light text-black outline-none placeholder:text-[#2A394A] sm:h-[156px] lg:h-[168px]"
                />
              </motion.div>

              <motion.div variants={revealUp} className="mt-2 flex min-h-[55px] flex-col items-start gap-2 pt-4 min-[1340px]:mt-auto">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.03 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className="flex h-[40px] w-[135.387px] items-center justify-center gap-[10px] rounded-[16px] bg-[#509AAF] text-center font-['Inter'] text-[14px] font-normal capitalize leading-[120%] text-[#000] tracking-[-0.56px] transition hover:bg-[#437f91] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? "Sending" : "Submit"}
                </motion.button>
                <p
                  className={`m-0 min-h-[16px] text-[12px] leading-[16px] ${
                    status.type === "success" ? "text-[#2A7A53]" : "text-[#8A2C2C]"
                  }`}
                >
                  {status.text}
                </p>
              </motion.div>
            </motion.form>
          </motion.div>
        </section>

        <section className="grid w-full gap-6 md:gap-[50px] lg:grid-cols-2">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex min-h-[292px] flex-col items-start justify-center bg-[#2A394A] px-5 py-8 text-white sm:px-8 md:min-h-[347px] md:px-[45px] md:py-10"
          >
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="m-0 max-w-[540px] text-[25px] font-normal leading-[31px] sm:text-[28px] sm:leading-[34px] md:text-[36.65px] md:leading-[38px]"
            >
              Schedule a Meeting to Discuss Your Project in Detail.
            </motion.h2>
            <p className="mb-7 mt-6 max-w-[570px] text-[13px] font-light leading-[160.5%] text-white/80 md:text-[14px]">
              Book a call using the calendar below and connect 1:1 with our
              team. We'll walk through your requirements, address your
              questions, and work with you to find <br className="hidden md:block" /> the best solution.
            </p>
            <motion.a
              href="https://calendly.com/connect-primeambit/30min"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="flex h-[40px] w-[134.38px] items-center justify-center gap-[10px] rounded-[16px] bg-[#509AAF] text-center font-['Inter'] text-[14px] font-normal capitalize leading-[120%] text-[#000] no-underline tracking-[-0.56px] transition hover:bg-[#437f91]"
            >
              Schedule a Call
            </motion.a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex min-h-[292px] flex-col justify-center bg-[#2A394A] px-5 py-8 text-white sm:px-8 md:min-h-[347px] md:px-[45px] md:py-10"
          >
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="m-0 text-[25px] font-normal leading-[31px] sm:text-[28px] sm:leading-[34px] md:text-[36.65px] md:leading-[38px]"
            >
              You can reach us here.
            </motion.h2>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerGroup}
              className="mt-8 flex flex-col gap-6"
            >
              {contactItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.icon === "pin" ? "_blank" : undefined}
                  rel={item.icon === "pin" ? "noopener noreferrer" : undefined}
                  variants={revealUp}
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
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
