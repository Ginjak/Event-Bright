import "./contact.css";
import Contactform from "../../components/Contactform";
import Hero from "../../components/Hero";
function Contact() {
  return (
    <>
      {/* Importing Hero component with parameters */}
      <Hero herBg={"/contact-hero.jpg"} title={"Contact Us"} />
      {/* Importing Contactform component */}
      <Contactform />
    </>
  );
}

export default Contact;
