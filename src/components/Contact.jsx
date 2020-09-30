import React from "react";
import Link from "./Link";

function Contact() {
  return (
    <section id="Contact" className="contact">
      <h2 className="secondary-heading">Get in touch!</h2>
      <div>
        <Link URL="mailto:csmarius0@gmail.com" text="csmarius0@gmail.com" />
        <Link
          URL="https://www.linkedin.com/in/marius-ciocoiu/"
          text="LinkedIn"
        />
        <Link URL="https://github.com/misterblack0" text="GitHub" />
      </div>
    </section>
  );
}

export default Contact;
