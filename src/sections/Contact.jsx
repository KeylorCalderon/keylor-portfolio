import { useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import emailjs from "@emailjs/browser";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import "./Contact.css";

export default function Contact() {
  const { t } = useLanguage();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.send(
        "service_imkd07y",
        "template_5hdzked",
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "UrPdoSNpKccQgPtqe",
      );

      alert("Message sent ✔");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      alert("Failed to send message");
      console.error(err);
    }
  };

  return (
    <section id="contact" className="section-container-contact">
      <header className="contact-container">
        <h2>{t.contact.title}</h2>
        <p>{t.contact.subtitle}</p>
      </header>

      <div className="info-container">
        <div className="info-personal">
          <h3>{t.contact.infoTitle}</h3>
          <p>{t.contact.infoText}</p>
          <br />
          <div className="contact-links">
            <a
              className="contact-button"
              href="https://www.linkedin.com/in/keylor-calderon/"
              target="_blank"
            >
              <FaLinkedin className="contact-item-logo" size={40} />
              <span>LinkedIn</span>
            </a>
            <a
              className="contact-button"
              href="https://github.com/KeylorCalderon"
              target="_blank"
            >
              <FaGithub className="contact-button-extra-logo-git" size={38} />
              <span className="contact-button-extra">GitHub</span>
            </a>
            <a
              className="contact-button"
              href="mailto:keylor.calderon.dev@gmail.com"
            >
              <AiOutlineMail className="contact-button-extra-logo" size={40} />
              <span className="contact-button-extra">Email</span>
            </a>
          </div>
        </div>

        <form
          className="form-contact"
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: 10 }}
        >
          <div className="flex gap-3">
            <input
              className="form-contact-item w-1/2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              name="name"
              placeholder={t.contact.name}
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              className="form-contact-item w-1/2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              name="email"
              type="email"
              placeholder={t.contact.email}
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <textarea
            className="form-contact-item px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            name="message"
            placeholder={t.contact.message}
            value={form.message}
            onChange={handleChange}
            rows={7}
            required
          />
          <div className="flex flex-col items-center">
            <button className="form-contact-button send-button" type="submit">
              {t.contact.send}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
