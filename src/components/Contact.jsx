import React from "react";
import Button from "./Button";
import SocialIcon from "./SocialIcon";

function Contact() {
  return (
    <section id="Contact" className="contact">
      <h2>Get in touch</h2>
      <Button URL="mailto:csmarius0@gmail.com" content="Email me" />
      <Button URL="mailto:csmarius0@gmail.com" content="Resume" />

      {social - icons.map((icon) => <SocialIcon key={social.id} />)}
    </section>
  );
}

export default Contact;
