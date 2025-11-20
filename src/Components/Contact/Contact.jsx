// src/components/Contact.jsx
import React from "react";
import { contactData } from "../Constants/Constants";

const Contact = () => {
  return (
    <section className="py-20 px-8 md:px-20" id="contact" style={{ scrollMarginTop: '96px' }}>
      <h2 className="text-4xl font-bold mb-10 text-center">Contact</h2>
      <div className="max-w-2xl mx-auto flex flex-col gap-6">
        <p>Email: {contactData.email}</p>
        <p>Phone: {contactData.phone}</p>
        <p>Location: {contactData.location}</p>
        <div className="flex gap-6 mt-4">
          {contactData.social.map((s) => (
            <a
              key={s.name}
              href={s.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-500 hover:underline"
            >
              {s.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
