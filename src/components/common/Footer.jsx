import React from "react";
import logo from "../../assets/PawMart.png";
import { Link } from "react-router";
import { FaTwitter, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="footer sm:footer-horizontal bg-base-300 p-10"
      style={{ color: "var(--color-text-primary)" }}
    >
      {/* Logo and About */}
      <div>
        <img width={150} src={logo} alt="PawMart Logo" className="mb-2" />
        <p>
          PawMart – Community-driven platform for pets & supplies.
          <br />
          &copy; {new Date().getFullYear()} PawMart. All rights reserved.
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h6 className="footer-title">Company</h6>
        <Link to="/about" className="link link-hover">About Us</Link>
        <Link to="/contact" className="link link-hover">Contact</Link>
      </div>

      {/* Legal */}
      <div>
        <h6 className="footer-title">Legal</h6>
        <a href="#" className="link link-hover">Terms of Use</a>
        <a href="#" className="link link-hover">Privacy Policy</a>
      </div>

      {/* Social Links */}
      <div>
        <h6 className="footer-title">Follow Us</h6>
        <div className="flex gap-3 mt-2">
          <a href="https://x.com/AbedazimReal" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
            <FaTwitter size={20} />
          </a>
          <a href="https://github.com/the-abed" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/mohammad-abed-477100386/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
            <FaLinkedin size={20} />
          </a>
          <a href="mailto:abedpersonal2024@gmail.com" className="hover:text-primary transition">
            <FaEnvelope size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
