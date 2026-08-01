import { useRef, useState } from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import { sendEmail } from "../../utils/email";

export default function Contact() {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
  await sendEmail(form.current);

  setStatus("success");
  form.current.reset();

  setTimeout(() => {
    setStatus("");
  }, 5000);

} catch (err) {
  console.error(err);
  setStatus("error");

  setTimeout(() => {
    setStatus("");
  }, 5000);
}

setLoading(false);
  }

  return (
    <section className="contact" id="contact">

      <div className="section-title">

        <p>CONTACT</p>

        <h2>{"$ connect"}</h2>

        <p className="section-subtitle">
          Have a project, opportunity or just want to say hello?
          Feel free to reach out.
        </p>

      </div>

      <div className="contact-container">

        {/* LEFT CARD */}

        <div className="contact-info">

          <span className="contact-badge">
            ● Get In Touch
          </span>

          <h3>
            Let's Build Something Great Together.
          </h3>

          <p>
            Whether you have an idea, collaboration,
            freelance work or an opportunity,
            I'd be happy to connect.
          </p>

          <div className="contact-list">

            <a
              href="mailto:pranavjha79924@gmail.com"
              className="contact-item"
            >
              <FaEnvelope />
              <span>pranavjha79924@gmail.com</span>
            </a>

            <div className="contact-item">
              <FaMapMarkerAlt />
              <span> 🇮🇳 Chennai, India</span>
            </div>

            <a
              href="https://github.com/Pranav-Techie"
              target="_blank"
              rel="noreferrer"
              className="contact-item"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/pranav-jha-039688300/"
              target="_blank"
              rel="noreferrer"
              className="contact-item"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>

          </div>

        </div>

        {/* RIGHT CARD */}

        <form
          ref={form}
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <div className="form-row">

            <div className="input-group">

              <label>
                Your Name
                <span className="required">*</span>
              </label>

              <input
                type="text"
                name="from_name"
                required
              />

            </div>

            <div className="input-group">

              <label>
                Your Email
                <span className="required">*</span>
              </label>

              <input
                type="email"
                name="from_email"
                required
              />

            </div>

          </div>

          <div className="input-group">

            <label>
              Subject
              <span className="required">*</span>
            </label>

            <input
              type="text"
              name="subject"
              required
            />

          </div>

                    <div className="input-group">

            <label>
              Message
              <span className="required">*</span>
            </label>

            <textarea
              name="message"
              rows="6"
              required
            />

          </div>

          <button
            type="submit"
            disabled={loading}
          >
            {loading ? (
              "Sending..."
            ) : (
              <>
                <FaPaperPlane />
                Send Message
              </>
            )}
          </button>

          {status === "success" && (
            <p className="success-msg">
              ✅ Thanks! Your message has been sent successfully.
            </p>
          )}

          {status === "error" && (
            <p className="error-msg">
              ❌ Something went wrong. Please try again.
            </p>
          )}

        </form>

      </div>

    </section>
  );
}