import React from "react";
import "./contact-page.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function ContactsPage() {
  React.useEffect(() => {
    document.title = `Контакты и реквизиты`;
  }, []);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="contact_page">
      <div
        className="contact_title"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h1>Контакты и реквизиты</h1>
      </div>

      <div
        className="contact_content"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h3>Контакты администрации</h3>
        <p>
          <span>E-mail:</span> ------@---.bz{" "}
        </p>
        <p>
          <span>WMID:</span>
          0000000000000000{" "}
        </p>
        <span>
          <span>Telegram:</span> @-------
        </span>
      </div>
    </div>
  );
}

export default ContactsPage;
