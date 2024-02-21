import React from "react";
import image from "../images/ku.jpg";

const imageAltText = "kathmandu univeristy";

/* create education component */
const Education = () => {
  return (
    <section className="padding" id="education" style={{ background: "skyblue" }}>
      <h2 style={{ textAlign: "center", fontWeight: "bold", fontSize: "3rem" }}>Education</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
              boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
            }}
            alt={imageAltText}
          />
        </div>
        <div style={{ maxWidth: "60%", paddingLeft: "18rem" }}>
          <h3 style={{ fontWeight: "normal", fontSize: "2rem", fontFamily: "sans-serif" }}>
            Kathmandu University, Dhulikhel
          </h3>
          <p style={{ fontWeight: "normal", fontSize: "1rem", fontFamily: "sans-serif" }}>
            Bachelor of Computer Engineering
          </p>
          <p style={{ fontWeight: "normal", fontSize: "1rem", fontFamily: "sans-serif" }}>
            2020 - 2025
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
