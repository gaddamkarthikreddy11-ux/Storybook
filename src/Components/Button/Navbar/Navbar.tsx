import React, { useState } from "react";
import "./Navbar.css";

export type NavbarType =
  | "default"
  | "dark"
  | "gradient"
  | "transparent"
  | "glass"
  | "sticky";

export interface NavbarProps {
  type?: NavbarType;
  logo?: React.ReactNode;

  // actions
  onLoginClick?: () => void;
  onSignupClick?: () => void;

  // ✅ STYLE PROPS
  bgColor?: string;
  textColor?: string;
  buttonBg?: string;
  buttonTextColor?: string;
}

const Navbar: React.FC<NavbarProps> = ({
  type = "default",
  logo = "LOGO",

  onLoginClick,
  onSignupClick,

  bgColor,
  textColor = "#111",
  buttonBg = "#2563eb",
  buttonTextColor = "#fff",
}) => {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className={`navbar ${type}`}
      style={{
        background: bgColor,
        color: textColor,
      }}
    >
      {/* Logo */}
      <div className="logo">{logo}</div>

      {/* Links */}
      <ul className={`nav-links ${open ? "active" : ""}`}>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>

      {/* Buttons */}
      <div className="nav-actions">
        <button
          className="login-btn"
          onClick={onLoginClick}
          style={{
            borderColor: textColor,
            color: textColor,
          }}
        >
          Login
        </button>

        <button
          className="signup-btn"
          onClick={onSignupClick}
          style={{
            background: buttonBg,
            color: buttonTextColor,
          }}
        >
          Sign Up
        </button>
      </div>

      {/* Mobile */}
      <div
        className="menu-toggle"
        onClick={() => setOpen(!open)}
      >
        ☰
      </div>
      
    </nav>
  );
};

export default Navbar;