import React from "react";
import { Typography } from "@material-ui/core";
import { useState } from "react";

import "./SideNavbar.css";

export const SideNavbar = () => {
  const [activeNav, setActiveNav] = useState("#");

  const handleNavClick = (navItem) => {
    setActiveNav(navItem);

    // Scroll to the corresponding section
    const element = document.getElementById(navItem.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav>
      <a
        href="#"
        onClick={() => handleNavClick("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <Typography>Home</Typography>
      </a>
      <a
        href="#works"
        onClick={() => handleNavClick("#works")}
        className={activeNav === "#works" ? "active" : ""}
      >
        <Typography>Projects</Typography>
      </a>
      <a
        href="#skills"
        onClick={() => handleNavClick("#skills")}
        className={activeNav === "#skills" ? "active" : ""}
      >
        <Typography>Skills</Typography>
      </a>

      <a
        href="#about"
        onClick={() => handleNavClick("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <Typography>About</Typography>
      </a>
      <a
        href="#contact"
        onClick={() => handleNavClick("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <Typography>Contact</Typography>
      </a>
    </nav>
  );
};
