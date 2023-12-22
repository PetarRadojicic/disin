import React from "react";

const GoogleMap = () => {
  return (
    <>
      <div className="map-area">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2831.716701234567!2d20.453123456789012!3d44.78765432109876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a655d785e9a6b%3A0x9876543210987654!2sNeznanog%20Junaka%205%2C%2011000%20Beograd%2C%20Serbia!5e0!3m2!1sen!2sbd!4v1607418551666!5m2!1sen!2sbd"
          height="550"
        ></iframe>
      </div>
    </>
  );
};

export default GoogleMap;
