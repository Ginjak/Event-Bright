import React from "react";
import "./contactForm.css";

const Contactform = () => {
  return (
    <>
      <div className="p-5 mb-4 rounded-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <h3>
                <strong>Address</strong>
              </h3>
              <p>
                123 Fake St
                London
                EVE NT5
              </p>
              <h3>
                <strong>Email</strong>
              </h3>
              <p>EventBright@gmail.com</p>
              <h3>
                <strong>Follow us on socials</strong>
              </h3>
            </div>

            <div className="col-6">
              <div className="container-fluid">
                <div className="contact-form">
                  <h2>Contact Us</h2>
                  <form>
                    <div className="form-group">
                      <label htmlFor="name">
                        <strong>Your Name: </strong>
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
                      <label htmlFor="email">
                        <strong>Your Email:</strong>{" "}
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
                      <label htmlFor="subject">
                        <strong>Subject:</strong>{" "}
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
                      <label htmlFor="message">
                        <strong>Message:</strong>{" "}
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
                    <button className="formButton" type="submit">
                      <strong>Submit</strong>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactform;
