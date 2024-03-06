import React from "react";
import { NavLink } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./contactForm.css";

// Contact form section with two columns
const Contactform = () => {
  return (
    <>
      <section className="contact-details text-white py-5 px-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-md-6">
              <h3>Address</h3>
              <p className="m-0">123 Fake St</p>
              <p className="m-0">London</p>
              <p className="mb-2">EVE NT5</p>
              <h3>Email</h3>
              <NavLink
                to="mailto:eventbright@gmail.com"
                className="text-white mail-link"
              >
                info@eventbright.com
              </NavLink>

              <h3 className="mt-2">Follow us on socials</h3>
              <div className="social-links">
                <NavLink to="https://www.instagram.com/" target="_blank">
                  <InstagramIcon
                    fontSize="large"
                    className=" icons spacing text-white ms-0 mail-link"
                  />
                </NavLink>
                <NavLink to="https://www.facebook.com/" target="_blank">
                  <FacebookIcon
                    fontSize="large"
                    className=" icons spacing text-white mail-link"
                  />
                </NavLink>
                <NavLink to="https://www.youtube.com/" target="_blank">
                  <YouTubeIcon
                    fontSize="large"
                    className=" icons spacing text-white mail-link"
                  />
                </NavLink>
                <NavLink
                  to="https://github.com/Ginjak/Event-Bright"
                  target="_blank"
                >
                  <GitHubIcon
                    fontSize="large"
                    className=" icons spacing text-white mail-link"
                  />
                </NavLink>
              </div>
            </div>
            <div className="mt-5 mt-md-0 col-md-6">
              <div className="contact-form">
                <form>
                  <div className="form-group">
                    <label className="fw-bold" htmlFor="name">
                      Your Name:
                    </label>
                    <br />
                    <input
                      className="form-control"
                      type="text"
                      id="name"
                      name="name"
                      required
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <label className="fw-bold" htmlFor="email">
                      Your Email:
                    </label>
                    <br />
                    <input
                      className="form-control"
                      type="email"
                      id="email"
                      name="email"
                      required
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <label className="fw-bold" htmlFor="subject">
                      Subject:
                    </label>
                    <br />
                    <input
                      className="form-control"
                      type="subject"
                      id="subject"
                      name="subject"
                      required
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <label className="fw-bold" htmlFor="message">
                      Message:
                    </label>
                    <br />
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows="4"
                      required
                    />
                  </div>
                  <br />
                  <button className="btn-contact" type="submit">
                    <strong>Submit</strong>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contactform;
