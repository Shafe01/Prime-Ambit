import React, { useState } from "react";
import DropdownIcon from "../../assets/icons/Dropdown.svg";
import emailjs from "@emailjs/browser";

export default function ContactCTA() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [budget, setBudget] = useState("");
  const [goals, setGoals] = useState("");
  const [messageText, setMessageText] = useState("");

  // message state shown around the button
  const [status, setStatus] = useState({ type: "", text: "" });

  const handleSubmit = async () => {
    const allFilled =
      name.trim() &&
      email.trim() &&
      phone.trim() &&
      budget.trim() &&
      goals.trim() &&
      messageText.trim();

    if (allFilled) {
      try {
        await emailjs.send(
          "service_eseq49z",
          "template_ej3i0gx",
          {
            name: name,
            email: email,
            phone: phone,
            budget: budget,
            goals: goals,
            message: messageText,
          },
          "M6IiS5P0nTx7SHodD",
        );

        setStatus({
          type: "success",
          text: "Your response has been submitted, successfully! 🎉",
        });

        setName("");
        setEmail("");
        setPhone("");
        setBudget("");
        setGoals("");
        setMessageText("");
      } catch (err) {
        console.log("EmailJS error:", err);
        setStatus({
          type: "error",
          text: "Failed to send. Try again.",
        });
      }

      setTimeout(() => {
        setStatus({ type: "", text: "" });
      }, 2500);
    } else {
      setStatus({
        type: "error",
        text: "Please enter all fields before submitting!",
      });

      setTimeout(() => {
        setStatus({ type: "", text: "" });
      }, 2500);
    }
  };

  return (
    <section
      id="contact-cta"
      className="w-full min-h-[551px] lg:h-[551px] flex items-start"
      style={{
        background:
          "linear-gradient(0deg, #2A394A 4.36%, #436A75 54.35%, #509AAF 84.45%, #D6DBC7 105.87%)",
      }}
    >
      <div className="max-w-[1440px] mx-auto px-6 pt-12 md:pt-14 lg:pt-16 pb-12 lg:pb-0 flex flex-col lg:flex-row items-start justify-between w-full text-white gap-10 lg:gap-0">
        {/* LEFT TEXT */}
        <div className="flex flex-col gap-4 md:gap-5 lg:gap-6 w-full lg:w-auto">
          <h2
            className="
    text-white font-normal
    text-[22.65px] md:text-[42px]
    leading-[36px] md:leading-[46px]
    max-w-[90%] md:max-w-none
  "
            style={{ fontFamily: "Inter" }}
          >
            Your vision, our architecture backed by precision engineering. Lets
            build!
          </h2>

          <p
            className="text-[#CECECE] font-normal text-[14px] md:text-[14px] leading-[160.5%]"
            style={{
              fontFamily: "Inter",
              maxWidth: "100%",
            }}
          >
            You will get a response within 24 hours. We will explain in detail
            how we can help you fuel and grow your brand within the stated
            budget.
          </p>
        </div>

        {/* RIGHT FORM */}
        <>
          {/* selection colors and small helper styles scoped to the form */}
          <style>{`
            /* selection styling */
            #contact-cta .contact-form input::selection,
            #contact-cta .contact-form textarea::selection,
            #contact-cta .contact-form select::selection {
              background: #2A394A;
              color: #FFFFFF;
            }

            #contact-cta .contact-form select {
              color: #FFFFFF;   /* selected value text white */
            }

            #contact-cta .contact-form select option {
              background: #2A394A;  /* dropdown bg */
              color: #FFFFFF;       /* dropdown text white */
            }

            #contact-cta .contact-form select:focus {
              color: #FFFFFF;
            }
            /* ensure inputs, selects, textarea don't have default margins/padding */
            #contact-cta .contact-form input,
            #contact-cta .contact-form select,
            #contact-cta .contact-form textarea {
              margin: 0;
              padding: 0;
              background: transparent;
              color: #FFFFFF;
            }
          `}</style>

          <form
            className="contact-form flex flex-col items-start gap-[18px] md:gap-[20px] w-full lg:w-auto"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            {/* Helper to render input rows */}
            {[
              { key: "name", label: "Name", value: name, setter: setName },
              {
                key: "email",
                label: "Email address",
                value: email,
                setter: setEmail,
              },
              {
                key: "phone",
                label: "Phone number",
                value: phone,
                setter: setPhone,
              },
            ].map(({ key, label, value, setter }) => (
              <div
                key={key}
                className="flex flex-col justify-center items-start w-full lg:w-[438px] h-[30px] gap-[6.52px]"
              >
                <input
                  type="text"
                  placeholder={label}
                  value={value}
                  onChange={(e) => setter(e.target.value)}
                  className="w-full bg-transparent outline-none placeholder-white"
                  style={{
                    fontFamily: "Inter",
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: "160.5%",
                    color: "#FFFFFF",
                  }}
                />

                {/* Bottom line (SVG as requested) */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full"
                  height="1"
                  viewBox="0 0 438 1"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path d="M0 0H438V0.48H0V0Z" fill="#2A394A" />
                </svg>
              </div>
            ))}

            {/* Budget dropdown */}
            <div className="relative flex flex-col justify-center items-start w-full lg:w-[438px] h-[30px] gap-[6.52px]">
              <select
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full bg-transparent outline-none appearance-none pr-10 placeholder-white"
                style={{
                  fontFamily: "Inter",
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: "160.5%",
                  color: "#FFFFFF",
                }}
              >
                <option value="" disabled>
                  Budget
                </option>
                <option value="5k-">Less than $5,000</option>
                <option value="5k">$5000 - $10000</option>
                <option value="10k">$10000 - $25000</option>
                <option value="25k+">$25000 - $50000</option>
                <option value="50k+">$50000 - $150000</option>
                <option value="150k+">$150000+</option>
                <option value="not sure">
                  Not sure yet (Need architectural consultation first)
                </option>
              </select>

              {/* Dropdown icon positioned to the right */}
              <img
                src={DropdownIcon}
                alt="dropdown"
                style={{
                  width: "24px",
                  height: "24px",
                  position: "absolute",
                  right: 0,
                  top: "50%",
                  transform: "translateY(-50%)",
                  pointerEvents: "none",
                  objectFit: "contain",
                }}
              />

              {/* Bottom line (SVG as requested) */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-full"
                height="1"
                viewBox="0 0 438 1"
                fill="none"
                preserveAspectRatio="none"
              >
                <path d="M0 0H438V0.48H0V0Z" fill="#2A394A" />
              </svg>
            </div>

            {/* Goals dropdown */}
            <div className="relative flex flex-col justify-center items-start w-full lg:w-[438px] h-[30px] gap-[6.52px]">
              <select
                value={goals}
                onChange={(e) => setGoals(e.target.value)}
                className="w-full bg-transparent outline-none appearance-none pr-10 placeholder-white"
                style={{
                  fontFamily: "Inter",
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: "160.5%",
                  color: "#FFFFFF",
                }}
              >
                <option value="" disabled>
                  Goals
                </option>
                <option value="platform">
                  Build a coustom Web / App platform (Scalable architecture)
                </option>
                <option value="web3">
                  Design & deploy blockchain infrastructure / smart contracts
                </option>
                <option value="AI">
                  AI system integration (LLMs, automation, internal tools)
                </option>
                <option value="ERP">ERP / enterprise system development</option>
                <option value="rebuild">
                  Upgrade & re-architect existing product
                </option>
                <option value="MVP">MVP build for funded startup</option>
                <option value="API">Protocol / API development</option>
                <option value="meta">Metaverse Development</option>
                <option value="audit">
                  Technical audit & architecture consultation
                </option>
                <option value="other">
                  Other (please type your requirement)
                </option>
              </select>

              <img
                src={DropdownIcon}
                alt="dropdown"
                style={{
                  width: "24px",
                  height: "24px",
                  position: "absolute",
                  right: 0,
                  top: "50%",
                  transform: "translateY(-50%)",
                  pointerEvents: "none",
                  objectFit: "contain",
                }}
              />

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-full"
                height="1"
                viewBox="0 0 438 1"
                fill="none"
                preserveAspectRatio="none"
              >
                <path d="M0 0H438V0.48H0V0Z" fill="#2A394A" />
              </svg>
            </div>

            {/* Message textarea */}
            <div className="flex flex-col justify-center items-start w-full lg:w-[438px] min-h-[90px] gap-[6.52px]">
              <textarea
                placeholder="Message"
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                className="w-full bg-transparent outline-none placeholder-white resize-none"
                style={{
                  fontFamily: "Inter",
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: "160.5%",
                  color: "#FFFFFF",
                  height: "90px",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  paddingLeft: "0px",
                }}
              />

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-full"
                height="1"
                viewBox="0 0 438 1"
                fill="none"
                preserveAspectRatio="none"
              >
                <path d="M0 0H438V0.48H0V0Z" fill="#509AAF" />
              </svg>
            </div>

            {/* Submit */}
            <div className="pt-4 md:pt-5 lg:pt-6 flex flex-col items-center w-full">
              {/* message ABOVE button (fixed height so button never shifts) */}
              <div
                style={{
                  height: "18px", // prevents layout shift
                  marginBottom: "6px",
                  fontFamily: "Inter",
                  fontSize: "13px",
                  lineHeight: "120%",
                  letterSpacing: "0.2px",
                  textAlign: "center",
                  transition: "opacity .25s ease",
                  opacity: status.text ? 1 : 0,
                  color:
                    status.type === "success"
                      ? "#D6DBC7" // success palette
                      : status.type === "error"
                        ? "#CECECE" // error palette
                        : "transparent",
                }}
              >
                {status.text || "placeholder"}
              </div>

              <button
                type="submit"
                style={{
                  width: "116.452px",
                  height: "35px",
                  borderRadius: "16px",
                  background: "#509AAF",
                  fontFamily: "Inter",
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: "120%",
                  letterSpacing: "-0.56px",
                  textTransform: "capitalize",
                  color: "#FFFFFF",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Submit
              </button>
            </div>
          </form>
        </>
      </div>

      {/* Desktop-specific styles */}
      <style jsx>{`
        @media (min-width: 1024px) {
          #contact-cta > div > div:first-child {
            width: 656.258px !important;
          }
          #contact-cta > div > div:first-child h2 {
            width: 656.258px !important;
            font-size: 59.3px !important;
            line-height: 60px !important;
            max-width: none !important;
          }
          #contact-cta > div > div:first-child p {
            width: 656.258px !important;
            max-width: none !important;
          }
          #contact-cta .contact-form {
            width: 438.001px !important;
            height: 420px !important;
            margin-right: 120px !important;
          }
        }
      `}</style>
    </section>
  );
}
