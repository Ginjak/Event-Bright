import React from "react";
import "./contactForm.css";

const Contactform = () => {
  return (
    <>
      <div className="jumbotron jumbotron-fluid py-5 ps-0">
        <div id="background-overlay" className="container-fluid ms-0">
          <div className="container-fluid">
            <h1 className="display-4 text-white">EventBright</h1>
            <div className="row g-3"></div>
          </div>
        </div>
      </div>
      <div className="p-5 mb-4 rounded-3">
        <div class="container">
          <h3>
            <strong>Address</strong>
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
            aliquam quo. Error sunt, molestiae eos minima aliquid quos cumque ea
            corporis commodi itaque rem, dolores inventore repudiandae dicta
            impedit. Doloribus!
          </p>
          <h3>
            <strong>Email</strong>
          </h3>
          <p>EventBright@gmail.com</p>
          <h3>
            <strong>Follow us on socials</strong>
          </h3>
        </div>
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
    </>
  );
};

export default Contactform;
