import React from "react";
import "./contact-page.css";

function ContactsPage() {
  React.useEffect(() => {
    document.title = `Контакты и реквизиты`;
  }, []);
  return (
    <div className="contact_page">
      <div className="contact_title">
        <h1>Контакты и реквизиты</h1>
      </div>

      <div className="contact_content">
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
