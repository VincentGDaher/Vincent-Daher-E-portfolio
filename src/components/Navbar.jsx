import { useState } from "react";

export default function Navbar({ items }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <a className="navbar__brand" href="#home" onClick={() => setIsOpen(false)}>
        <span>VD</span>
        <strong>Vincent Daher</strong>
      </a>
      <button
        className="navbar__toggle"
        type="button"
        aria-expanded={isOpen}
        aria-label="Toggle navigation"
        onClick={() => setIsOpen((value) => !value)}
      >
        <span />
        <span />
        <span />
      </button>
      <div className={`navbar__links ${isOpen ? "is-open" : ""}`}>
        {items.map((item) => (
          <a href={item.href} key={item.href} onClick={() => setIsOpen(false)}>
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
