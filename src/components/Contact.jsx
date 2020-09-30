import React from "react";
import ContactLink from "./ContactLink";

function Contact() {
  return (
    <section id="Contact" className="contact">
      <h2>Get in touch!</h2>
      <div>
        <ContactLink
          URL="mailto:csmarius0@gmail.com"
          text="csmarius0@gmail.com"
        />

        <ContactLink
          URL="https://www.linkedin.com/in/marius-ciocoiu/"
          text="LinkedIn"
        />

        <ContactLink URL="https://github.com/misterblack0" text="GitHub" />
      </div>
    </section>
  );
}

export default Contact;
