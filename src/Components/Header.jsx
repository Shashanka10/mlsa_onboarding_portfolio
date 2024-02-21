/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React from "react";

const Header = () => {
  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        gap: "3rem",
        background: "grey",
        opacity: "90%",
        padding: "1.5rem",
        top: 0,
        width: "100%",
        zIndex: 10,
      }}
    >
      <a
        href="#home"
        style={{ fontWeight: "normal", fontFamily: "sans-serif", fontSize: "1.1rem" }}
      >
        Home
      </a>
      <a
        href="#about"
        style={{ fontWeight: "normal", fontFamily: "sans-serif", fontSize: "1.1rem" }}
      >
        About
      </a>
      <a
        href="#portfolio"
        style={{ fontWeight: "normal", fontFamily: "sans-serif", fontSize: "1.1rem" }}
      >
        Portfolio
      </a>
      <a
        href="#footer"
        style={{ fontWeight: "normal", fontFamily: "sans-serif", fontSize: "1.1rem" }}
      >
        Contact
      </a>
      <a
        href="#education"
        style={{ fontWeight: "normal", fontFamily: "sans-serif", fontSize: "1.1rem" }}
      >
        Education
      </a>
    </div>
  );
};

export default Header;
