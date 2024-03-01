import React from "react";
import "./contactForm.css";

const Contactform = () => {
  return (
    <div className="p-5 mb-4 bg-body-tertiary rounded-3">
      <div className="container-fluid py-5">
        <div className="contact-form">
          <h2>Contact Us</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">
                <strong>Your Name: </strong>
              </label>
              <br />
              <input type="text" id="name" name="name" required />
            </div>
            <br />
            <div className="form-group">
              <label htmlFor="email">
                <strong>Your Email:</strong>{" "}
              </label>
              <br />
              <input type="email" id="email" name="email" required />
            </div>
            <br />
            <div className="form-group">
              <label htmlFor="subject">
                <strong>Subject:</strong>{" "}
              </label>
              <br />
              <input type="subject" id="subject" name="subject" required />
            </div>
            <br />
            <div className="form-group">
              <label htmlFor="message">
                <strong>Message:</strong>{" "}
              </label>
              <br />
              <textarea id="message" name="message" rows="4" required />
            </div>
            <br />
            <button className="formButton" type="submit">
              <strong>Submit</strong>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactform;
