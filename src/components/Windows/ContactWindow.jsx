import { useState } from "react";
import Window from "../UI/Window";
import emailjs from "@emailjs/browser";

function ContactWindow({ onClose }) {
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
    <Window
      title="Contact me"
      onClose={onClose}
      style={{ width: 650, height: 400 }}
    >
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: 10 }}
      >
        <div className="flex gap-3">
          <input
            className="w-1/2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            className="w-1/2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <textarea
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          rows={7}
          required
        />
        <div className="flex flex-col items-center">
          <button className="send-button" type="submit">
            Send
          </button>
        </div>
      </form>
    </Window>
  );
}

export default ContactWindow;
