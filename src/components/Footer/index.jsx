import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";
import React from "react";
import { NavLink } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <nav className="navbar bg-body-tertiary bg-image">
        <div className="p-3">
          <div className="container-fluid p-2">
            <NavLink to="/" className="navbar-brand">
              <img
                src="/eventBright-logo.png"
                alt="Logo"
                width="30"
                height="24"
                className="d-inline-block align-text-top"
              />
              <span className="title">EventBright</span>
            </NavLink>
          </div>
        </div>
        {/* social medias >> */}
        <div className="socials-container">
          <span className="fs-6 p-3 fw-bold">Future links</span>
          <div className="socials-list">
            <NavLink to="https://www.instagram.com/" target="_blank">
              <InstagramIcon fontSize="large" className="link spacing" />
            </NavLink>
            <NavLink to="https://www.facebook.com/" target="_blank">
              <FacebookIcon fontSize="large" className="link spacing" />
            </NavLink>
            <NavLink to="https://www.youtube.com/" target="_blank">
              <YouTubeIcon fontSize="large" className="link spacing" />
            </NavLink>
            <NavLink
              to="https://github.com/Ginjak/Event-Bright"
              target="_blank"
            >
              <GitHubIcon fontSize="large" className="link spacing m-right" />
            </NavLink>
          </div>
        </div>
        <div className="pages-container">
          <span className="fs-6 p-3 fw-bold">Explore </span>
          <NavLink to="/about" className="link spacing">
            About
          </NavLink>
          <NavLink to="/contact" className="link spacing m-right">
            Contact
          </NavLink>
        </div>
      </nav>
      <div className="date-container">
        <p>&copy; {new Date().getFullYear()} EventBright</p>
      </div>
    </>
  );
};

export default Footer;
