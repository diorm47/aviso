import React from "react";
import { Navigate } from "react-router-dom";
import "./support-page.css";

function SupportPage() {
  React.useEffect(() => {
    document.title = `Техническая поддержка`;
  }, []);
  return (
    <div className="support_page">
      <div className="support_page_title">
        <h1>Техническая поддержка</h1>
      </div>

      <div className="support_content">
        <Navigate to="/login" replace={true} />
      </div>
    </div>
  );
}

export default SupportPage;
