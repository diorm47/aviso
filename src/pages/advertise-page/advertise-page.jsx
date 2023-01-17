import React from "react";
import { Navigate } from "react-router-dom";
import "./advertise-page.css";

function AdvertisePage() {
 
  let logined;
  return (
    <div className="advertise_page">
      <div className="advertise_page_title">
        
      </div>
      {!logined ? (
        <Navigate to="/login" replace={true} />
      ) : (
        <div className="advertise_content"></div>
      )}
    </div>
  );
}

export default AdvertisePage;
