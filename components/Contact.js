// components/Contact.js
import { useState } from "react";
import Section from "./Section";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const formData = new FormData(e.target);

    try {
      const res = await fetch(e.target.action, {
        method: e.target.method,
        body: formData,
        headers: { Accept: "application/json" }
      });
      if (res.ok) {
        setStatus("Message sent successfully!");
        e.target.reset();
      } else {
        setStatus("Oops! Something went wrong.");
      }
    } catch (error) {
      setStatus("There was a problem submitting your form.");
    }
  };

  return (
    <Section id="contact" title="Contact Me">
      <p>
        Email:{" "}
        <a href="mailto:arvin.askari@queensu.ca" className="text-blue-500 hover:underline">
          arvin.askari@queensu.ca
        </a>
      </p>
      <p>
        GitHub:{" "}
        <a href="https://github.com/Arvincoder15" target="_blank" className="text-blue-500 hover:underline">
          github.com/Arvincoder15
        </a>
      </p>
      <p>
        LinkedIn:{" "}
        <a href="https://linkedin.com/in/arvin-askari" target="_blank" className="text-blue-500 hover:underline">
          linkedin.com/in/arvin-askari
        </a>
      </p>
      <form
        id="contact-form"
        action="https://formspree.io/f/meoevjlz"
        method="POST"
        onSubmit={handleSubmit}
        className="mt-4 space-y-4 max-w-lg"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full p-2 rounded border dark:bg-gray-700 dark:border-gray-600"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full p-2 rounded border dark:bg-gray-700 dark:border-gray-600"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          className="w-full p-2 rounded border dark:bg-gray-700 dark:border-gray-600"
        ></textarea>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Send
        </button>
        <p>{status}</p>
      </form>
    </Section>
  );
}
