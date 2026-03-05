import React, { useEffect, useState } from "react";
import "./Navbar.scss";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Me", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Other Activities", href: "#other-activities" },
  { label: "Contacts", href: "#contacts" },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <span className="navbar__logo">Filipe Andrade</span>
      <ul className="navbar__links">
        {navLinks.map(({ label, href }) => (
          <li key={href}>
            <a
              href={href}
              className="navbar__link"
              onClick={(e) => handleNavClick(e, href)}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
