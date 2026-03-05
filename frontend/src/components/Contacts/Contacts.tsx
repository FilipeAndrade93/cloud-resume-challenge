import React from "react";
import "./Contacts.scss";

const contactItems = [
  {
    label: "Email",
    value: "filipeandrade250693@gmail.com",
    href: "mailto:filipeandrade250693@gmail.com",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
  },
  {
    label: "Phone",
    value: "(+351) 938 535 301",
    href: "tel:+351938535301",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.97-1.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  },
  {
    label: "Location",
    value: "Lisboa, Portugal",
    href: null,
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
  },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/FilipeAndrade93" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/filipe-andrade-4549138b/",
  },
];

const Contacts: React.FC = () => {
  return (
    <div className="contacts">
      <h2 className="contacts__heading">
        Contacts<span className="contacts__dot">.</span>
      </h2>
      <p className="contacts__subheading">
        I'm always open to discussing new opportunities or projects.
        <br />
        Feel free to reach out.
      </p>

      <div className="contacts__items">
        {contactItems.map((item) => (
          <div className="contacts__item" key={item.label}>
            <div
              className="contacts__icon"
              dangerouslySetInnerHTML={{ __html: item.icon }}
            />
            <div className="contacts__item-body">
              <span className="contacts__item-label">{item.label}</span>
              {item.href ? (
                <a href={item.href} className="contacts__item-value">
                  {item.value}
                </a>
              ) : (
                <span className="contacts__item-value">{item.value}</span>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="contacts__social">
        <span className="contacts__social-label">Find me on</span>
        <div className="contacts__social-links">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="contacts__social-link"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <div className="contacts__footer">
        <hr className="contacts__footer-divider" />
        <p className="contacts__footer-text">
          © 2026 Filipe Andrade. All rights reserved.
        </p>
        <a
          href="https://github.com/FilipeAndrade93/cloud-resume-challenge"
          target="_blank"
          rel="noopener noreferrer"
          className="contacts__footer-source"
        >
          View Source Code
        </a>
      </div>
    </div>
  );
};

export default Contacts;
