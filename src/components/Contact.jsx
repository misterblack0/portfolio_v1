import React from "react";
import Link from "./Link";

const Contact = () => (
  <section id="contact" className="contact">
    <h2 className="section__title">Get in touch!</h2>
    <div>
      <Link URL="mailto:csmarius0@gmail.com" text="csmarius0@gmail.com" />
      <Link URL="https://www.linkedin.com/in/marius-ciocoiu/" text="LinkedIn" />
      <Link URL="https://github.com/misterblack0" text="GitHub" />
    </div>
  </section>
);

export default Contact;
